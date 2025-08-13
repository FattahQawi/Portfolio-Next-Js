"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>Muhammad Fattah Qawi Javier | Web Developer</title>
        <meta name="description" content="Portfolio of Muhammad Fattah Qawi Javier, a Frontend Developer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900 shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">Fattah</a>
          
          <button 
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          
          <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className={`block capitalize px-4 py-2 rounded-md transition-colors ${activeSection === item ? 'text-blue-400 font-medium' : 'text-white hover:text-blue-300'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Home */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-20">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Fattah Qawi Javier</h1>
            <div className="text-2xl md:text-3xl mb-6">
              <span className="mr-2">And I'm a</span>
              <span className="text-blue-400 font-bold animate-pulse">Web Developer</span>
            </div>
            <h3 className="text-xl mb-6 text-blue-300">Frontend Developer</h3>
            <p className="text-gray-300 mb-8 max-w-lg">
              Saya siswa tingkat akhir di SMK Taruna Bhakti dengan jurusan RPL. Saya sangat tertarik di bidang Web Development dan UI/UX Design. dan saya terus mengeksplorasi tren desain dan teknologi terbaru untuk meningkatkan kemampuan dan kontribusi saya di dunia teknologi.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-md transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                My Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
              <img 
                src="/fattah.png" 
                alt="Foto Fattah" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-400 opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
              {/* About */}
      <section id="about" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ABOUT <span className="text-blue-600">ME</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  Saya siswa tingkat akhir di SMK Taruna Bhakti dengan jurusan RPL (Rekayasa Perangkat Lunak). 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Saya memiliki kemampuan adaptasi yang baik, bertanggung jawab, dan mampu bekerja sama dalam tim. 
                  Passion saya adalah menciptakan solusi digital yang menarik dan fungsional.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-600">Nama:</h3>
                    <p>Muhammad Fattah Qawi Javier</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-600">Email:</h3>
                    <p>fattahqawi2322@gmail.com</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-600">Pendidikan:</h3>
                    <p>SMK Taruna Bhakti</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-600">Jurusan:</h3>
                    <p>Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">My Journey</h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-px h-full bg-gray-300"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold mb-2">SMK Taruna Bhakti</h4>
                    <p className="text-gray-600 mb-2">2021 - Sekarang</p>
                    <p className="text-gray-700">
                      Memulai pendidikan di bidang Rekayasa Perangkat Lunak, mempelajari dasar-dasar pemrograman dan pengembangan web.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-px h-full bg-gray-300"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold mb-2">Belajar</h4>
                    <p className="text-gray-600 mb-2">2022 - Sekarang</p>
                    <p className="text-gray-700">
                      Mengembangkan, dan Memulai untuk Mencari Tahu Atau Mempelajari HTML, CSS, JavaScript.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Bahasa Yang ini dikuasai</h4>
                    <p className="text-gray-600 mb-2">2025+</p>
                    <p className="text-gray-700">
                      Next Js, Laravel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            MY <span className="text-blue-600">PROJECTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Upload Project */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/Sifosarpras.png" 
                  alt="Sisfo Sarpras" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Sisfo Sarpras</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Laravel</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Sistem Informasi Sarana & Prasarana                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Laravel</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Laragon</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >                  
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                </div>
              </div>
            </div>

            {/* Gallery Management */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/Portfolio.png" 
                  alt="Portfolio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Portfolio</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Website Portofolio responsif yang dibuatuntuk menampilkan profil, karya, dan keahlian. Website ini dibuat menggunakan HTML,CSS, dan Javascript                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">HTML</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">CSS</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">JavaScript</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/WebBerita.png" 
                  alt="Portfolio Berita" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">WebBerita</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sebuah situs berita online yang memberi kebebasan bagi pengguna untuk membuat, mengedit, dan menghapus berita mereka sendiri. Website ini dibuat dengan HTML dan CSS sebagai fondasinya.                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">HTML</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">CSS</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Want to see more projects? Contact me!
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            CONTACT <span className="text-blue-400">ME</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-gray-300">Depok, Jawa Barat, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-300">fattahqawi2322@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded-full mr-4">
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-300">+62 877 2911 1603</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-bold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: "fab fa-github", url: "https://github.com/FattahQawi" },
                      { icon: "fab fa-instagram", url: "https://www.instagram.com/fattah4578/" },
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href={social.url} 
                        className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`${social.icon} text-white`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  WhatsApp(); 
                }}
                className="bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Mobile Number</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input 
                      id="subject" 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                      placeholder="Email Subject"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Muhammad Fattah Qawi Javier. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#home" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function WhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const walink =
    "https://wa.me/6287729111603?text=" +
    encodeURIComponent(
      `*New Contact Message*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}`
    );

  window.open(walink, '_blank').focus();
}