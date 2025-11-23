import React, { useState } from 'react';
import { 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Globe, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Target
} from 'lucide-react';

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState('custom-software');

  const serviceDetails = {
    'custom-software': {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Transform your business ideas into powerful, scalable software solutions tailored to your specific needs.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Full-stack web application development',
        'Desktop application development',
        'API development and integration',
        'Legacy system modernization',
        'Microservices architecture',
        'Progressive Web Applications (PWA)'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Angular', 'Vue.js', 'MongoDB', 'PostgreSQL'],
      process: [
        { step: 'Requirements Analysis', description: 'Deep dive into your business needs and technical requirements' },
        { step: 'System Design', description: 'Create comprehensive architecture and design documentation' },
        { step: 'Development', description: 'Agile development with regular updates and feedback loops' },
        { step: 'Testing & QA', description: 'Rigorous testing to ensure quality and performance' },
        { step: 'Deployment', description: 'Seamless deployment and go-live support' },
        { step: 'Maintenance', description: 'Ongoing support and feature enhancements' }
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual processes',
        'Better data management',
        'Scalable solutions that grow with your business'
      ]
    },
    'cloud-solutions': {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing to enhance scalability, reduce costs, and improve business agility.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Cloud migration and modernization',
        'Multi-cloud and hybrid cloud strategies',
        'Infrastructure as Code (IaC)',
        'DevOps and CI/CD implementation',
        'Cloud security and compliance',
        'Cost optimization and monitoring'
      ],
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      process: [
        { step: 'Cloud Assessment', description: 'Evaluate current infrastructure and cloud readiness' },
        { step: 'Migration Strategy', description: 'Develop comprehensive migration roadmap' },
        { step: 'Implementation', description: 'Execute migration with minimal downtime' },
        { step: 'Optimization', description: 'Fine-tune performance and costs' },
        { step: 'Monitoring', description: 'Continuous monitoring and maintenance' },
        { step: 'Support', description: '24/7 cloud infrastructure support' }
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery',
        'Better collaboration and accessibility'
      ]
    },
    'cybersecurity': {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with comprehensive cybersecurity solutions and proactive threat management.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Security assessments and audits',
        'Penetration testing and vulnerability scanning',
        'Security incident response',
        'Compliance management (GDPR, HIPAA, SOX)',
        'Employee security training',
        'Security monitoring and SIEM'
      ],
      technologies: ['Splunk', 'CrowdStrike', 'Nessus', 'Metasploit', 'Wireshark', 'OWASP Tools'],
      process: [
        { step: 'Security Assessment', description: 'Comprehensive evaluation of current security posture' },
        { step: 'Risk Analysis', description: 'Identify and prioritize security risks' },
        { step: 'Implementation', description: 'Deploy security controls and measures' },
        { step: 'Monitoring', description: 'Continuous security monitoring and threat detection' },
        { step: 'Incident Response', description: 'Rapid response to security incidents' },
        { step: 'Compliance', description: 'Ongoing compliance monitoring and reporting' }
      ],
      benefits: [
        'Reduced security risks',
        'Regulatory compliance',
        'Business continuity protection',
        'Enhanced customer trust'
      ]
    },
    'mobile-development': {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create engaging mobile experiences with native and cross-platform applications for iOS and Android.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Mobile UI/UX design',
        'App store optimization',
        'Mobile backend development',
        'App maintenance and updates'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 'Firebase', 'Node.js'],
      process: [
        { step: 'Concept & Strategy', description: 'Define app concept and development strategy' },
        { step: 'Design & Prototyping', description: 'Create wireframes and interactive prototypes' },
        { step: 'Development', description: 'Build the app with regular testing and feedback' },
        { step: 'Testing', description: 'Comprehensive testing across devices and platforms' },
        { step: 'Deployment', description: 'App store submission and launch' },
        { step: 'Post-Launch', description: 'Ongoing support and feature updates' }
      ],
      benefits: [
        'Expanded market reach',
        'Enhanced customer engagement',
        'New revenue streams',
        'Improved brand visibility'
      ]
    }
  };

  const tabs = [
    { id: 'custom-software', label: 'Custom Software' },
    { id: 'cloud-solutions', label: 'Cloud Solutions' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'mobile-development', label: 'Mobile Development' }
  ];

  const activeService = serviceDetails[activeTab as keyof typeof serviceDetails];

  return (
    <section id="service-details" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into our comprehensive IT services and discover how we can 
            transform your business with cutting-edge technology solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-64 md:h-80">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <activeService.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{activeService.title}</h3>
                <p className="text-xl text-blue-100 max-w-2xl">{activeService.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features & Technologies */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                <div className="space-y-3 mb-8">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Process & Benefits */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h4>
                <div className="space-y-4 mb-8">
                  {activeService.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">{step.step}</h5>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h4>
                <div className="space-y-3">
                  {activeService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's discuss how our {activeService.title.toLowerCase()} can help transform your business 
                and achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;