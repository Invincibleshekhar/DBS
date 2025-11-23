import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;
const DB_FILE = join(__dirname, 'contacts.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize JSON database file if it doesn't exist
if (!existsSync(DB_FILE)) {
  writeFileSync(DB_FILE, JSON.stringify({ contacts: [] }, null, 2));
}

// Helper functions to read/write database
const readDB = () => {
  try {
    const data = readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { contacts: [] };
  }
};

const writeDB = (data) => {
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// API endpoint to submit contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please fill in all required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please enter a valid email address' 
      });
    }

    // Read current database
    const db = readDB();

    // Create new contact entry
    const newContact = {
      id: db.contacts.length > 0 ? Math.max(...db.contacts.map(c => c.id)) + 1 : 1,
      name,
      email,
      company: company || null,
      subject,
      message,
      created_at: new Date().toISOString()
    };

    // Add to database
    db.contacts.push(newContact);
    writeDB(db);

    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: newContact.id 
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      error: 'An error occurred while submitting the form' 
    });
  }
});

// API endpoint to get all contacts (for admin purposes)
app.get('/api/contacts', (req, res) => {
  try {
    const db = readDB();
    // Sort by created_at descending
    const sortedContacts = db.contacts.sort((a, b) => 
      new Date(b.created_at) - new Date(a.created_at)
    );
    res.json({ success: true, contacts: sortedContacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false, 
      error: 'An error occurred while fetching contacts' 
    });
  }
});

// API endpoint to get a single contact by ID
app.get('/api/contact/:id', (req, res) => {
  try {
    const { id } = req.params;
    const db = readDB();
    const contact = db.contacts.find(c => c.id === parseInt(id));
    
    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        error: 'Contact not found' 
      });
    }

    res.json({ success: true, contact });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ 
      success: false, 
      error: 'An error occurred while fetching the contact' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📁 Database location: ${DB_FILE}`);
  console.log(`📊 Current contacts: ${readDB().contacts.length}`);
});

