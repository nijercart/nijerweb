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
  Laptop,
  Languages
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'bn' for Bangla

  const translations = {
    en: {
      // Navigation
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      
      // Hero Section
      heroTitle: "Bangladesh's Leading",
      heroSubtitle: "Educational Website",
      heroCompany: "Development Company",
      heroDescription: "We specialize in creating professional, modern websites for educational institutions across Bangladesh. From kindergartens to international schools, we build digital solutions that enhance learning and communication.",
      getStarted: "Get Started",
      viewPortfolio: "View Portfolio",
      
      // Services
      servicesTitle: "Our Educational Website Services",
      servicesDescription: "We provide comprehensive web development solutions tailored for different types of educational institutions",
      primarySchools: "Primary Schools",
      primaryDesc: "Complete website solutions for primary schools with student management, online classes, and parent portals.",
      kindergarten: "Kindergarten",
      kindergartenDesc: "Colorful and interactive websites for kindergartens with photo galleries, activity schedules, and communication tools.",
      highSchools: "High Schools",
      highSchoolsDesc: "Advanced websites for high schools with admission systems, exam results, and academic resource management.",
      colleges: "Colleges",
      collegesDesc: "Professional college websites with course catalogs, faculty profiles, and student information systems.",
      madrasas: "Madrasas",
      madrasasDesc: "Culturally appropriate websites for madrasas with Islamic calendar integration and multilingual support.",
      international: "International Schools",
      internationalDesc: "Global-standard websites for international schools with multi-language support and international curriculum features.",
      
      // Features
      whyChoose: "Why Choose Nijer Web?",
      whyChooseDesc: "We combine technical expertise with deep understanding of Bangladesh's educational sector",
      responsiveDesign: "Responsive Design",
      responsiveDesc: "Mobile-first approach ensuring perfect display on all devices",
      easyManagement: "Easy Management",
      easyDesc: "User-friendly admin panels for easy content updates",
      seoOptimized: "SEO Optimized",
      seoDesc: "Built-in SEO features to improve search engine rankings",
      multiUser: "Multi-user Support",
      multiUserDesc: "Role-based access for teachers, students, and administrators",
      
      // Portfolio
      portfolioTitle: "Our Recent Projects",
      portfolioDesc: "Explore some of our successful educational website projects across Bangladesh",
      
      // Testimonials
      testimonialsTitle: "What Our Clients Say",
      testimonialsDesc: "Hear from educational institutions who have transformed their online presence with us",
      
      // About
      aboutTitle: "About Nijer Web",
      aboutDesc1: "Founded in 2018, Nijer Web has been at the forefront of educational website development in Bangladesh. We understand the unique challenges and requirements of educational institutions in our country.",
      aboutDesc2: "Our team of skilled developers and designers work closely with schools, colleges, and madrasas to create digital solutions that enhance communication, streamline administration, and improve the overall educational experience.",
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years Experience",
      
      // Contact
      contactTitle: "Get In Touch",
      contactDesc: "Ready to transform your educational institution's online presence? Contact us today for a free consultation.",
      officeAddress: "Office Address",
      phone: "Phone",
      email: "Email",
      institutionName: "Institution Name",
      emailAddress: "Email Address",
      institutionType: "Institution Type",
      selectType: "Select institution type",
      message: "Message",
      messagePlaceholder: "Tell us about your project requirements...",
      sendMessage: "Send Message",
      
      // Footer
      footerDesc: "Bangladesh's leading educational website development company, empowering institutions with modern digital solutions.",
      company: "Company",
      contactInfo: "Contact Info",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      footerCopyright: "© 2024 Nijer Web. All rights reserved. Proudly serving Bangladesh's educational sector."
    },
    bn: {
      // Navigation
      home: "হোম",
      services: "সেবাসমূহ",
      portfolio: "পোর্টফোলিও",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      
      // Hero Section
      heroTitle: "বাংলাদেশের শীর্ষস্থানীয়",
      heroSubtitle: "শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট",
      heroCompany: "ডেভেলপমেন্ট কোম্পানি",
      heroDescription: "আমরা বাংলাদেশের শিক্ষা প্রতিষ্ঠানের জন্য পেশাদার, আধুনিক ওয়েবসাইট তৈরিতে বিশেষজ্ঞ। কিন্ডারগার্টেন থেকে আন্তর্জাতিক স্কুল পর্যন্ত, আমরা ডিজিটাল সমাধান তৈরি করি যা শিক্ষা ও যোগাযোগ উন্নত করে।",
      getStarted: "শুরু করুন",
      viewPortfolio: "পোর্টফোলিও দেখুন",
      
      // Services
      servicesTitle: "আমাদের শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট সেবা",
      servicesDescription: "আমরা বিভিন্ন ধরনের শিক্ষা প্রতিষ্ঠানের জন্য বিশেষভাবে তৈরি ওয়েব ডেভেলপমেন্ট সমাধান প্রদান করি",
      primarySchools: "প্রাথমিক বিদ্যালয়",
      primaryDesc: "ছাত্র ব্যবস্থাপনা, অনলাইন ক্লাস এবং অভিভাবক পোর্টাল সহ প্রাথমিক বিদ্যালয়ের জন্য সম্পূর্ণ ওয়েবসাইট সমাধান।",
      kindergarten: "কিন্ডারগার্টেন",
      kindergartenDesc: "ফটো গ্যালারি, কার্যক্রমের সময়সূচী এবং যোগাযোগের সরঞ্জাম সহ কিন্ডারগার্টেনের জন্য রঙিন এবং ইন্টারঅ্যাক্টিভ ওয়েবসাইট।",
      highSchools: "উচ্চ বিদ্যালয়",
      highSchoolsDesc: "ভর্তি ব্যবস্থা, পরীক্ষার ফলাফল এবং একাডেমিক রিসোর্স ব্যবস্থাপনা সহ উচ্চ বিদ্যালয়ের জন্য উন্নত ওয়েবসাইট।",
      colleges: "কলেজ",
      collegesDesc: "কোর্স ক্যাটালগ, অনুষদের প্রোফাইল এবং ছাত্র তথ্য ব্যবস্থা সহ পেশাদার কলেজ ওয়েবসাইট।",
      madrasas: "মাদ্রাসা",
      madrasasDesc: "ইসলামিক ক্যালেন্ডার ইন্টিগ্রেশন এবং বহুভাষিক সাপোর্ট সহ মাদ্রাসার জন্য সাংস্কৃতিকভাবে উপযুক্ত ওয়েবসাইট।",
      international: "আন্তর্জাতিক স্কুল",
      internationalDesc: "বহুভাষিক সাপোর্ট এবং আন্তর্জাতিক পাঠ্যক্রমের বৈশিষ্ট্য সহ আন্তর্জাতিক স্কুলের জন্য বিশ্বমানের ওয়েবসাইট।",
      
      // Features
      whyChoose: "কেন নিজের ওয়েব বেছে নেবেন?",
      whyChooseDesc: "আমরা বাংলাদেশের শিক্ষা খাতের গভীর বোঝাপড়ার সাথে প্রযুক্তিগত দক্ষতা একত্রিত করি",
      responsiveDesign: "রেসপন্সিভ ডিজাইন",
      responsiveDesc: "সকল ডিভাইসে নিখুঁত প্রদর্শন নিশ্চিত করে মোবাইল-ফার্স্ট পদ্ধতি",
      easyManagement: "সহজ ব্যবস্থাপনা",
      easyDesc: "সহজ কন্টেন্ট আপডেটের জন্য ব্যবহারকারী-বান্ধব অ্যাডমিন প্যানেল",
      seoOptimized: "এসইও অপ্টিমাইজড",
      seoDesc: "সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করতে বিল্ট-ইন এসইও বৈশিষ্ট্য",
      multiUser: "মাল্টি-ইউজার সাপোর্ট",
      multiUserDesc: "শিক্ষক, ছাত্র এবং প্রশাসকদের জন্য ভূমিকা-ভিত্তিক অ্যাক্সেস",
      
      // Portfolio
      portfolioTitle: "আমাদের সাম্প্রতিক প্রকল্প",
      portfolioDesc: "বাংলাদেশ জুড়ে আমাদের সফল শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট প্রকল্পগুলি অন্বেষণ করুন",
      
      // Testimonials
      testimonialsTitle: "আমাদের ক্লায়েন্টরা কী বলেন",
      testimonialsDesc: "শিক্ষা প্রতিষ্ঠানগুলির কাছ থেকে শুনুন যারা আমাদের সাথে তাদের অনলাইন উপস্থিতি রূপান্তরিত করেছে",
      
      // About
      aboutTitle: "নিজের ওয়েব সম্পর্কে",
      aboutDesc1: "২০১৮ সালে প্রতিষ্ঠিত, নিজের ওয়েব বাংলাদেশে শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট ডেভেলপমেন্টে অগ্রগামী। আমরা আমাদের দেশের শিক্ষা প্রতিষ্ঠানের অনন্য চ্যালেঞ্জ এবং প্রয়োজনীয়তা বুঝি।",
      aboutDesc2: "আমাদের দক্ষ ডেভেলপার এবং ডিজাইনারদের দল স্কুল, কলেজ এবং মাদ্রাসার সাথে ঘনিষ্ঠভাবে কাজ করে ডিজিটাল সমাধান তৈরি করে যা যোগাযোগ উন্নত করে, প্রশাসন সহজ করে এবং সামগ্রিক শিক্ষার অভিজ্ঞতা উন্নত করে।",
      projectsCompleted: "সম্পন্ন প্রকল্প",
      yearsExperience: "বছরের অভিজ্ঞতা",
      
      // Contact
      contactTitle: "যোগাযোগ করুন",
      contactDesc: "আপনার শিক্ষা প্রতিষ্ঠানের অনলাইন উপস্থিতি রূপান্তরিত করতে প্রস্তুত? বিনামূল্যে পরামর্শের জন্য আজই আমাদের সাথে যোগাযোগ করুন।",
      officeAddress: "অফিসের ঠিকানা",
      phone: "ফোন",
      email: "ইমেইল",
      institutionName: "প্রতিষ্ঠানের নাম",
      emailAddress: "ইমেইল ঠিকানা",
      institutionType: "প্রতিষ্ঠানের ধরন",
      selectType: "প্রতিষ্ঠানের ধরন নির্বাচন করুন",
      message: "বার্তা",
      messagePlaceholder: "আপনার প্রকল্পের প্রয়োজনীয়তা সম্পর্কে আমাদের বলুন...",
      sendMessage: "বার্তা পাঠান",
      
      // Footer
      footerDesc: "বাংলাদেশের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট ডেভেলপমেন্ট কোম্পানি, আধুনিক ডিজিটাল সমাধান দিয়ে প্রতিষ্ঠানগুলিকে ক্ষমতায়ন করছে।",
      company: "কোম্পানি",
      contactInfo: "যোগাযোগের তথ্য",
      privacyPolicy: "গোপনীয়তা নীতি",
      termsOfService: "সেবার শর্তাবলী",
      footerCopyright: "© ২০২৪ নিজের ওয়েব। সকল অধিকার সংরক্ষিত। গর্বের সাথে বাংলাদেশের শিক্ষা খাতে সেবা প্রদান করছি।"
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const services = [
    {
      icon: <School className="w-12 h-12 text-emerald-600" />,
      title: t.primarySchools,
      description: t.primaryDesc
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: t.kindergarten,
      description: t.kindergartenDesc
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-emerald-600" />,
      title: t.highSchools,
      description: t.highSchoolsDesc
    },
    {
      icon: <Building2 className="w-12 h-12 text-emerald-600" />,
      title: t.colleges,
      description: t.collegesDesc
    },
    {
      icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
      title: t.madrasas,
      description: t.madrasasDesc
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-600" />,
      title: t.international,
      description: t.internationalDesc
    }
  ];

  const features = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: t.responsiveDesign,
      description: t.responsiveDesc
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: t.easyManagement,
      description: t.easyDesc
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: t.seoOptimized,
      description: t.seoDesc
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t.multiUser,
      description: t.multiUserDesc
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
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.home}</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.services}</a>
              <a href="#portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.portfolio}</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.about}</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.contact}</a>
            </nav>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'en' ? 'বাংলা' : 'English'}</span>
              </button>
            </div>

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
                <a href="#home" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.home}</a>
                <a href="#services" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.services}</a>
                <a href="#portfolio" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.portfolio}</a>
                <a href="#about" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.about}</a>
                <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.contact}</a>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-3 py-2 mx-3 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                >
                  <Languages className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'en' ? 'বাংলা' : 'English'}</span>
                </button>
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
              {t.heroTitle}
              <span className="text-emerald-600 block">{t.heroSubtitle}</span>
              {t.heroCompany}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                {t.getStarted}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors">
                {t.viewPortfolio}
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
              {t.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.servicesDescription}
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
              {t.whyChoose}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.whyChooseDesc}
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
              {t.portfolioTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.portfolioDesc}
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
              {t.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.testimonialsDesc}
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
                {t.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.aboutDesc1}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.aboutDesc2}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">150+</p>
                  <p className="text-gray-600">{t.projectsCompleted}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">5+</p>
                  <p className="text-gray-600">{t.yearsExperience}</p>
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
              {t.contactTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contactDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.officeAddress}</h3>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.phone}</h3>
                    <p className="text-gray-600">+880 1712-345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.email}</h3>
                    <p className="text-gray-600">info@nijerweb.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.institutionName}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder={language === 'en' ? "Your school/college name" : "আপনার স্কুল/কলেজের নাম"}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.emailAddress}
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
                    {t.institutionType}
                  </label>
                  <select 
                    id="type" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                  >
                    <option value="">{t.selectType}</option>
                    <option value="primary">{t.primarySchools}</option>
                    <option value="kindergarten">{t.kindergarten}</option>
                    <option value="high-school">{t.highSchools}</option>
                    <option value="college">{t.colleges}</option>
                    <option value="madrasa">{t.madrasas}</option>
                    <option value="international">{t.international}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  {t.sendMessage}
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