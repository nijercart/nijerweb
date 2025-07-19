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
      team: "Team",
      contact: "Contact",
      
      // Hero Section
      heroTitle: "Revolutionizing Education",
      heroSubtitle: "Through Digital Innovation",
      heroCompany: "Nijer Web - Educational Technology Solutions",
      heroDescription: "We are a leading educational technology company specializing in comprehensive digital solutions for academic institutions. Our innovative platforms help schools, colleges, and universities across Bangladesh enhance their digital presence and improve student engagement.",
      getStarted: "Get Started",
      viewPortfolio: "See Our Work",
      learnMore: "Learn More",
      
      // Services
      servicesTitle: "Comprehensive Educational Technology Solutions",
      servicesDescription: "We deliver professional, scalable digital platforms designed specifically for educational institutions, featuring modern design, robust functionality, and seamless user experience",
      primarySchools: "Primary Schools",
      primaryDesc: "Professional digital platforms with student information systems, interactive learning portals, and comprehensive parent communication tools.",
      kindergarten: "Kindergarten",
      kindergartenDesc: "Child-friendly, secure platforms with interactive features, virtual campus tours, and real-time updates for parents and guardians.",
      highSchools: "High Schools",
      highSchoolsDesc: "Advanced academic platforms with digital certificate management, online learning integration, and comprehensive student portals.",
      colleges: "Colleges",
      collegesDesc: "Sophisticated institutional websites with virtual campus experiences, course management systems, and integrated career services.",
      madrasas: "Madrasas",
      madrasasDesc: "Culturally appropriate platforms for Islamic education with integrated learning tools, prayer schedules, and community engagement features.",
      international: "International Schools",
      internationalDesc: "International-standard platforms with multilingual support, global communication tools, and comprehensive administrative systems.",
      
      // Features
      whyChoose: "Why Choose Nijer Web",
      whyChooseDesc: "We combine technical expertise with deep understanding of educational needs to deliver solutions that truly serve your institution",
      responsiveDesign: "Responsive Design",
      responsiveDesc: "Mobile-first, responsive designs that provide optimal viewing experience across all devices and screen sizes",
      easyManagement: "Easy Content Management",
      easyDesc: "User-friendly content management system that allows non-technical staff to easily update and maintain website content",
      seoOptimized: "SEO Optimized",
      seoDesc: "Search engine optimized websites with fast loading speeds and improved visibility to help your institution reach more students",
      multiUser: "Advanced Analytics",
      multiUserDesc: "Comprehensive analytics and reporting tools to track website performance and user engagement patterns",
      
      // Portfolio
      portfolioTitle: "Our Portfolio of Success",
      portfolioDesc: "Discover how we've helped educational institutions across Bangladesh enhance their digital presence and improve student engagement",
      
      // Testimonials
      testimonialsTitle: "Client Testimonials",
      testimonialsDesc: "Hear from educational leaders who have partnered with us to transform their digital presence",
      
      // About
      aboutTitle: "About Nijer Web",
      aboutDesc1: "Founded in 2018, Nijer Web emerged from a vision to bridge the digital gap in Bangladesh's educational sector. We recognized that many institutions lacked modern, effective online platforms to serve their communities. Today, we are a trusted technology partner for educational institutions nationwide.",
      aboutDesc2: "Our mission is to empower educational institutions with professional, user-friendly digital solutions. We combine technical excellence with deep understanding of educational needs to create platforms that truly serve students, teachers, and parents effectively.",
      
      // Team
      teamTitle: "Our Professional Team",
      teamDesc: "Meet our experienced team of developers, designers, and education specialists dedicated to delivering exceptional digital solutions for your institution.",
      
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years of Experience",
      activeUsers: "Active Users",
      clientSatisfaction: "Client Satisfaction",
      
      // Contact
      contactTitle: "Get Started Today",
      contactDesc: "Ready to enhance your institution's digital presence? Contact us for a consultation and discover how we can help you achieve your goals.",
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
      footerDesc: "A professional technology company dedicated to providing comprehensive digital solutions for educational institutions across Bangladesh.",
      company: "Company",
      contactInfo: "Contact Info",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      footerCopyright: "© 2024 Nijer Web. All rights reserved. Professional web solutions for educational excellence."
    },
    bn: {
      // Navigation
      home: "হোম",
      services: "সেবাসমূহ",
      portfolio: "পোর্টফোলিও",
      about: "আমাদের সম্পর্কে",
      team: "টিম",
      contact: "যোগাযোগ",
      
      // Hero Section
      heroTitle: "ডিজিটাল উদ্ভাবনের মাধ্যমে",
      heroSubtitle: "শিক্ষায় বিপ্লব",
      heroCompany: "নিজের ওয়েব - শিক্ষা প্রযুক্তি সমাধান",
      heroDescription: "আমরা একটি অগ্রণী শিক্ষা প্রযুক্তি কোম্পানি যা শিক্ষা প্রতিষ্ঠানের জন্য ব্যাপক ডিজিটাল সমাধান প্রদানে বিশেষজ্ঞ। আমাদের উদ্ভাবনী প্ল্যাটফর্মগুলি বাংলাদেশের স্কুল, কলেজ এবং বিশ্ববিদ্যালয়গুলিকে তাদের ডিজিটাল উপস্থিতি বৃদ্ধি করতে সাহায্য করে।",
      getStarted: "শুরু করুন",
      viewPortfolio: "আমাদের কাজ দেখুন",
      learnMore: "আরও জানুন",
      
      // Services
      servicesTitle: "ব্যাপক শিক্ষা প্রযুক্তি সমাধান",
      servicesDescription: "আমরা শিক্ষা প্রতিষ্ঠানের জন্য বিশেষভাবে ডিজাইন করা পেশাদার, স্কেলেবল ডিজিটাল প্ল্যাটফর্ম প্রদান করি, যা আধুনিক ডিজাইন, শক্তিশালী কার্যকারিতা এবং নিরবচ্ছিন্ন ব্যবহারকারীর অভিজ্ঞতা প্রদান করে",
      primarySchools: "প্রাথমিক বিদ্যালয়",
      primaryDesc: "এআই-চালিত ছাত্র ট্র্যাকিং, গেমিফাইড লার্নিং পোর্টাল এবং রিয়েল-টাইম অভিভাবক এনগেজমেন্ট টুলস সহ স্মার্ট ডিজিটাল প্ল্যাটফর্ম।",
      kindergarten: "কিন্ডারগার্টেন",
      kindergartenDesc: "এআর ফিচার, ভার্চুয়াল ট্যুর এবং তাৎক্ষণিক ফটো শেয়ারিং সহ ইন্টারঅ্যাক্টিভ, শিশু-বান্ধব প্ল্যাটফর্ম যা অভিভাবকরা পছন্দ করেন।",
      highSchools: "উচ্চ বিদ্যালয়",
      highSchoolsDesc: "ব্লকচেইন-যাচাইকৃত সার্টিফিকেট, এআই টিউটরিং ইন্টিগ্রেশন এবং সামাজিক শিক্ষা নেটওয়ার্ক সহ নেক্সট-জেন প্ল্যাটফর্ম।",
      colleges: "কলেজ",
      collegesDesc: "ভার্চুয়াল ক্যাম্পাস ট্যুর, এআই-চালিত কোর্স সুপারিশ এবং একীভূত ক্যারিয়ার গাইডেন্স সহ উন্নত পোর্টাল।",
      madrasas: "মাদ্রাসা",
      madrasasDesc: "কুরআন শিক্ষা অ্যাপ, নামাজের সময় ইন্টিগ্রেশন এবং কমিউনিটি ফিচার সহ আধুনিক ইসলামিক শিক্ষা প্ল্যাটফর্ম।",
      international: "আন্তর্জাতিক স্কুল",
      internationalDesc: "গ্লোবাল কোলাবরেশন টুলস, ভার্চুয়াল এক্সচেঞ্জ প্রোগ্রাম এবং মাল্টি-কারেন্সি পেমেন্ট সিস্টেম সহ বিশ্বমানের প্ল্যাটফর্ম।",
      
      // Features
      whyChoose: "কেন নিজের ওয়েব বেছে নিবেন",
      whyChooseDesc: "আমরা প্রযুক্তিগত দক্ষতার সাথে শিক্ষার প্রয়োজনের গভীর বোঝাপড়া একত্রিত করে এমন সমাধান প্রদান করি যা সত্যিকারের আপনার প্রতিষ্ঠানের সেবা করে",
      responsiveDesign: "রেসপন্সিভ ডিজাইন",
      responsiveDesc: "মোবাইল-ফার্স্ট, রেসপন্সিভ ডিজাইন যা সকল ডিভাইস এবং স্ক্রিন সাইজে সর্বোত্তম দেখার অভিজ্ঞতা প্রদান করে",
      easyManagement: "সহজ কন্টেন্ট ম্যানেজমেন্ট",
      easyDesc: "ব্যবহারকারী-বান্ধব কন্টেন্ট ম্যানেজমেন্ট সিস্টেম যা অ-প্রযুক্তিগত কর্মীদের সহজেই ওয়েবসাইট কন্টেন্ট আপডেট ও রক্ষণাবেক্ষণ করতে দেয়",
      seoOptimized: "এসইও অপ্টিমাইজড",
      seoDesc: "দ্রুত লোডিং গতি এবং উন্নত দৃশ্যমানতা সহ সার্চ ইঞ্জিন অপ্টিমাইজড ওয়েবসাইট যা আপনার প্রতিষ্ঠানকে আরও ছাত্রদের কাছে পৌঁছাতে সাহায্য করে",
      multiUser: "উন্নত অ্যানালিটিক্স",
      multiUserDesc: "ওয়েবসাইটের কর্মক্ষমতা এবং ব্যবহারকারীর এনগেজমেন্ট প্যাটার্ন ট্র্যাক করার জন্য ব্যাপক অ্যানালিটিক্স এবং রিপোর্টিং টুলস",
      
      // Portfolio
      portfolioTitle: "অনুপ্রেরণামূলক সাফল্যের গল্প",
      portfolioDesc: "দেখুন কীভাবে আমরা শিক্ষা প্রতিষ্ঠানগুলিকে তাদের ডিজিটাল এনগেজমেন্ট এবং ছাত্র সন্তুষ্টি ১০ গুণ বৃদ্ধি করতে সাহায্য করেছি",
      
      // Testimonials
      testimonialsTitle: "রূপান্তরের কণ্ঠস্বর",
      testimonialsDesc: "প্রতিষ্ঠানগুলির বাস্তব গল্প যারা ঐতিহ্যের পরিবর্তে উদ্ভাবন বেছে নিয়েছে",
      
      // About
      aboutTitle: "নিজের ওয়েব সম্পর্কে",
      aboutDesc1: "২০১৮ সালে প্রতিষ্ঠিত, নিজের ওয়েব বাংলাদেশের শিক্ষা খাতে ডিজিটাল ব্যবধান দূর করার দৃষ্টিভঙ্গি থেকে উদ্ভূত হয়েছে। আমরা স্বীকার করেছি যে অনেক প্রতিষ্ঠানের তাদের সম্প্রদায়ের সেবা করার জন্য আধুনিক, কার্যকর অনলাইন প্ল্যাটফর্মের অভাব রয়েছে। আজ, আমরা দেশব্যাপী শিক্ষা প্রতিষ্ঠানের একটি বিশ্বস্ত প্রযুক্তি অংশীদার।",
      aboutDesc2: "আমাদের মিশন হল শিক্ষা প্রতিষ্ঠানগুলিকে পেশাদার, ব্যবহারকারী-বান্ধব ডিজিটাল সমাধান দিয়ে ক্ষমতায়ন করা। আমরা শিক্ষার প্রয়োজনের গভীর বোঝাপড়ার সাথে প্রযুক্তিগত উৎকর্ষতা একত্রিত করে এমন প্ল্যাটফর্ম তৈরি করি যা সত্যিকারের ছাত্র, শিক্ষক এবং অভিভাবকদের কার্যকরভাবে সেবা করে।",
      
      // Team
      teamTitle: "আমাদের পেশাদার দল",
      teamDesc: "আমাদের অভিজ্ঞ ডেভেলপার, ডিজাইনার এবং শিক্ষা বিশেষজ্ঞদের দলের সাথে পরিচিত হন যারা আপনার প্রতিষ্ঠানের জন্য ব্যতিক্রমী ডিজিটাল সমাধান প্রদানে নিবেদিত।",
      
      projectsCompleted: "সম্পন্ন প্রকল্প",
      yearsExperience: "বছরের অভিজ্ঞতা",
      activeUsers: "সক্রিয় ব্যবহারকারী",
      clientSatisfaction: "ক্লায়েন্ট সন্তুষ্টি",
      
      // Contact
      contactTitle: "আজই শুরু করুন",
      contactDesc: "আপনার প্রতিষ্ঠানের ডিজিটাল উপস্থিতি বৃদ্ধি করতে প্রস্তুত? পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন এবং আবিষ্কার করুন কীভাবে আমরা আপনার লক্ষ্য অর্জনে সাহায্য করতে পারি।",
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
      footerDesc: "একটি পেশাদার প্রযুক্তি কোম্পানি যা বাংলাদেশের শিক্ষা প্রতিষ্ঠানের জন্য ব্যাপক ডিজিটাল সমাধান প্রদানে নিবেদিত।",
      company: "কোম্পানি",
      contactInfo: "যোগাযোগের তথ্য",
      privacyPolicy: "গোপনীয়তা নীতি",
      termsOfService: "সেবার শর্তাবলী",
      footerCopyright: "© ২০২৪ নিজের ওয়েব। সকল অধিকার সংরক্ষিত। শিক্ষার উৎকর্ষতার জন্য পেশাদার ওয়েব সমাধান।"
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
      icon: <Laptop className="w-8 h-8 text-purple-600" />,
      title: t.responsiveDesign,
      description: t.responsiveDesc
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: t.easyManagement,
      description: t.easyDesc
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: t.seoOptimized,
      description: t.seoDesc
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: t.multiUser,
      description: t.multiUserDesc
    }
  ];

  const portfolioItems = [
    {
      name: "Dhaka Future Academy",
      category: "Smart School",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive school management system with student portal and parent communication",
      metrics: "500+ Students"
    },
    {
      name: "TechEd College Chittagong",
      category: "Digital College",
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern college website with course management and online admission system",
      metrics: "2000+ Students"
    },
    {
      name: "Little Innovators Sylhet",
      category: "Smart Kindergarten",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Child-friendly website with photo galleries and parent communication tools",
      metrics: "95% Parent Satisfaction"
    },
    {
      name: "NextGen High Rajshahi",
      category: "Future School",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional high school website with academic information and student resources",
      metrics: "1200+ Students"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rashida Rahman",
      position: "Principal, Dhaka Future Academy",
      content: "Nijer Web delivered a professional, comprehensive website that perfectly serves our school's needs. The platform is user-friendly for both staff and parents, and the ongoing support has been excellent.",
      rating: 5
    },
    {
      name: "Prof. Mohammad Hasan",
      position: "Director, TechEd College Chittagong",
      content: "The team at Nijer Web demonstrated exceptional professionalism and technical expertise. They delivered our college website on time and within budget, exceeding our expectations in every way.",
      rating: 5
    },
    {
      name: "Mrs. Fatima Begum",
      position: "Owner, Little Innovators Sylhet",
      content: "We are extremely satisfied with the quality of work and attention to detail. The website has significantly improved our communication with parents and enhanced our school's professional image.",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Md. Rafiqul Islam",
      position: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Computer Science graduate from BUET with over 10 years of experience in educational technology. Led multiple successful projects for schools and universities across Bangladesh.",
      skills: ["Leadership", "Project Management", "EdTech Strategy", "Business Development", "Team Building"]
    },
    {
      name: "Fatima Khatun",
      position: "Lead UI/UX Designer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer specializing in educational interfaces with 8+ years of experience. Expert in creating user-friendly designs that enhance learning experiences for students and educators.",
      skills: ["UI/UX Design", "User Research", "Prototyping", "Design Systems", "Educational Psychology"]
    },
    {
      name: "Mohammad Hasan",
      position: "Senior Backend Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Software engineer with expertise in database design and server architecture. Specializes in building robust, scalable backend systems for educational platforms with high user loads.",
      skills: ["Node.js", "Database Design", "API Development", "Cloud Computing", "System Architecture"]
    },
    {
      name: "Ayesha Rahman",
      position: "Frontend Developer",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Frontend specialist focused on creating responsive, accessible web applications. Expert in modern JavaScript frameworks and ensuring optimal user experience across all devices.",
      skills: ["React", "JavaScript", "Responsive Design", "Web Accessibility", "Performance Optimization"]
    },
    {
      name: "Dr. Shahidul Islam",
      position: "Education Consultant",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former school principal with 25+ years in education. Provides valuable insights into educational workflows and helps design solutions that truly meet institutional needs.",
      skills: ["Educational Leadership", "Curriculum Development", "Teacher Training", "Academic Administration", "Policy Development"]
    },
    {
      name: "Nasir Ahmed",
      position: "Digital Marketing Specialist",
      image: "https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Digital marketing expert specializing in educational sector promotion. Helps institutions improve their online visibility and reach their target audience effectively.",
      skills: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "Online Advertising"]
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
              <a href="#team" className="text-gray-700 hover:text-emerald-600 transition-colors">{t.team}</a>
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
                <a href="#team" className="px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors">{t.team}</a>
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
      <section id="home" className="bg-gradient-to-br from-purple-50 via-emerald-50 to-blue-50 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full text-sm font-medium text-purple-800 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Trusted by 150+ Educational Institutions • Professional Excellence Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.heroTitle}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent block">{t.heroSubtitle}</span>
              <span className="text-2xl md:text-3xl font-normal text-gray-700">{t.heroCompany}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                {t.getStarted}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105">
                {t.viewPortfolio}
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">150+</p>
                <p className="text-gray-600 text-sm">{t.projectsCompleted}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">6+</p>
                <p className="text-gray-600 text-sm">{t.yearsExperience}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">50K+</p>
                <p className="text-gray-600 text-sm">{t.activeUsers}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">98%</p>
                <p className="text-gray-600 text-sm">{t.clientSatisfaction}</p>
              </div>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-emerald-100 rounded-full mb-6 group-hover:scale-110 transition-transform">
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 group">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent font-medium">{item.category}</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">{item.metrics}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-purple-50">
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.teamDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100 group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-emerald-100 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">150+</p>
                  <p className="text-gray-600">{t.projectsCompleted}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">6+</p>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.officeAddress}</h3>
                    <p className="text-gray-600">
                      WeWork Dhaka, Level 8<br />
                      Gulshan Avenue, Dhaka 1212<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.phone}</h3>
                    <p className="text-gray-600">+880 1700-NIJER (64537)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.email}</h3>
                    <p className="text-gray-600">hello@nijerweb.com</p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.institutionType}
                  </label>
                  <select 
                    id="type" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-purple-400 mr-2" />
                <span className="text-xl font-bold">Nijer Web</span>
              </div>
              <p className="text-gray-400">
                {t.footerDesc}
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
                <p>House 45, Road 12</p>
                <p>Dhanmondi, Dhaka 1209</p>
                <p>+880 1700-NIJER (64537)</p>
                <p>hello@nijerweb.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;