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
      heroCompany: "🚀 Nijer Web Startup",
      heroDescription: "We're a fast-growing tech startup transforming how educational institutions connect with students and parents. Our cutting-edge solutions empower schools across Bangladesh to thrive in the digital age.",
      getStarted: "Get Started",
      viewPortfolio: "See Our Work",
      joinRevolution: "Join the Revolution",
      
      // Services
      servicesTitle: "Innovative Solutions for Modern Education",
      servicesDescription: "We're disrupting traditional educational websites with AI-powered, mobile-first solutions that scale with your institution",
      primarySchools: "Primary Schools",
      primaryDesc: "Smart digital platforms with AI-powered student tracking, gamified learning portals, and real-time parent engagement tools.",
      kindergarten: "Kindergarten",
      kindergartenDesc: "Interactive, child-friendly platforms with AR features, virtual tours, and instant photo sharing that parents love.",
      highSchools: "High Schools",
      highSchoolsDesc: "Next-gen platforms with blockchain-verified certificates, AI tutoring integration, and social learning networks.",
      colleges: "Colleges",
      collegesDesc: "Advanced portals with virtual campus tours, AI-powered course recommendations, and integrated career guidance.",
      madrasas: "Madrasas",
      madrasasDesc: "Modern Islamic education platforms with Quran learning apps, prayer time integration, and community features.",
      international: "International Schools",
      internationalDesc: "World-class platforms with global collaboration tools, virtual exchange programs, and multi-currency payment systems.",
      
      // Features
      whyChoose: "Why We're Different",
      whyChooseDesc: "We're not just another web agency - we're education technology innovators building the future of learning",
      responsiveDesign: "AI-Powered Design",
      responsiveDesc: "Machine learning algorithms that adapt your website's layout based on user behavior and preferences",
      easyManagement: "No-Code Management",
      easyDesc: "Revolutionary drag-and-drop interface that lets anyone update content without technical knowledge",
      seoOptimized: "Growth Hacking",
      seoDesc: "Built-in viral marketing tools and SEO automation that grows your online presence exponentially",
      multiUser: "Smart Analytics",
      multiUserDesc: "Real-time insights and predictive analytics that help you make data-driven decisions",
      
      // Portfolio
      portfolioTitle: "Success Stories That Inspire",
      portfolioDesc: "See how we've helped educational institutions 10x their digital engagement and student satisfaction",
      
      // Testimonials
      testimonialsTitle: "Voices of Transformation",
      testimonialsDesc: "Real stories from institutions that chose innovation over tradition",
      
      // About
      aboutTitle: "Our Startup Journey",
      aboutDesc1: "Born in 2018 from a dorm room idea, Nijer Web started as two university friends who saw how outdated educational websites were holding back Bangladesh's institutions. Today, we're a fast-growing startup with a mission to democratize quality education through technology.",
      aboutDesc2: "We're not just building websites - we're creating digital ecosystems that connect students, teachers, and parents in ways never before possible. Our agile team moves fast, thinks big, and isn't afraid to challenge the status quo.",
      
      // Team
      teamTitle: "Meet the Innovators",
      teamDesc: "A diverse team of young entrepreneurs, tech enthusiasts, and education revolutionaries who believe technology can transform learning.",
      
      projectsCompleted: "Institutions Transformed",
      yearsExperience: "Years Disrupting Education",
      activeUsers: "Active Users",
      growthRate: "Monthly Growth",
      
      // Contact
      contactTitle: "Ready to Innovate?",
      contactDesc: "Join the digital education revolution! Book a free strategy session and discover how we can 10x your institution's impact.",
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
      footerDesc: "A tech startup on a mission to revolutionize education in Bangladesh through innovative digital solutions and cutting-edge technology.",
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
      team: "টিম",
      contact: "যোগাযোগ",
      
      // Hero Section
      heroTitle: "ডিজিটাল উদ্ভাবনের মাধ্যমে",
      heroSubtitle: "শিক্ষায় বিপ্লব",
      heroCompany: "🚀 নিজের ওয়েব স্টার্টআপ",
      heroDescription: "আমরা একটি দ্রুত বর্ধনশীল টেক স্টার্টআপ যা শিক্ষা প্রতিষ্ঠানগুলি কীভাবে ছাত্র ও অভিভাবকদের সাথে সংযুক্ত হয় তা পরিবর্তন করছি। আমাদের অত্যাধুনিক সমাধান বাংলাদেশের স্কুলগুলিকে ডিজিটাল যুগে উন্নতি করতে সক্ষম করে।",
      getStarted: "শুরু করুন",
      viewPortfolio: "আমাদের কাজ দেখুন",
      joinRevolution: "বিপ্লবে যোগ দিন",
      
      // Services
      servicesTitle: "আধুনিক শিক্ষার জন্য উদ্ভাবনী সমাধান",
      servicesDescription: "আমরা এআই-চালিত, মোবাইল-ফার্স্ট সমাধান দিয়ে ঐতিহ্যগত শিক্ষা ওয়েবসাইটে বিপ্লব আনছি যা আপনার প্রতিষ্ঠানের সাথে বৃদ্ধি পায়",
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
      whyChoose: "কেন আমরা আলাদা",
      whyChooseDesc: "আমরা শুধু আরেকটি ওয়েব এজেন্সি নই - আমরা শিক্ষা প্রযুক্তি উদ্ভাবনকারী যারা শিক্ষার ভবিষ্যৎ তৈরি করছি",
      responsiveDesign: "এআই-চালিত ডিজাইন",
      responsiveDesc: "মেশিন লার্নিং অ্যালগরিদম যা ব্যবহারকারীর আচরণ এবং পছন্দের উপর ভিত্তি করে আপনার ওয়েবসাইটের লেআউট অভিযোজিত করে",
      easyManagement: "নো-কোড ম্যানেজমেন্ট",
      easyDesc: "বিপ্লবী ড্র্যাগ-অ্যান্ড-ড্রপ ইন্টারফেস যা যে কাউকে প্রযুক্তিগত জ্ঞান ছাড়াই কন্টেন্ট আপডেট করতে দেয়",
      seoOptimized: "গ্রোথ হ্যাকিং",
      seoDesc: "বিল্ট-ইন ভাইরাল মার্কেটিং টুলস এবং এসইও অটোমেশন যা আপনার অনলাইন উপস্থিতি দ্রুতগতিতে বৃদ্ধি করে",
      multiUser: "স্মার্ট অ্যানালিটিক্স",
      multiUserDesc: "রিয়েল-টাইম অন্তর্দৃষ্টি এবং ভবিষ্যদ্বাণীমূলক বিশ্লেষণ যা আপনাকে ডেটা-চালিত সিদ্ধান্ত নিতে সাহায্য করে",
      
      // Portfolio
      portfolioTitle: "অনুপ্রেরণামূলক সাফল্যের গল্প",
      portfolioDesc: "দেখুন কীভাবে আমরা শিক্ষা প্রতিষ্ঠানগুলিকে তাদের ডিজিটাল এনগেজমেন্ট এবং ছাত্র সন্তুষ্টি ১০ গুণ বৃদ্ধি করতে সাহায্য করেছি",
      
      // Testimonials
      testimonialsTitle: "রূপান্তরের কণ্ঠস্বর",
      testimonialsDesc: "প্রতিষ্ঠানগুলির বাস্তব গল্প যারা ঐতিহ্যের পরিবর্তে উদ্ভাবন বেছে নিয়েছে",
      
      // About
      aboutTitle: "আমাদের স্টার্টআপ যাত্রা",
      aboutDesc1: "২০১৮ সালে একটি ডর্ম রুমের আইডিয়া থেকে জন্ম, নিজের ওয়েব দুই বিশ্ববিদ্যালয়ের বন্ধু হিসেবে শুরু হয়েছিল যারা দেখেছিল কীভাবে পুরানো শিক্ষা ওয়েবসাইটগুলি বাংলাদেশের প্রতিষ্ঠানগুলিকে পিছিয়ে রাখছে। আজ, আমরা একটি দ্রুত বর্ধনশীল স্টার্টআপ যার মিশন প্রযুক্তির মাধ্যমে মানসম্পন্ন শিক্ষাকে গণতান্ত্রিক করা।",
      aboutDesc2: "আমরা শুধু ওয়েবসাইট তৈরি করছি না - আমরা ডিজিটাল ইকোসিস্টেম তৈরি করছি যা ছাত্র, শিক্ষক এবং অভিভাবকদের এমনভাবে সংযুক্ত করে যা আগে কখনো সম্ভব ছিল না। আমাদের চটপটে দল দ্রুত এগিয়ে যায়, বড় চিন্তা করে এবং স্থিতাবস্থাকে চ্যালেঞ্জ করতে ভয় পায় না।",
      
      // Team
      teamTitle: "উদ্ভাবনকারীদের সাথে পরিচিত হন",
      teamDesc: "তরুণ উদ্যোক্তা, টেক উৎসাহী এবং শিক্ষা বিপ্লবীদের একটি বৈচিত্র্যময় দল যারা বিশ্বাস করে প্রযুক্তি শিক্ষাকে রূপান্তরিত করতে পারে।",
      
      projectsCompleted: "রূপান্তরিত প্রতিষ্ঠান",
      yearsExperience: "বছর শিক্ষায় বিপ্লব",
      activeUsers: "সক্রিয় ব্যবহারকারী",
      growthRate: "মাসিক বৃদ্ধি",
      
      // Contact
      contactTitle: "উদ্ভাবনের জন্য প্রস্তুত?",
      contactDesc: "ডিজিটাল শিক্ষা বিপ্লবে যোগ দিন! একটি বিনামূল্যে কৌশল সেশন বুক করুন এবং আবিষ্কার করুন কীভাবে আমরা আপনার প্রতিষ্ঠানের প্রভাব ১০ গুণ বৃদ্ধি করতে পারি।",
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
      footerDesc: "একটি টেক স্টার্টআপ যার মিশন উদ্ভাবনী ডিজিটাল সমাধান এবং অত্যাধুনিক প্রযুক্তির মাধ্যমে বাংলাদেশে শিক্ষায় বিপ্লব আনা।",
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
      description: "AI-powered learning platform with 300% increased engagement",
      metrics: "300% ↗ Engagement"
    },
    {
      name: "TechEd College Chittagong",
      category: "Digital College",
      image: "https://images.pexels.com/photos/5212080/pexels-photo-5212080.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Revolutionary student portal with blockchain certificates",
      metrics: "500+ Students"
    },
    {
      name: "Little Innovators Sylhet",
      category: "Smart Kindergarten",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "AR-enabled learning with real-time parent updates",
      metrics: "95% Parent Satisfaction"
    },
    {
      name: "NextGen High Rajshahi",
      category: "Future School",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Gamified learning platform with AI tutoring integration",
      metrics: "40% Better Results"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rashida Rahman",
      position: "Principal, Dhaka Future Academy",
      content: "Nijer Web didn't just build us a website - they transformed how we connect with students and parents. Our engagement rates have tripled, and parents love the real-time updates!",
      rating: 5
    },
    {
      name: "Prof. Mohammad Hasan",
      position: "Director, TechEd College Chittagong",
      content: "Working with this startup was a game-changer. They move fast, think outside the box, and delivered features we didn't even know we needed. Our students are amazed!",
      rating: 5
    },
    {
      name: "Mrs. Fatima Begum",
      position: "Owner, Little Innovators Sylhet",
      content: "These young innovators understood our vision perfectly. The AR features have made learning so engaging for our kids, and parents can't stop talking about the app!",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Rafiq Rahman",
      position: "Co-Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former Google intern turned education revolutionary. Dropped out of BUET to build the future of learning. Passionate about AI and its potential to democratize education.",
      skills: ["AI/ML", "Product Strategy", "EdTech", "Leadership", "Vision"]
    },
    {
      name: "Fatima Ahmed",
      position: "Co-Founder & Chief Design Officer",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning designer who believes beautiful interfaces can make learning addictive. Former startup founder with a passion for creating delightful user experiences.",
      skills: ["Design Systems", "User Psychology", "Prototyping", "Brand Strategy", "Innovation"]
    },
    {
      name: "Sakib Hassan",
      position: "CTO & Tech Lead",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack wizard who codes like poetry. Built his first app at 16, now architecting scalable solutions that serve thousands of students across Bangladesh.",
      skills: ["React", "Node.js", "AI Integration", "Cloud Architecture", "DevOps"]
    },
    {
      name: "Nusrat Jahan",
      position: "Head of Growth",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Growth hacker extraordinaire who helped scale multiple startups. Expert in viral marketing and data-driven growth strategies for educational platforms.",
      skills: ["Growth Hacking", "Analytics", "Digital Marketing", "A/B Testing", "Viral Strategies"]
    },
    {
      name: "Arif Khan",
      position: "Education Innovation Lead",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former teacher turned EdTech innovator. Bridges the gap between traditional education and cutting-edge technology with deep understanding of local needs.",
      skills: ["Curriculum Design", "Teacher Training", "EdTech Research", "Change Management", "Innovation"]
    },
    {
      name: "Riya Sultana",
      position: "Head of Customer Success",
      image: "https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Customer obsessed leader who ensures every institution we work with becomes a success story. Expert in onboarding and scaling educational technology adoption.",
      skills: ["Customer Success", "Training", "Support", "Relationship Building", "Process Optimization"]
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
              🚀 <span className="ml-2">Backed by innovation • Trusted by 150+ institutions</span>
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
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">25%</p>
                <p className="text-gray-600 text-sm">{t.growthRate}</p>
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
                <p>WeWork Dhaka, Level 8</p>
                <p>Gulshan Avenue, Dhaka 1212</p>
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