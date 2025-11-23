import React, { useState } from 'react';
import { 
  Building2, 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Landmark, 
  Factory,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const SolutionDetails = () => {
  const [activeTab, setActiveTab] = useState('enterprise');

  const solutionDetails = {
    'enterprise': {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions designed to streamline operations and drive growth for large organizations.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      challenges: [
        'Complex business processes',
        'Legacy system integration',
        'Scalability requirements',
        'Data silos and inefficiencies',
        'Compliance and security concerns'
      ],
      solutions: [
        'Enterprise Resource Planning (ERP) systems',
        'Customer Relationship Management (CRM)',
        'Business Process Automation',
        'Data integration and analytics',
        'Enterprise security frameworks'
      ],
      features: [
        'Scalable architecture',
        'Real-time analytics',
        'Multi-tenant support',
        'API-first design',
        'Cloud-native deployment'
      ],
      caseStudy: {
        client: 'Fortune 500 Manufacturing Company',
        challenge: 'Needed to integrate multiple legacy systems and automate complex manufacturing processes',
        solution: 'Implemented comprehensive ERP system with custom modules for inventory, production, and quality control',
        results: ['40% reduction in operational costs', '60% faster order processing', '99.9% system uptime']
      }
    },
    'healthcare': {
      icon: Heart,
      title: 'Healthcare Technology',
      description: 'HIPAA-compliant healthcare solutions that improve patient care, streamline operations, and ensure regulatory compliance.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      challenges: [
        'Patient data security and privacy',
        'Regulatory compliance (HIPAA, HITECH)',
        'Interoperability between systems',
        'Patient engagement and experience',
        'Operational efficiency'
      ],
      solutions: [
        'Electronic Health Records (EHR) systems',
        'Telemedicine platforms',
        'Patient portal development',
        'Medical imaging solutions',
        'Healthcare analytics and reporting'
      ],
      features: [
        'HIPAA compliance',
        'HL7 FHIR integration',
        'Secure messaging',
        'Mobile accessibility',
        'Real-time monitoring'
      ],
      caseStudy: {
        client: 'Regional Healthcare Network',
        challenge: 'Needed unified EHR system across 15 facilities with telemedicine capabilities',
        solution: 'Developed integrated EHR platform with telemedicine module and patient portal',
        results: ['30% improvement in patient satisfaction', '25% reduction in administrative costs', '50% increase in telemedicine adoption']
      }
    },
    'education': {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Innovative EdTech solutions that enhance learning experiences, improve educational outcomes, and modernize institutions.',
      image: 'https://images.pexels.com/photos/159775/library-books-education-literature-159775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      challenges: [
        'Remote and hybrid learning needs',
        'Student engagement and retention',
        'Administrative efficiency',
        'Data-driven decision making',
        'Technology accessibility'
      ],
      solutions: [
        'Learning Management Systems (LMS)',
        'Virtual classroom platforms',
        'Student Information Systems (SIS)',
        'Educational content management',
        'Assessment and analytics tools'
      ],
      features: [
        'Multi-device compatibility',
        'Interactive content delivery',
        'Progress tracking',
        'Collaborative tools',
        'Accessibility compliance'
      ],
      caseStudy: {
        client: 'State University System',
        challenge: 'Rapid transition to online learning during pandemic with 50,000+ students',
        solution: 'Implemented comprehensive LMS with virtual classrooms and assessment tools',
        results: ['95% student participation rate', '40% improvement in course completion', '60% reduction in administrative workload']
      }
    },
    'ecommerce': {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Comprehensive e-commerce platforms that drive online sales, enhance customer experience, and scale with your business.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      challenges: [
        'Competitive online marketplace',
        'Customer acquisition and retention',
        'Inventory and order management',
        'Payment security and processing',
        'Mobile commerce optimization'
      ],
      solutions: [
        'Custom e-commerce platforms',
        'Multi-channel selling integration',
        'Inventory management systems',
        'Payment gateway integration',
        'Customer analytics and personalization'
      ],
      features: [
        'Responsive design',
        'SEO optimization',
        'Multi-payment support',
        'Real-time inventory',
        'Advanced analytics'
      ],
      caseStudy: {
        client: 'Fashion Retail Chain',
        challenge: 'Needed omnichannel platform to integrate online and offline sales across 100+ stores',
        solution: 'Built unified e-commerce platform with POS integration and inventory synchronization',
        results: ['200% increase in online sales', '35% improvement in inventory turnover', '50% reduction in order fulfillment time']
      }
    }
  };

  const tabs = [
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ];

  const activeSolution = solutionDetails[activeTab as keyof typeof solutionDetails];

  return (
    <section id="solution-details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solution Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our industry-specific solutions designed to address unique challenges 
            and drive success in your sector.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Solution Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <div className="relative h-64 md:h-80">
            <img
              src={activeSolution.image}
              alt={activeSolution.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <activeSolution.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{activeSolution.title}</h3>
                <p className="text-xl text-gray-100 max-w-2xl">{activeSolution.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-red-500 mr-3" />
                  Industry Challenges
                </h4>
                <div className="space-y-3">
                  {activeSolution.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-green-500 mr-3" />
                  Our Solutions
                </h4>
                <div className="space-y-3">
                  {activeSolution.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeSolution.features.map((feature, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                Success Story
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Client</h5>
                  <p className="text-gray-700 mb-4">{activeSolution.caseStudy.client}</p>
                  
                  <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                  <p className="text-gray-700">{activeSolution.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                  <p className="text-gray-700">{activeSolution.caseStudy.solution}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Results</h5>
                  <div className="space-y-2">
                    {activeSolution.caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Transform Your {activeSolution.title.split(' ')[0]} Operations</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Ready to overcome your industry challenges with our proven solutions? 
                Let's discuss how we can help you achieve similar success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetails;