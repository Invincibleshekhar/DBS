# DBS Infotech Backend Server

This is the backend API server for handling contact form submissions.

## Setup Instructions

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Submit a contact form
- **Body**: 
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Company Name (optional)",
    "subject": "General Inquiry",
    "message": "Your message here"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "message": "Contact form submitted successfully",
    "id": 1
  }
  ```

### GET /api/contacts
Get all contact submissions (admin use)
- **Response**: 
  ```json
  {
    "success": true,
    "contacts": [...]
  }
  ```

### GET /api/contact/:id
Get a specific contact by ID
- **Response**: 
  ```json
  {
    "success": true,
    "contact": {...}
  }
  ```

### GET /api/health
Health check endpoint
- **Response**: 
  ```json
  {
    "status": "ok",
    "message": "Server is running"
  }
  ```

## Database

The server uses SQLite for data storage. The database file `contacts.db` is created automatically in the server directory.

### Database Schema

```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Running Both Frontend and Backend

You need to run both servers simultaneously:

1. Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```

2. Terminal 2 (Backend):
   ```bash
   cd server
   npm start
   ```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:3001`.
