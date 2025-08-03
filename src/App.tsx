import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Users, Award, Clock, Shield, Code, Rocket, Search, FileText, Phone, Mail, MapPin, Globe, CheckCircle, ArrowRight, Play, DollarSign, Zap, Heart, Target, TrendingUp, BookOpen, GraduationCap, Building, School, Palette, Settings } from 'lucide-react';
  Menu,
  X,
  Code,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Globe,
  Smartphone,
  Shield,
  Zap,
  HeadphonesIcon,
  TrendingUp,
  Database,
  Palette,
  Search,
  BarChart3,
  Lock,
  Rocket,
  Target,
  BookOpen,
  GraduationCap,
  Building,
  Home,
  Calendar,
  MessageSquare,
  FileText,
  Settings,
  Monitor,
  Tablet,
  Eye,
  MousePointer
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
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('development');

  // Auto-rotate hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Bangladesh's Premier Educational Website Development Company",
      subtitle: "Transforming Education Through Digital Innovation",
      description: "We create stunning, functional websites for schools, colleges, madrasas, and international institutions across Bangladesh. From kindergartens to universities, we build digital solutions that enhance learning experiences.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Start Your Project"
    },
    {
      title: "Modern Learning Management Systems",
      subtitle: "Complete Digital Education Solutions",
      description: "Beyond websites, we develop comprehensive LMS platforms with online classes, student portals, grade management, and parent communication systems tailored for Bangladesh's educational needs.",
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Explore Features"
    },
    {
      title: "Mobile-First Educational Apps",
      subtitle: "Education in Your Pocket",
      description: "We develop mobile applications that complement your website, allowing students, teachers, and parents to stay connected with push notifications, offline content, and seamless user experiences.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "View Portfolio"
    }
  ];

  const services = [
    {
      icon: <School className="w-12 h-12 text-emerald-600" />,
      title: "Primary Schools",
      description: "Complete website solutions with student information systems, online admission, parent portals, and interactive learning modules.",
      features: ["Student Management", "Online Admission", "Parent Portal", "Grade Tracking", "Event Calendar", "Photo Gallery"],
      price: "Starting from ৳25,000"
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "Kindergarten",
      description: "Colorful, child-friendly websites with activity tracking, photo sharing, daily reports, and parent communication tools.",
      features: ["Activity Tracking", "Daily Reports", "Photo Sharing", "Parent Communication", "Event Management", "Child Progress"],
      price: "Starting from ৳20,000"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-emerald-600" />,
      title: "High Schools",
      description: "Advanced websites with exam management, result publication, online classes, and comprehensive academic tracking.",
      features: ["Exam Management", "Result Portal", "Online Classes", "Library System", "Alumni Network", "Career Guidance"],
      price: "Starting from ৳35,000"
    },
    {
      icon: <Building2 className="w-12 h-12 text-emerald-600" />,
      title: "Colleges",
      description: "Professional college websites with course management, faculty profiles, research publications, and student services.",
      features: ["Course Catalog", "Faculty Profiles", "Research Portal", "Student Services", "Placement Cell", "Digital Library"],
      price: "Starting from ৳45,000"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
      title: "Madrasas",
      description: "Culturally appropriate websites with Islamic calendar, prayer times, Quran recitation, and multilingual support.",
      features: ["Islamic Calendar", "Prayer Times", "Quran Portal", "Arabic Support", "Religious Events", "Scholar Profiles"],
      price: "Starting from ৳30,000"
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      title: "International Schools",
      description: "World-class websites with multi-language support, international curriculum integration, and global communication tools.",
      features: ["Multi-language", "International Curriculum", "Global Communication", "Cultural Exchange", "International Events", "Accreditation"],
      price: "Starting from ৳60,000"
    }
  ];

  const features = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices from smartphones to desktops"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Reliable",
      description: "Bank-level security with SSL certificates, data encryption, and regular security updates"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Optimized for speed with CDN integration and advanced caching for instant page loads"
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "SEO Optimized",
      description: "Built-in SEO features to improve search engine rankings and online visibility"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Multi-user Support",
      description: "Role-based access for teachers, students, parents, and administrators with custom permissions"
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support with dedicated account managers for each client"
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Cloud Hosting",
      description: "Reliable cloud hosting with automatic backups and 99.9% uptime guarantee"
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Custom Design",
      description: "Unique designs tailored to your institution's brand and cultural requirements"
    }
  ];

  const technologies = [
    { name: "React.js", icon: <Code className="w-6 h-6" />, description: "Modern frontend framework" },
    { name: "Node.js", icon: <Settings className="w-6 h-6" />, description: "Scalable backend development" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, description: "Flexible database solution" },
    { name: "AWS Cloud", icon: <Monitor className="w-6 h-6" />, description: "Reliable cloud hosting" },
    { name: "Mobile Apps", icon: <Smartphone className="w-6 h-6" />, description: "iOS & Android development" },
    { name: "WordPress", icon: <PenTool className="w-6 h-6" />, description: "Content management system" }
  ];

  const portfolioItems = [
    {
      name: "Dhaka International School",
      category: "International School",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern bilingual website with online admission system and parent portal",
      features: ["Multi-language Support", "Online Admission", "Parent Portal", "Student Management"],
      year: "2024",
      students: "2,500+"
    },
    {
      name: "Chittagong Model College",
      category: "College",
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive college portal with student management and online examination system",
      features: ["Student Portal", "Online Exams", "Faculty Management", "Research Portal"],
      year: "2024",
      students: "3,200+"
    },
    {
      name: "Sylhet Kindergarten",
      category: "Kindergarten",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Colorful and interactive early learning website with parent communication tools",
      features: ["Activity Tracking", "Photo Gallery", "Parent Communication", "Progress Reports"],
      year: "2023",
      students: "450+"
    },
    {
      name: "Rajshahi High School",
      category: "High School",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Feature-rich high school website with exam portal and alumni network",
      features: ["Exam Portal", "Alumni Network", "Online Classes", "Library System"],
      year: "2023",
      students: "1,800+"
    },
    {
      name: "Darul Uloom Madrasa",
      category: "Madrasa",
      image: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Islamic education portal with Quran recitation and prayer time integration",
      features: ["Islamic Calendar", "Quran Portal", "Prayer Times", "Arabic Support"],
      year: "2024",
      students: "800+"
    },
    {
      name: "Baridhara Primary School",
      category: "Primary School",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern primary school website with interactive learning modules",
      features: ["Learning Modules", "Grade Tracking", "Parent Portal", "Event Calendar"],
      year: "2023",
      students: "650+"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rashida Rahman",
      position: "Principal, Dhaka International School",
      content: "Nijer Web delivered an outstanding website that perfectly represents our institution. The online admission system has streamlined our processes significantly, and the parent portal has improved communication tremendously.",
      rating: 5,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Prof. Mohammad Hasan",
      position: "Director, Chittagong Model College",
      content: "Professional service and excellent technical support. Our new website has improved our online presence and student engagement remarkably. The online examination system is a game-changer for our institution.",
      rating: 5,
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mrs. Fatima Begum",
      position: "Owner, Sylhet Kindergarten",
      content: "The team understood our needs perfectly and created a beautiful, child-friendly website that parents love. The daily activity reports and photo sharing features have been incredibly popular with families.",
      rating: 5,
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Md. Abdul Karim",
      position: "Headmaster, Rajshahi High School",
      content: "Exceptional work! The exam portal and result management system has made our academic processes much more efficient. Students and parents can now access everything they need online.",
      rating: 5,
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Trophy className="w-8 h-8 text-emerald-600" /> },
    { number: "150+", label: "Happy Clients", icon: <Heart className="w-8 h-8 text-emerald-600" /> },
    { number: "6+", label: "Years Experience", icon: <Calendar className="w-8 h-8 text-emerald-600" /> },
    { number: "50,000+", label: "Students Served", icon: <Users2 className="w-8 h-8 text-emerald-600" /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your institution's needs, target audience, and specific requirements to create a comprehensive project plan.",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create custom mockups and prototypes that reflect your institution's brand and cultural values.",
      icon: <Palette className="w-8 h-8 text-blue-600" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers build your website using modern technologies, followed by rigorous testing across all devices.",
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your website and provide comprehensive training and ongoing support to ensure smooth operations.",
      icon: <Rocket className="w-8 h-8 text-blue-600" />
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "৳25,000",
      period: "One-time",
      description: "Perfect for small schools and kindergartens",
      features: [
        "5-10 Pages Website",
        "Responsive Design",
        "Basic Contact Forms",
        "Photo Gallery",
        "Social Media Integration",
        "1 Year Free Hosting",
        "Basic SEO Setup",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "৳45,000",
      period: "One-time",
      description: "Ideal for high schools and colleges",
      features: [
        "15-25 Pages Website",
        "Student Portal",
        "Online Admission System",
        "Exam Management",
        "Parent Communication",
        "News & Events",
        "Advanced SEO",
        "Priority Support",
        "2 Years Free Hosting",
        "Mobile App (Basic)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "৳75,000",
      period: "One-time",
      description: "Complete solution for large institutions",
      features: [
        "Unlimited Pages",
        "Full LMS Integration",
        "Multi-language Support",
        "Advanced Analytics",
        "Custom Integrations",
        "API Development",
        "24/7 Support",
        "3 Years Free Hosting",
        "Mobile App (Advanced)",
        "Training & Documentation"
      ],
      popular: false
    }
  ];

  const teamMembers = [
    {
      name: "Md. Rafiqul Islam",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "10+ years in web development with expertise in educational technology solutions."
    },
    {
      name: "Fatima Ahmed",
      position: "Lead Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Creative designer specializing in user experience and educational interface design."
    },
    {
      name: "Karim Hassan",
      position: "Senior Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Full-stack developer with extensive experience in educational management systems."
    },
    {
      name: "Nasreen Sultana",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Experienced project manager ensuring timely delivery and client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg mr-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Nijer Web</span>
                <p className="text-sm text-gray-600">Educational Web Solutions</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Portfolio</a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+8801712345678" className="text-emerald-600 hover:text-emerald-700 font-medium">
                +880 1712-345678
              </a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Get Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#home" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
                <a href="#services" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">Services</a>
                <a href="#portfolio" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">Portfolio</a>
                <a href="#pricing" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">Pricing</a>
                <a href="#about" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">About</a>
                <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
                <div className="px-3 py-2 border-t border-gray-200 mt-2">
                  <a href="tel:+8801712345678" className="text-emerald-600 font-medium block mb-2">
                    +880 1712-345678
                  </a>
                  <a href="#contact" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium inline-block">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  #1 Educational Web Development Company in Bangladesh
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#portfolio" className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroSlides[currentSlide].image} 
                  alt="Educational Website"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Slide indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Educational Website Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating tailored digital solutions for every type of educational institution in Bangladesh, 
              from traditional madrasas to modern international schools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-emerald-600">{service.price}</span>
                  <a href="#contact" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                    Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Features for Modern Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep understanding of Bangladesh's educational landscape 
              to deliver solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built with Modern Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use the latest and most reliable technologies to ensure your website is fast, secure, and scalable.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process ensures successful project delivery from concept to launch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-2xl font-bold mb-6">
                    {step.step}
                  </div>
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              <Eye className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories Across Bangladesh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped educational institutions 
              transform their digital presence and improve their operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      {item.students} students
                    </span>
                    <a href="#contact" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from educational institutions across Bangladesh who have transformed 
              their digital presence and operations with our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent & Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your institution. All plans include free hosting, 
              SSL certificate, and ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-emerald-600 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Users2 className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals brings years of experience in web development 
              and educational technology to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  About Nijer Web
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pioneering Educational Technology in Bangladesh
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Nijer Web has emerged as Bangladesh's leading educational website development company. 
                  We understand the unique challenges and opportunities in our country's diverse educational landscape.
                </p>
                <p>
                  From traditional madrasas to modern international schools, we've successfully delivered over 200 projects 
                  that have transformed how educational institutions connect with their communities, manage their operations, 
                  and deliver quality education.
                </p>
                <p>
                  Our team combines technical expertise with deep cultural understanding to create solutions that are not 
                  just functional, but truly meaningful for Bangladesh's educational sector.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                  <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-emerald-600 mb-2">200+</p>
                  <p className="text-gray-700 font-medium">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-blue-600 mb-2">50,000+</p>
                  <p className="text-gray-700 font-medium">Students Served</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Educational Technology"
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Modern Classroom"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">6+ Years</p>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how we can help your educational 
              institution thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <MapPin className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Our Office</h3>
                  <p className="text-gray-600">
                    House 45, Road 12, Block C<br />
                    Banani, Dhaka 1213<br />
                    Bangladesh
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <Phone className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                  <p className="text-gray-600">
                    +880 1712-345678<br />
                    +880 2-9876543<br />
                    Available 24/7
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <Mail className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <p className="text-gray-600">
                    info@nijerweb.com<br />
                    support@nijerweb.com<br />
                    Quick response guaranteed
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <Clock className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
                  <p className="text-gray-600">
                    Saturday - Thursday<br />
                    9:00 AM - 6:00 PM<br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Institution Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                      placeholder="Your school/college name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input 
                      type="text" 
                      id="contact" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Institution Type *
                  </label>
                  <select 
                    id="type" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                  >
                    <option value="">Select institution type</option>
                    <option value="primary">Primary School</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="high-school">High School</option>
                    <option value="college">College</option>
                    <option value="madrasa">Madrasa</option>
                    <option value="international">International School</option>
                    <option value="university">University</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select 
                    id="budget" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="20k-30k">৳20,000 - ৳30,000</option>
                    <option value="30k-50k">৳30,000 - ৳50,000</option>
                    <option value="50k-75k">৳50,000 - ৳75,000</option>
                    <option value="75k+">৳75,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Requirements *
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
                    placeholder="Tell us about your project requirements, features needed, timeline, and any specific preferences..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-105 duration-300 shadow-lg"
                >
                  Send Message & Get Free Quote
                </button>
                
                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-lg mr-3">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Nijer Web</span>
                  <p className="text-gray-400">Educational Web Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Bangladesh's premier educational website development company, empowering institutions 
                with cutting-edge digital solutions that enhance learning experiences and operational efficiency.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Primary Schools</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Kindergarten</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">High Schools</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Colleges</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Madrasas</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">International Schools</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">LMS Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <p className="text-gray-400">
                &copy; 2024 Nijer Web. All rights reserved. Proudly serving Bangladesh's educational sector.
              </p>
              <div className="md:text-right">
                <p className="text-gray-400">
                  Made with <Heart className="w-4 h-4 inline text-red-500" /> in Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;