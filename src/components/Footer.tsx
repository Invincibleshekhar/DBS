import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Services': [
      'Custom Software Development',
      'Cloud Solutions',
      'Cybersecurity Services',
      'Mobile App Development',
      'Data Analytics & BI',
      'Digital Transformation'
    ],
    'Solutions': [
      'Enterprise Solutions',
      'Healthcare Technology',
      'Education Technology',
      'E-Commerce Solutions',
      'Government Solutions',
      'Manufacturing Solutions'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Blog',
      'Contact Us'
    ],
    'Support': [
      'Help Center',
      'Documentation',
      'Community',
      'Status',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DBS Infotech Inc.</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in digital transformation, delivering innovative IT solutions 
                that drive business growth and operational excellence.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-300">Info@dbsinfotech.co</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-300">+1 (587) 917-1769</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-gray-300">820 AVE SW, Calgary, AB, Canada, T2P0N4</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DBS Infotech Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;