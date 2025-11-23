import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to understand and exceed their expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is at the heart of everything we do, ensuring superior results.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We help businesses scale and adapt to changing market demands.'
    }
  ];

  const achievements = [
    '10+ Years of Industry Experience',
    '500+ Successful Projects',
    '50+ Satisfied Clients',
    '24/7 Technical Support',
    'ISO 9001:2015 Certified',
    '99.9% Uptime Guarantee'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DBS Infotech Inc.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in digital transformation, delivering innovative IT solutions 
            that drive business growth and operational excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Leading the Digital Revolution
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At DBS Infotech Inc., we are passionate about transforming businesses through 
              innovative technology solutions. With over a decade of experience in the IT industry, 
              we have helped numerous organizations achieve their digital goals and stay competitive 
              in today's fast-paced market.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of skilled professionals combines technical expertise with business acumen 
              to deliver solutions that not only meet your current needs but also position you 
              for future success. We believe in building long-term partnerships with our clients, 
              supporting them every step of their digital journey.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;