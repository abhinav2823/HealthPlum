import { useState } from 'react';
import { Award, Heart, Users, Shield, Clock, Globe, CheckCircle, ChevronRight, Link as LinkIcon } from 'lucide-react';
import doctor1 from '../../assets/images/doctor1.jpg';
import doctor2 from '../../assets/images/doctor2.jpg';
import doctor3 from '../../assets/images/doctor3.jpg';
import doctor4 from '../../assets/images/doctor4.jpg';
import partner1 from '../../assets/images/fortis.png';
import partner2 from '../../assets/images/appolo.png';
import partner3 from '../../assets/images/medanta.png';
import partner4 from '../../assets/images/ilbs.png';
import research_partner1 from '../../assets/images/aiims.png';
import research_partner2 from '../../assets/images/icmr.png';
import research_partner3 from '../../assets/images/jipmer.png';
import research_partner4 from '../../assets/images/phrii.png';
import tech_partner1 from '../../assets/images/garner.png';
import tech_partner2 from '../../assets/images/alma.png';
import tech_partner3 from '../../assets/images/cohere_health.png';
import tech_partner4 from '../../assets/images/findhelp.png';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('mission');
  
  // Team members data - easy to add more in the future
  const teamMembers = [
    {
      id: 'member1',
      name: 'Dr. Ananya Mehra',
      role: 'Chief Medical Officer',
      image: doctor4,
      specialty: 'Cardiology',
      description: 'Dr. Mehra leads our medical team with over 15 years of experience in cardiovascular research and AI diagnostics.',
      link: '/team/sarah-johnson'
    },
    {
      id: 'member2',
      name: 'Dr. Rajeev Iyer',
      role: 'Head of AI Research',
      image: doctor2,
      specialty: 'Neurology',
      description: 'Dr. Iyer specializes in neurological disorders and has pioneered our Parkinson\'s detection.',
      link: '/team/michael-chen'
    },
    {
      id: 'member3',
      name: 'Dr. Aman Kapoor',
      role: 'Emergency Services Director',
      image: doctor3,
      specialty: 'Emergency Medicine',
      description: 'Dr. Kapoor oversees our emergency response systems and ambulance services with precision and care.',
      link: '/team/rebecca-torres'
    },
    {
      id: 'member4',
      name: 'Arvind Bansal',
      role: 'Technology Director',
      image: doctor1,
      specialty: 'Medical Informatics',
      description: 'Arvind Bansal leads our technology development, ensuring our platforms are secure, accessible, and cutting-edge.',
      link: '/team/alex-williams'
    }
  ];
  
  // Achievements data
  const achievements = [
    {
      id: 'achievement1',
      title: '98% Patient Satisfaction',
      description: 'Connecting patients to trusted doctors',
      icon: <CheckCircle size={24} />,
      color: 'text-green-600'
    },
    {
      id: 'achievement2',
      title: '24/7 Service',
      description: 'Round-the-clock emergency services available in 15 major cities',
      icon: <Clock size={24} />,
      color: 'text-blue-600'
    },
    {
      id: 'achievement3',
      title: '100,000+ Patients',
      description: 'Successfully served and diagnosed over one hundred thousand patients',
      icon: <Users size={24} />,
      color: 'text-purple-600'
    },
    {
      id: 'achievement4',
      title: 'HIPAA Compliant',
      description: 'Highest standards of data security and patient privacy',
      icon: <Shield size={24} />,
      color: 'text-red-600'
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About HealthPlum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Simplifying healthcare through seamless appointment booking and dedicated care          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('mission')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              activeTab === 'mission' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Our Mission
          </button>
          
          <button 
            onClick={() => setActiveTab('team')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              activeTab === 'team' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Our Team
          </button>
          
          <button 
            onClick={() => setActiveTab('achievements')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              activeTab === 'achievements' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Achievements
          </button>
          
          <button 
            onClick={() => setActiveTab('partners')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              activeTab === 'partners' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Our Partners
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Mission Tab */}
          {activeTab === 'mission' && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-blue-600 text-white p-10 md:p-16 flex items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Our Mission & Vision</h3>
                  <p className="text-blue-100 mb-6">
                  At HealthPlum, we believe that quality healthcare should be simple, accessible, and patient-focused. Our mission is to streamline the way you connect with trusted doctors by offering an easy-to-use platform for booking appointments and managing your healthcare needs.                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4">
                        <Heart size={20} />
                      </div>
                      <p className="text-blue-50">Connecting you with the right doctors at the right time </p>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4">
                        <Users size={20} />
                      </div>
                      <p className="text-blue-50">Ensuring healthcare equity through accessible technology</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4">
                        <Shield size={20} />
                      </div>
                      <p className="text-blue-50">Maintaining the highest standards of medical ethics and data privacy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10 md:p-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
                <p className="text-gray-600 mb-6">
                At HealthPlum, we bring together the expertise of experienced medical professionals with a focus on user-friendly technology. Our goal is to make healthcare more accessible by simplifying how patients find and book appointments — all while maintaining a human-centered, compassionate approach.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Driven by Care, Informed by Experience</h4>
                    <p className="text-gray-600">
                    At HealthPlum, our solutions are built on a foundation of medical expertise and user feedback. We are constantly improving our platform to ensure a seamless experience for both patients and healthcare providers.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Patient-Centered Care</h4>
                    <p className="text-gray-600">
                      Technology is only meaningful when it improves patient outcomes. We design all our services with the patient experience in mind.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Accessibility</h4>
                    <p className="text-gray-600">
                      We're committed to making advanced healthcare technology available to underserved communities worldwide.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe size={20} className="text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">Serving communities across 30+ countries</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our diverse team of medical professionals, researchers, and technologists work together to create healthcare solutions that are both innovative and compassionate.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:shadow-md">
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-fit object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                      <p className="text-gray-500 text-sm italic mb-3">Specialty: {member.specialty}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                      <a 
                        href={member.link}
                        className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                      >
                        <span>Full Profile</span>
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/team"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <span>View All Team Members</span>
                  <ChevronRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  HealthPlum has reached significant milestones in healthcare innovation, service quality, and patient outcomes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
                {achievements.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className={`ml-[88px] mb-4 ${item.color}`}>{item.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <Award size={80} className="text-blue-600" />
                  </div>
                  <div className="md:w-3/4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Excellence Award 2024</h4>
                    <p className="text-gray-600 mb-4">
                    HealthPlum was recognized for its innovative approach in simplifying healthcare access, ensuring efficient appointment booking, and improving patient care delivery.
                    </p>
                    <a 
                      href="/achievements"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      <span>Read the full story</span>
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Publications & Research</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-blue-600">
                      <LinkIcon size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Neural Network Approaches to Heart Disease Detection</h5>
                      <p className="text-gray-500 text-sm">Journal of Medical AI, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-blue-600">
                      <LinkIcon size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Improving Emergency Response Times Through Predictive Analytics</h5>
                      <p className="text-gray-500 text-sm">Emergency Medicine Technology Review, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-blue-600">
                      <LinkIcon size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Machine Learning Applications in Early Parkinson's Detection</h5>
                      <p className="text-gray-500 text-sm">Frontiers in Neurological AI, 2023</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/research"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    <span>View all publications</span>
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We collaborate with leading healthcare institutions, research organizations, and technology partners to advance our mission.
                </p>
              </div>
              
              {/* Partner Categories */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Healthcare Partners</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { id: 'fortis', image: partner1, name: 'Fortis Healthcare' },
                    { id: 'apollo', image: partner2, name: 'Apollo Hospitals' },
                    { id: 'medanta', image: partner3, name: 'Medanta' },
                    { id: 'ilbs', image: partner4, name: 'ILBS' }
                  ].map((partner) => (
                    <div key={partner.id} className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-gray-100 shadow-sm">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Research Institutions</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { id: 'aiims', image: research_partner1, name: 'AIIMS' },
                    { id: 'icmr', image: research_partner2, name: 'ICMR' },
                    { id: 'jipmer', image: research_partner3, name: 'JIPMER' },
                    { id: 'phrii', image: research_partner4, name: 'PHRI' }
                  ].map((partner) => (
                    <div key={partner.id} className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-gray-100 shadow-sm">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Technology Partners</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { id: 'garner', image: tech_partner1, name: 'Garner Health' },
                    { id: 'alma', image: tech_partner2, name: 'Alma' },
                    { id: 'cohere', image: tech_partner3, name: 'Cohere Health' },
                    { id: 'findhelp', image: tech_partner4, name: 'FindHelp' }
                  ].map((partner) => (
                    <div key={partner.id} className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-gray-100 shadow-sm">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Partnership CTA */}
              <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
                <h4 className="text-2xl font-bold mb-4">Partner With Us</h4>
                <p className="mb-6 max-w-2xl mx-auto">
                  We're always looking to collaborate with organizations that share our mission of improving healthcare through innovation and compassion.
                </p>
                <a 
                  href="/contact"
                  className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}