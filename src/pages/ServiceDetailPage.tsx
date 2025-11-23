import { useParams, useNavigate } from 'react-router-dom';
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
  ArrowLeft,
  Zap,
  TrendingUp,
  Target,
  Server,
  Lock,
  Rocket,
  Clock,
  DollarSign,
  Award,
  HeadphonesIcon,
  LineChart,
  PieChart,
  Settings,
  Monitor,
  Layers,
  GitBranch,
  Package,
  FileCode,
  Activity
} from 'lucide-react';
import { useEffect } from 'react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const serviceDetails: Record<string, any> = {
    'custom-software': {
      id: 'custom-software',
      icon: Code,
      title: 'Custom Software Development',
      subtitle: 'Tailored Solutions for Your Unique Business Needs',
      description: 'We create bespoke software solutions that perfectly align with your business processes, objectives, and challenges. Our experienced development team leverages cutting-edge technologies to build scalable, maintainable, and high-performance applications that drive digital transformation and competitive advantage.',
      heroImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=600&fit=crop',
      features: [
        'Full-stack web application development with modern frameworks',
        'Desktop software solutions for Windows, macOS, and Linux',
        'RESTful and GraphQL API development and integration',
        'Legacy system modernization and cloud migration',
        'Microservices architecture implementation',
        'Third-party system integration and automation',
        'Progressive Web Apps (PWA) development',
        'Custom CMS and e-commerce platforms'
      ],
      benefits: [
        'Increased operational efficiency by up to 40%',
        'Reduced manual processes and human errors',
        'Scalable solutions that grow with your business',
        'Competitive advantage through innovation',
        'Better customer experiences and satisfaction',
        'Real-time data insights and analytics'
      ],
      process: [
        'Discovery & Requirements Analysis - Understanding your business needs',
        'Architecture Design & Technical Planning - Creating scalable solutions',
        'Agile Development with Regular Sprints - Iterative development approach',
        'Quality Assurance & Testing - Comprehensive testing protocols',
        'Deployment & Integration - Seamless go-live process',
        'Ongoing Support & Maintenance - Continuous improvement'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
      stats: [
        { label: 'Projects Delivered', value: '500+', icon: Rocket },
        { label: 'Client Satisfaction', value: '98%', icon: Award },
        { label: 'Average Time Saved', value: '40%', icon: Clock },
        { label: 'Years Experience', value: '15+', icon: TrendingUp }
      ],
      useCases: [
        {
          title: 'Enterprise Resource Planning',
          description: 'Custom ERP systems that integrate all business processes',
          icon: Layers
        },
        {
          title: 'Customer Portals',
          description: 'Self-service platforms that enhance customer engagement',
          icon: Users
        },
        {
          title: 'Workflow Automation',
          description: 'Automated processes that reduce manual work',
          icon: Settings
        }
      ],
      faqs: [
        {
          question: 'How long does custom software development take?',
          answer: 'Project timelines vary based on complexity, typically ranging from 3-12 months. We use agile methodology to deliver working features incrementally.'
        },
        {
          question: 'Do you provide post-launch support?',
          answer: 'Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, and feature enhancements.'
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely! We specialize in system integration and can connect your new software with existing platforms via APIs and middleware.'
        }
      ]
    },
    'cloud-solutions': {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      subtitle: 'Scalable and Reliable Cloud Infrastructure',
      description: 'Transform your IT infrastructure with comprehensive cloud solutions that enhance scalability, reliability, and cost-effectiveness. We help businesses migrate to the cloud, optimize existing cloud deployments, and implement cloud-native architectures that drive innovation and agility.',
      heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop',
      features: [
        'Cloud migration strategy and seamless execution',
        'Multi-cloud and hybrid cloud architecture design',
        'Infrastructure as Code (IaC) implementation with Terraform',
        'Container orchestration with Kubernetes and Docker',
        'Serverless architecture design and implementation',
        'Cloud cost optimization and FinOps practices',
        'Cloud security and compliance management',
        'Disaster recovery and business continuity planning'
      ],
      benefits: [
        'Reduced infrastructure costs by up to 60%',
        'Improved scalability and flexibility',
        'Enhanced disaster recovery capabilities',
        'Global availability and high performance',
        '99.99% uptime SLA',
        'Pay-as-you-go pricing model'
      ],
      process: [
        'Infrastructure Assessment - Analyzing current environment',
        'Cloud Strategy Development - Defining migration roadmap',
        'Migration Planning - Creating detailed migration plan',
        'Phased Migration Execution - Minimizing business disruption',
        'Testing & Validation - Ensuring performance and security',
        'Optimization & Monitoring - Continuous improvement'
      ],
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'CloudFormation', 'Jenkins', 'GitLab CI/CD'],
      stats: [
        { label: 'Cloud Migrations', value: '200+', icon: Cloud },
        { label: 'Cost Reduction', value: '60%', icon: DollarSign },
        { label: 'Uptime Guarantee', value: '99.99%', icon: Server },
        { label: 'Certified Engineers', value: '25+', icon: Award }
      ],
      useCases: [
        {
          title: 'Cloud Migration',
          description: 'Seamless migration from on-premise to cloud infrastructure',
          icon: Cloud
        },
        {
          title: 'DevOps Implementation',
          description: 'CI/CD pipelines and automated deployments',
          icon: GitBranch
        },
        {
          title: 'Cloud Optimization',
          description: 'Cost reduction and performance enhancement',
          icon: TrendingUp
        }
      ],
      faqs: [
        {
          question: 'Which cloud platform is best for my business?',
          answer: 'The choice depends on your specific needs. We analyze your requirements and recommend AWS, Azure, or Google Cloud based on your workload, budget, and technical requirements.'
        },
        {
          question: 'How do you ensure data security during migration?',
          answer: 'We use encrypted data transfer, implement security best practices, and conduct thorough security audits throughout the migration process.'
        },
        {
          question: 'What is the typical cloud migration timeline?',
          answer: 'Migration timelines vary from 2-6 months depending on infrastructure complexity. We use a phased approach to minimize disruption.'
        }
      ]
    },
    'cybersecurity': {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Services',
      subtitle: 'Protect Your Digital Assets with Robust Security',
      description: 'Safeguard your organization from evolving cyber threats with comprehensive security solutions. Our cybersecurity experts implement multi-layered defense strategies, conduct thorough security assessments, and provide ongoing protection to secure your data, systems, and reputation.',
      heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
      features: [
        'Comprehensive security audits and vulnerability assessments',
        'Penetration testing and ethical hacking services',
        'Compliance management (GDPR, HIPAA, SOC 2, ISO 27001)',
        'Security Information and Event Management (SIEM)',
        '24/7 security monitoring and incident response',
        'Security awareness training for employees',
        'Zero Trust architecture implementation',
        'Endpoint detection and response (EDR)'
      ],
      benefits: [
        'Reduced risk of data breaches and cyberattacks',
        'Regulatory compliance assurance',
        'Enhanced customer trust and brand reputation',
        'Minimized business disruption from security incidents',
        'Protection of intellectual property',
        'Reduced cyber insurance premiums'
      ],
      process: [
        'Security Posture Assessment - Identifying vulnerabilities',
        'Risk Analysis - Evaluating potential threats',
        'Security Strategy Development - Creating defense plan',
        'Implementation - Deploying security controls',
        'Continuous Monitoring - 24/7 threat detection',
        'Incident Response - Rapid threat mitigation'
      ],
      technologies: ['Firewalls', 'IDS/IPS', 'SIEM Tools', 'Endpoint Protection', 'SSL/TLS', 'VPN', 'Multi-Factor Authentication', 'Encryption', 'WAF', 'DDoS Protection'],
      stats: [
        { label: 'Threats Blocked', value: '10M+', icon: Shield },
        { label: 'Security Audits', value: '150+', icon: Lock },
        { label: 'Response Time', value: '<15min', icon: Clock },
        { label: 'Security Certifications', value: '20+', icon: Award }
      ],
      useCases: [
        {
          title: 'Penetration Testing',
          description: 'Identify vulnerabilities before attackers do',
          icon: Target
        },
        {
          title: 'Compliance Management',
          description: 'Meet regulatory requirements and standards',
          icon: FileCode
        },
        {
          title: 'Incident Response',
          description: 'Rapid response to security breaches',
          icon: Activity
        }
      ],
      faqs: [
        {
          question: 'How often should we conduct security audits?',
          answer: 'We recommend quarterly security audits with continuous monitoring. Critical systems should be tested more frequently.'
        },
        {
          question: 'What is penetration testing?',
          answer: 'Penetration testing simulates real-world attacks to identify security vulnerabilities before malicious actors can exploit them.'
        },
        {
          question: 'Do you provide 24/7 security monitoring?',
          answer: 'Yes, our Security Operations Center (SOC) provides round-the-clock monitoring and incident response services.'
        }
      ]
    },
    'mobile-app': {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Engaging Mobile Experiences for iOS and Android',
      description: 'Create powerful mobile applications that engage users and drive business results. We develop native and cross-platform mobile apps that deliver exceptional performance, intuitive user experiences, and seamless integration with your business systems.',
      heroImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
      features: [
        'Native iOS development with Swift and SwiftUI',
        'Native Android development with Kotlin and Jetpack Compose',
        'Cross-platform development with React Native and Flutter',
        'Mobile UI/UX design and prototyping',
        'App Store optimization (ASO) strategies',
        'Mobile backend and API integration',
        'Push notifications and real-time features',
        'Mobile analytics and performance monitoring'
      ],
      benefits: [
        'Expanded customer reach and engagement',
        'Improved customer retention rates',
        'New revenue streams and monetization',
        'Enhanced brand visibility and recognition',
        'Direct communication channel with customers',
        'Competitive advantage in mobile-first market'
      ],
      process: [
        'Mobile Strategy & Planning - Defining app goals and features',
        'UI/UX Design & Prototyping - Creating intuitive interfaces',
        'Development & Testing - Building robust applications',
        'Beta Testing & Feedback - User acceptance testing',
        'App Store Submission - Publishing to stores',
        'Post-Launch Support - Updates and enhancements'
      ],
      technologies: ['Swift', 'SwiftUI', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL', 'SQLite', 'Realm', 'AWS Amplify'],
      stats: [
        { label: 'Apps Developed', value: '300+', icon: Smartphone },
        { label: 'App Downloads', value: '5M+', icon: TrendingUp },
        { label: 'User Rating', value: '4.8/5', icon: Award },
        { label: 'App Store Features', value: '50+', icon: Rocket }
      ],
      useCases: [
        {
          title: 'E-Commerce Apps',
          description: 'Mobile shopping experiences that drive sales',
          icon: DollarSign
        },
        {
          title: 'Enterprise Apps',
          description: 'Business tools for improved productivity',
          icon: Monitor
        },
        {
          title: 'Social Apps',
          description: 'Connect and engage with your community',
          icon: Users
        }
      ],
      faqs: [
        {
          question: 'Should I build native or cross-platform app?',
          answer: 'Native apps offer best performance for complex features. Cross-platform works well for simpler apps with tight budgets. We assess your needs to recommend the best approach.'
        },
        {
          question: 'How long does mobile app development take?',
          answer: 'Development typically takes 3-9 months depending on complexity. We use agile methodology to deliver working versions early.'
        },
        {
          question: 'Do you handle app store submissions?',
          answer: 'Yes, we manage the entire submission process including preparing assets, descriptions, and handling app store review requirements.'
        }
      ]
    },
    'data-analytics': {
      id: 'data-analytics',
      icon: Database,
      title: 'Data Analytics & Business Intelligence',
      subtitle: 'Transform Data into Actionable Insights',
      description: 'Unlock the power of your data with advanced analytics and business intelligence solutions. We help organizations make data-driven decisions through comprehensive data analysis, visualization, predictive modeling, and real-time insights that drive growth and innovation.',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      features: [
        'Data warehousing and ETL pipeline development',
        'Interactive business intelligence dashboards',
        'Advanced data visualization and storytelling',
        'Predictive analytics and machine learning models',
        'Real-time analytics and streaming data processing',
        'Data governance and quality management',
        'Big data processing and analytics',
        'Self-service BI tool implementation'
      ],
      benefits: [
        'Better decision-making with real-time insights',
        'Improved operational efficiency by 35%',
        'Identification of new revenue opportunities',
        'Competitive advantage through data insights',
        'Reduced reporting time by 70%',
        'Enhanced customer understanding and segmentation'
      ],
      process: [
        'Data Assessment - Understanding data landscape',
        'Architecture Design - Creating data infrastructure',
        'ETL Development - Building data pipelines',
        'Dashboard Creation - Designing visualizations',
        'User Training - Enabling data-driven culture',
        'Continuous Improvement - Refining analytics'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Apache Spark', 'Snowflake', 'AWS Redshift', 'TensorFlow', 'scikit-learn', 'Apache Kafka'],
      stats: [
        { label: 'Data Projects', value: '250+', icon: Database },
        { label: 'Data Processed', value: '100TB+', icon: Server },
        { label: 'Dashboards Created', value: '500+', icon: PieChart },
        { label: 'ROI Improvement', value: '45%', icon: TrendingUp }
      ],
      useCases: [
        {
          title: 'Predictive Analytics',
          description: 'Forecast trends and customer behavior',
          icon: LineChart
        },
        {
          title: 'Customer Analytics',
          description: 'Deep insights into customer patterns',
          icon: Users
        },
        {
          title: 'Operational Analytics',
          description: 'Optimize business operations',
          icon: Settings
        }
      ],
      faqs: [
        {
          question: 'What is the difference between BI and analytics?',
          answer: 'BI focuses on historical and current data reporting, while analytics includes predictive and prescriptive insights for future decision-making.'
        },
        {
          question: 'How do you ensure data quality?',
          answer: 'We implement data validation rules, cleansing processes, and governance frameworks to maintain high data quality standards.'
        },
        {
          question: 'Can you work with our existing data sources?',
          answer: 'Yes, we integrate with all major databases, cloud platforms, APIs, and legacy systems to consolidate your data.'
        }
      ]
    },
    'digital-transformation': {
      id: 'digital-transformation',
      icon: Globe,
      title: 'Digital Transformation',
      subtitle: 'Modernize Your Business for the Digital Age',
      description: 'Navigate the digital revolution with comprehensive transformation services. We help organizations reimagine their business processes, culture, and customer experiences through strategic use of digital technologies, automation, and innovative solutions.',
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
      features: [
        'Digital strategy and roadmap development',
        'Business process automation and RPA',
        'Legacy system modernization',
        'Change management and organizational training',
        'Digital customer experience design',
        'Innovation workshops and design thinking',
        'IoT and connected devices integration',
        'AI and machine learning implementation'
      ],
      benefits: [
        'Enhanced competitive positioning',
        'Improved operational efficiency by 50%',
        'Better customer experiences and satisfaction',
        'Increased agility and faster innovation',
        'Revenue growth through new digital channels',
        'Reduced operational costs'
      ],
      process: [
        'Current State Assessment - Evaluating digital maturity',
        'Vision Development - Defining digital future',
        'Roadmap Creation - Planning transformation journey',
        'Phased Implementation - Executing changes',
        'Change Management - Driving adoption',
        'Continuous Optimization - Evolving digitally'
      ],
      technologies: ['RPA Tools', 'AI/ML', 'IoT Platforms', 'Blockchain', 'Cloud Computing', 'API Management', 'Low-Code Platforms', 'Process Mining'],
      stats: [
        { label: 'Transformations', value: '100+', icon: Rocket },
        { label: 'Efficiency Gain', value: '50%', icon: TrendingUp },
        { label: 'User Adoption', value: '92%', icon: Users },
        { label: 'Time to Market', value: '-40%', icon: Clock }
      ],
      useCases: [
        {
          title: 'Process Automation',
          description: 'Automate repetitive tasks and workflows',
          icon: Settings
        },
        {
          title: 'Digital Customer Journey',
          description: 'Transform customer interactions',
          icon: Users
        },
        {
          title: 'Smart Operations',
          description: 'IoT-enabled business operations',
          icon: Monitor
        }
      ],
      faqs: [
        {
          question: 'How long does digital transformation take?',
          answer: 'Full transformation is a continuous journey, but initial phases typically take 6-18 months depending on scope and complexity.'
        },
        {
          question: 'How do you manage organizational change?',
          answer: 'We use proven change management methodologies, stakeholder engagement, training programs, and communication strategies to ensure successful adoption.'
        },
        {
          question: 'What is the ROI of digital transformation?',
          answer: 'Organizations typically see 30-50% efficiency improvements, 20-40% cost reductions, and significant revenue growth from new digital channels.'
        }
      ]
    },
    'it-consulting': {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Consulting',
      subtitle: 'Strategic IT Guidance for Business Success',
      description: 'Leverage our expertise to align your technology investments with business objectives. Our IT consultants provide strategic guidance on technology selection, architecture design, digital strategy, and IT governance to help you make informed decisions that drive business value.',
      heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      features: [
        'Technology strategy and roadmap development',
        'Enterprise architecture design and review',
        'Vendor selection and evaluation',
        'IT project management and PMO services',
        'Technology assessment and audit',
        'Digital innovation consulting',
        'IT governance and compliance',
        'Cost optimization and FinOps'
      ],
      benefits: [
        'Optimized technology investments',
        'Reduced project risks and failures',
        'Improved IT-business alignment',
        'Access to expert knowledge and best practices',
        'Faster time-to-value',
        'Enhanced competitive advantage'
      ],
      process: [
        'Initial Consultation - Understanding challenges',
        'Current State Analysis - Assessing IT landscape',
        'Strategy Development - Creating actionable plan',
        'Recommendation Presentation - Presenting solutions',
        'Implementation Support - Guiding execution',
        'Ongoing Advisory - Continuous guidance'
      ],
      technologies: ['Various platforms and tools based on client needs and industry best practices'],
      stats: [
        { label: 'Consulting Projects', value: '400+', icon: Users },
        { label: 'Client Satisfaction', value: '96%', icon: Award },
        { label: 'Cost Savings', value: '35%', icon: DollarSign },
        { label: 'Expert Consultants', value: '50+', icon: HeadphonesIcon }
      ],
      useCases: [
        {
          title: 'IT Strategy',
          description: 'Align technology with business goals',
          icon: Target
        },
        {
          title: 'Architecture Review',
          description: 'Optimize system architecture',
          icon: Layers
        },
        {
          title: 'Vendor Selection',
          description: 'Choose the right technology partners',
          icon: Package
        }
      ],
      faqs: [
        {
          question: 'How is IT consulting different from implementation?',
          answer: 'IT consulting focuses on strategy, planning, and advisory services. Implementation involves actual development and deployment, which we also offer.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve healthcare, finance, retail, manufacturing, education, and government sectors with industry-specific expertise.'
        },
        {
          question: 'Do you provide ongoing advisory services?',
          answer: 'Yes, we offer retainer-based advisory services for continuous strategic guidance and technology planning.'
        }
      ]
    },
    'managed-it': {
      id: 'managed-it',
      icon: BarChart3,
      title: 'Managed IT Services',
      subtitle: '24/7 Support for Your IT Infrastructure',
      description: 'Focus on your core business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to ensure your systems run smoothly, securely, and efficiently with guaranteed uptime and rapid issue resolution.',
      heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
      features: [
        '24/7/365 help desk and technical support',
        'Proactive system monitoring and alerts',
        'Automated backup and disaster recovery',
        'Network management and optimization',
        'Patch management and security updates',
        'IT asset and license management',
        'Performance monitoring and reporting',
        'Cloud infrastructure management'
      ],
      benefits: [
        'Reduced IT costs and overhead by 40%',
        'Improved system uptime (99.9% SLA)',
        'Predictable monthly expenses',
        'Access to skilled IT professionals 24/7',
        'Proactive issue prevention',
        'Enhanced security and compliance'
      ],
      process: [
        'Infrastructure Assessment - Analyzing current setup',
        'SLA Definition - Setting service expectations',
        'Onboarding & Setup - Implementing monitoring',
        'Continuous Monitoring - 24/7 system oversight',
        'Regular Reporting - Performance insights',
        'Proactive Optimization - Continuous improvement'
      ],
      technologies: ['Remote Monitoring Tools', 'Help Desk Software', 'Backup Solutions', 'Network Management', 'SIEM', 'Asset Management', 'Ticketing Systems'],
      stats: [
        { label: 'Clients Served', value: '200+', icon: Users },
        { label: 'Uptime SLA', value: '99.9%', icon: Server },
        { label: 'Avg Response Time', value: '<30min', icon: Clock },
        { label: 'Tickets Resolved', value: '50K+', icon: CheckCircle }
      ],
      useCases: [
        {
          title: '24/7 Monitoring',
          description: 'Round-the-clock system oversight',
          icon: Monitor
        },
        {
          title: 'Help Desk Support',
          description: 'Rapid user issue resolution',
          icon: HeadphonesIcon
        },
        {
          title: 'Backup & Recovery',
          description: 'Protect against data loss',
          icon: Database
        }
      ],
      faqs: [
        {
          question: 'What is included in managed IT services?',
          answer: 'Our managed services include monitoring, maintenance, help desk support, security management, backups, and strategic IT planning.'
        },
        {
          question: 'How quickly do you respond to issues?',
          answer: 'Critical issues receive immediate response within 15 minutes. Standard issues are addressed within 30 minutes with 24/7 availability.'
        },
        {
          question: 'Can you manage hybrid cloud environments?',
          answer: 'Yes, we manage on-premise, cloud, and hybrid environments across all major platforms including AWS, Azure, and Google Cloud.'
        }
      ]
    }
  };

  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-teal-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl mb-6">
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-2xl text-blue-100 font-semibold">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed max-w-5xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat: any, idx: number) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="text-center text-white">
                  <StatIcon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Business Benefits</h2>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <Target className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.useCases.map((useCase: any, idx: number) => {
              const UseCaseIcon = useCase.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                  <UseCaseIcon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step: string, idx: number) => (
              <div key={idx} className="relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technologies & Tools</h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10">
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base font-medium hover:bg-gray-600 transition-colors shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's discuss how our {service.title.toLowerCase()} can help transform your business 
            and achieve your digital goals.
          </p>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
