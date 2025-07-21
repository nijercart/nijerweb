import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Award, 
  Mail, 
  Phone, 
  MapPin,
  GraduationCap,
  BookOpen,
  School,
  Building2,
  Star,
  ArrowRight,
  CheckCircle,
  Laptop
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <School className="w-12 h-12 text-emerald-600" />,
      title: "Primary Schools",
      description: "Complete website solutions for primary schools with student management, online classes, and parent portals."
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "Kindergarten",
      description: "Colorful and interactive websites for kindergartens with photo galleries, activity schedules, and communication tools."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-emerald-600" />,
      title: "High Schools",
      description: "Advanced websites for high schools with admission systems, exam results, and academic resource management."
    },
    {
      icon: <Building2 className="w-12 h-12 text-emerald-600" />,
      title: "Colleges",
      description: "Professional college websites with course catalogs, faculty profiles, and student information systems."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
      title: "Madrasas",
      description: "Culturally appropriate websites for madrasas with Islamic calendar integration and multilingual support."
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      title: "International Schools",
      description: "Global-standard websites for international schools with multi-language support and international curriculum features."
    }
  ];

  const features = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Easy Management",
      description: "User-friendly admin panels for easy content updates"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "SEO Optimized",
      description: "Built-in SEO features to improve search engine rankings"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multi-user Support",
      description: "Role-based access for teachers, students, and administrators"
    }
  ];

  const portfolioItems = [
    {
      name: "Dhaka International School",
      category: "International School",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern bilingual website with online admission system"
    },
    {
      name: "Chittagong Model College",
      category: "College",
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive college portal with student management"
    },
    {
      name: "Sylhet Kindergarten",
      category: "Kindergarten",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Colorful and interactive early learning website"
    },
    {
      name: "Rajshahi High School",
      category: "High School",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Feature-rich high school website with exam portal"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rashida Rahman",
      position: "Principal, Dhaka International School",
      content: "Nijer Web delivered an outstanding website that perfectly represents our institution. The online admission system has streamlined our processes significantly.",
      rating: 5
    },
    {
      name: "Prof. Mohammad Hasan",
      position: "Director, Chittagong Model College",
      content: "Professional service and excellent technical support. Our new website has improved our online presence and student engagement remarkably.",
      rating: 5
    },
    {
      name: "Mrs. Fatima Begum",
      position: "Owner, Sylhet Kindergarten",
      content: "The team understood our needs perfectly and created a beautiful, child-friendly website that parents love. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="w-8 h-8 text-emerald-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Nijer Web</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
                <a href="#services" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
                <a href="#portfolio" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">Portfolio</a>
                <a href="#about" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">About</a>
                <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bangladesh's Leading
              <span className="text-emerald-600 block">Educational Website</span>
              Development Company
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We specialize in creating professional, modern websites for educational institutions across Bangladesh. 
              From kindergartens to international schools, we build digital solutions that enhance learning and communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Educational Website Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive web development solutions tailored for different types of educational institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nijer Web?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with deep understanding of Bangladesh's educational sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our successful educational website projects across Bangladesh
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-emerald-600 font-medium">{item.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from educational institutions who have transformed their online presence with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Nijer Web
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Nijer Web has been at the forefront of educational website development in Bangladesh. 
                We understand the unique challenges and requirements of educational institutions in our country.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of skilled developers and designers work closely with schools, colleges, and madrasas to create 
                digital solutions that enhance communication, streamline administration, and improve the overall educational experience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">150+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">5+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="About Nijer Web"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your educational institution's online presence? Contact us today for a free consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      House 45, Road 12, Block C<br />
                      Banani, Dhaka 1213<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+880 1712-345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@nijerweb.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="Your school/college name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Type
                  </label>
                  <select 
                    id="type" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  >
                    <option value="">Select institution type</option>
                    <option value="primary">Primary School</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="high-school">High School</option>
                    <option value="college">College</option>
                    <option value="madrasa">Madrasa</option>
                    <option value="international">International School</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-emerald-400 mr-2" />
                <span className="text-xl font-bold">Nijer Web</span>
              </div>
              <p className="text-gray-400">
                Bangladesh's leading educational website development company, 
                empowering institutions with modern digital solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Primary Schools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kindergarten</a></li>
                <li><a href="#" className="hover:text-white transition-colors">High Schools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Colleges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Madrasas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Schools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>House 45, Road 12, Block C</p>
                <p>Banani, Dhaka 1213</p>
                <p>+880 1712-345678</p>
                <p>info@nijerweb.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nijer Web. All rights reserved. Proudly serving Bangladesh's educational sector.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;