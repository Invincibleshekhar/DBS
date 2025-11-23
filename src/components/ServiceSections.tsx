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
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

const ServiceSections = () => {
  const serviceDetails = [
    {
      id: 'custom-software',
      icon: Code,
      title: 'Custom Software Development',
      subtitle: 'Tailored Solutions for Your Unique Business Needs',
      description: 'We create bespoke software solutions that perfectly align with your business processes, objectives, and challenges. Our experienced development team leverages cutting-edge technologies to build scalable, maintainable, and high-performance applications.',
      features: [
        'Full-stack web application development',
        'Desktop software solutions (Windows, macOS, Linux)',
        'RESTful and GraphQL API development',
        'Legacy system modernization and migration',
        'Microservices architecture implementation',
        'Third-party system integration'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual processes and errors',
        'Scalable solutions that grow with your business',
        'Competitive advantage through innovation'
      ],
      process: [
        'Requirements analysis and documentation',
        'Architecture design and technical planning',
        'Agile development with regular sprints',
        'Quality assurance and testing',
        'Deployment and integration',
        'Ongoing support and maintenance'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      subtitle: 'Scalable and Reliable Cloud Infrastructure',
      description: 'Transform your IT infrastructure with comprehensive cloud solutions that enhance scalability, reliability, and cost-effectiveness. We help businesses migrate to the cloud, optimize existing cloud deployments, and implement cloud-native architectures.',
      features: [
        'Cloud migration strategy and execution',
        'Multi-cloud and hybrid cloud solutions',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Serverless architecture design',
        'Cloud cost optimization'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery capabilities',
        'Global availability and performance'
      ],
      process: [
        'Current infrastructure assessment',
        'Cloud strategy development',
        'Migration planning and roadmap',
        'Phased migration execution',
        'Testing and validation',
        'Optimization and monitoring'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible']
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Services',
      subtitle: 'Protect Your Digital Assets with Robust Security',
      description: 'Safeguard your organization from cyber threats with comprehensive security solutions. Our cybersecurity experts implement multi-layered defense strategies to protect your data, systems, and reputation.',
      features: [
        'Security audits and vulnerability assessments',
        'Penetration testing and ethical hacking',
        'Compliance management (GDPR, HIPAA, SOC 2)',
        'Security Information and Event Management (SIEM)',
        'Incident response and forensics',
        'Security awareness training'
      ],
      benefits: [
        'Reduced risk of data breaches',
        'Regulatory compliance assurance',
        'Enhanced customer trust',
        'Minimized business disruption'
      ],
      process: [
        'Security posture assessment',
        'Risk identification and analysis',
        'Security strategy development',
        'Implementation of security controls',
        'Continuous monitoring',
        'Regular security reviews and updates'
      ],
      technologies: ['Firewalls', 'IDS/IPS', 'SIEM', 'Endpoint Protection', 'SSL/TLS', 'Zero Trust Architecture']
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Engaging Mobile Experiences for iOS and Android',
      description: 'Create powerful mobile applications that engage users and drive business results. We develop native and cross-platform mobile apps that deliver exceptional performance and user experience.',
      features: [
        'Native iOS development (Swift/SwiftUI)',
        'Native Android development (Kotlin/Jetpack Compose)',
        'Cross-platform development (React Native/Flutter)',
        'Mobile UI/UX design',
        'App Store optimization',
        'Mobile backend and API integration'
      ],
      benefits: [
        'Expanded customer reach',
        'Improved customer engagement',
        'New revenue streams',
        'Enhanced brand visibility'
      ],
      process: [
        'Mobile strategy and planning',
        'UI/UX design and prototyping',
        'Development and testing',
        'Beta testing and feedback',
        'App store submission',
        'Post-launch support and updates'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL']
    },
    {
      id: 'data-analytics',
      icon: Database,
      title: 'Data Analytics & Business Intelligence',
      subtitle: 'Transform Data into Actionable Insights',
      description: 'Unlock the power of your data with advanced analytics and business intelligence solutions. We help organizations make data-driven decisions through comprehensive data analysis, visualization, and predictive modeling.',
      features: [
        'Data warehousing and ETL processes',
        'Business intelligence dashboard development',
        'Advanced data visualization',
        'Predictive analytics and machine learning',
        'Real-time analytics and reporting',
        'Data governance and quality management'
      ],
      benefits: [
        'Better decision-making capabilities',
        'Improved operational efficiency',
        'Identification of new opportunities',
        'Competitive advantage through insights'
      ],
      process: [
        'Data assessment and discovery',
        'Data architecture design',
        'ETL development and implementation',
        'Dashboard and report creation',
        'User training and adoption',
        'Continuous improvement and refinement'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Apache Spark', 'Machine Learning']
    },
    {
      id: 'digital-transformation',
      icon: Globe,
      title: 'Digital Transformation',
      subtitle: 'Modernize Your Business for the Digital Age',
      description: 'Navigate the digital revolution with comprehensive transformation services. We help organizations reimagine their business processes, culture, and customer experiences through strategic use of digital technologies.',
      features: [
        'Digital strategy development',
        'Business process automation',
        'Legacy system modernization',
        'Change management and training',
        'Digital customer experience design',
        'Innovation workshops and consulting'
      ],
      benefits: [
        'Enhanced competitive positioning',
        'Improved operational efficiency',
        'Better customer experiences',
        'Increased agility and innovation'
      ],
      process: [
        'Current state assessment',
        'Vision and strategy development',
        'Roadmap creation',
        'Phased implementation',
        'Change management',
        'Continuous optimization'
      ],
      technologies: ['RPA', 'AI/ML', 'IoT', 'Blockchain', 'Cloud Computing', 'API Integration']
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Consulting',
      subtitle: 'Strategic IT Guidance for Business Success',
      description: 'Leverage our expertise to align your technology investments with business objectives. Our IT consultants provide strategic guidance on technology selection, architecture design, and digital strategy.',
      features: [
        'Technology strategy and roadmap',
        'Enterprise architecture design',
        'Vendor selection and evaluation',
        'IT project management',
        'Technology assessment and audit',
        'Digital innovation consulting'
      ],
      benefits: [
        'Optimized technology investments',
        'Reduced project risks',
        'Improved IT-business alignment',
        'Access to expert knowledge'
      ],
      process: [
        'Initial consultation and discovery',
        'Current state analysis',
        'Strategy development',
        'Recommendation presentation',
        'Implementation support',
        'Ongoing advisory services'
      ],
      technologies: ['Various platforms based on client needs']
    },
    {
      id: 'managed-it',
      icon: BarChart3,
      title: 'Managed IT Services',
      subtitle: '24/7 Support for Your IT Infrastructure',
      description: 'Focus on your core business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to ensure your systems run smoothly and efficiently.',
      features: [
        '24/7 help desk support',
        'Proactive system monitoring',
        'Automated backup and disaster recovery',
        'Network management and optimization',
        'Patch management and updates',
        'IT asset management'
      ],
      benefits: [
        'Reduced IT costs and overhead',
        'Improved system uptime and reliability',
        'Predictable monthly expenses',
        'Access to skilled IT professionals'
      ],
      process: [
        'IT infrastructure assessment',
        'Service level agreement (SLA) definition',
        'Onboarding and setup',
        'Continuous monitoring and support',
        'Regular reporting and reviews',
        'Proactive optimization'
      ],
      technologies: ['Remote Monitoring', 'Help Desk Software', 'Backup Solutions', 'Network Tools']
    }
  ];

  return (
    <section id="service-details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceDetails.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`${index !== 0 ? 'mt-32' : ''} scroll-mt-20`}
          >
            {/* Service Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl mb-6">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                {service.subtitle}
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Features */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
                </div>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700 font-medium">{step}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Technologies We Use</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {service.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started with {service.title}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Divider */}
            {index !== serviceDetails.length - 1 && (
              <div className="mt-32 border-t-2 border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSections;
