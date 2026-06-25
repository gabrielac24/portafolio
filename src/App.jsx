import React, { useState, useEffect } from 'react';

// ================= COMPONENTE DE LOGOS =================
const TechIcon = ({ name }) => {
  const sizeClass = "w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg";

  const iconUrls = {
    "FLUTTER": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    "ANGULAR": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    "PYTHON": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "JAVASCRIPT": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "REACT NATIVE (EXPO)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "REACT.JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "NODE.JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "EXPRESS.JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "FIREBASE": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
    "SUPABASE": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "MYSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "ARDUINO": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    "GIT / GITHUB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "REDES": "https://cdn-icons-png.flaticon.com/512/2885/2885417.png", 
    "GEMINI AI": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg",
    "VS CODE": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "ANTIGRAVITY": "./antigravity.png",
    "NEXT.JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "RENDER": "https://cdn.simpleicons.org/render/white" 
  };

  return (
    <div className="hover:scale-110 transition-transform duration-300 flex items-center justify-center">
      {iconUrls[name] ? (
        <img src={iconUrls[name]} alt={name} className={sizeClass} />
      ) : (
        <span className="w-10 h-10 bg-rose-900/30 rounded-full flex items-center justify-center text-rose-400 font-bold border border-rose-500/30">?</span>
      )}
    </div>
  );
};

// ================= DATOS DE TU PERFIL =================
const proyectosData = [
  {
    id: 1,
    titulo: "Serena – App Móvil de Salud Mental",
    descripcion: "Aplicación móvil diseñada para la reducción y atención de crisis a través de la gestión y monitoreo constante de pacientes, creando un vínculo digital directo y seguro para el cuidado de la salud mental. Desarrollado para DuranIA DevCode Challenge",
    herramientas: ["Flutter", "APIs de IA", "Firestore"],
    imagenes: ["./serena3.jpg", "./serena1.jpg", "./serena2.png"]
  },
  {
    id: 2,
    titulo: "ARVA – Smart Agriculture IoT",
    descripcion: "Sistema IoT de agricultura inteligente orientado al monitoreo ambiental continuo y el procesamiento de datos. Optimiza la toma de decisiones mediante la lectura de sensores físicos y comunicación segura.",
    herramientas: ["React Native", "ESP32", "MQTT", "Firebase", "Render","APIs de IA"],
    imagenes: ["./arva1.png", "./arva2.png", "./arva3.png", "./arva4.png", "./arva5.jpeg"] 
  },
  {
    id: 3,
    titulo: "Chatbot con Azure",
    descripcion: "Asistente virtual inteligente construido bajo una arquitectura cliente-servidor. Diseñado para automatizar respuestas, manejar interacciones fluidas con los usuarios y resolver consultas mediante inteligencia artificial.",
    herramientas: ["Azure OpenAI", "Express.js", "Node.js"],
    imagenes: ["./azure.png"]
  },
  {
    id: 4,
    titulo: "Frigosense",
    descripcion: "Sistema web responsivo enfocado en el monitoreo en tiempo real y la visualización detallada de datos provenientes de sensores físicos, facilitando el control de entornos a través de una interfaz limpia.",
    herramientas: ["Angular", "Servicios Web", "Frontend"],
    imagenes: ["./frigo1.png", "./frigo2.png", "./frigo3.png"]
  },
  {
    id: 5,
    titulo: "Web Sockets",
    descripcion: "Plataforma de mensajería bidireccional de alto rendimiento que permite la comunicación en tiempo real bajo una arquitectura cliente-servidor, asegurando la entrega inmediata de datos y concurrencia de usuarios.",
    herramientas: ["Web Sockets", "Redes", "Cliente-Servidor"],
    imagenes: ["./sockets.png"]
  },
  {
    id: 6,
    titulo: "DuranGo AI – MLH Hackathon",
    descripcion: "Sistema inteligente de consumo local bajo una arquitectura AI-First. Utiliza un agente conversacional para generar rutas turísticas y gastronómicas personalizadas en tiempo real, e incluye un módulo de registro por voz para digitalizar comercios tradicionales.",
    herramientas: ["Next.js", "Supabase", "Gemini API", "CopilotKit", "APIs de IA", "Antigravity"],
    imagenes: ["./durango.png", "./durango2.png", "./durango3.png"] 
  }
];

const habilidadesData = [
  "FLUTTER", "ANGULAR", "PYTHON", "C++", "PHP", "JAVASCRIPT", "REACT NATIVE (EXPO)", "VS CODE", 
  "REACT.JS", "NODE.JS", "EXPRESS.JS", "FIREBASE", "SUPABASE", "ANTIGRAVITY", "NEXT.JS",
  "MYSQL", "HTML5", "ARDUINO", "GIT / GITHUB", "REDES", "GEMINI AI", "RENDER"
];

// AQUÍ SE AGREGARON LAS RUTAS DE LAS IMÁGENES
const cursosData = [
  { nombre: "Introducción a HTML", emisor: "Sololearn", imagen: "./html.jpg" }, 
  { nombre: "Introducción a CSS", emisor: "Sololearn", imagen: "./css.jpg" }, 
  { nombre: "Excel intermedio", emisor: "Santander", imagen: "./excel.png" }, 
  { nombre: "Artificial Intelligence Fundamentals", emisor: "IBM SkillsBuild", imagen: "./ia.png" } 
];

// ================= COMPONENTE DE TARJETA DE PROYECTO =================
const ProyectoCard = ({ proyecto }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);

  const anteriorImagen = () => setIndiceImagen((prev) => (prev === 0 ? proyecto.imagenes.length - 1 : prev - 1));
  const siguienteImagen = () => setIndiceImagen((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#14050A]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-all duration-500 flex flex-col group">
      <div className="relative overflow-hidden h-[250px] md:h-[300px] bg-black/50 border-b border-white/5 flex items-center justify-center p-4">
        <img 
          src={proyecto.imagenes[indiceImagen]} 
          alt={`${proyecto.titulo}`} 
          className="max-h-full max-w-full object-contain mx-auto transition-transform duration-700 group-hover:scale-105 rounded-lg"
        />
        {proyecto.imagenes.length > 1 && (
          <>
            <button onClick={anteriorImagen} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-rose-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={siguienteImagen} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-rose-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {proyecto.imagenes.map((_, index) => (
                <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === indiceImagen ? 'w-5 bg-rose-500 shadow-[0_0_8px_#e11d48]' : 'w-1.5 bg-white/30'}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">{proyecto.titulo}</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{proyecto.descripcion}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {proyecto.herramientas.map((herramienta, index) => (
            <span key={index} className="px-3 py-1 bg-rose-950/40 text-rose-300 text-xs font-semibold rounded-md border border-rose-900/50">
              {herramienta}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ================= COMPONENTE CERTIFICADO CON IMAGEN =================
const CertificadoCard = ({ curso }) => {
  return (
    <div className="bg-[#14050A]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] transition-all duration-500 flex flex-col group relative">
      
      {/* Contenedor de la Imagen */}
      <div className="relative overflow-hidden h-[220px] bg-black/50 border-b border-white/5 flex items-center justify-center p-3">
        <img 
          src={curso.imagen} 
          alt={`Certificado ${curso.nombre}`} 
          className="max-h-full max-w-full object-contain mx-auto transition-transform duration-700 group-hover:scale-105 rounded-lg drop-shadow-md"
        />
      </div>

      {/* Textos inferiores */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-1">{curso.emisor}</h4>
        <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors leading-tight">{curso.nombre}</h3>
      </div>
    </div>
  );
};

// ================= COMPONENTE PRINCIPAL =================
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); // Estado para las pestañas
  
  // Estado y texto para la máquina de escribir
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer | Integración de Hardware y Software | Aplicaciones Móviles e IoT";

  // Efecto para la barra de navegación al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para la animación de máquina de escribir
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Velocidad de escritura en ms
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Outfit:wght@300;400;600;800&display=swap');
          .font-hand { font-family: 'Caveat', cursive; }
          .font-sans { font-family: 'Outfit', sans-serif; }
          
          /* Animación de flotación suave */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          /* Animación para el cambio de pestañas */
          @keyframes fadeInTab {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-tab {
            animation: fadeInTab 0.5s ease-out forwards;
          }

          /* Fondo principal radial */
          body {
            background-color: #050204;
            background-image: 
              radial-gradient(circle at 15% 50%, rgba(136, 19, 55, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 85% 30%, rgba(225, 29, 72, 0.05) 0%, transparent 50%);
            color: #ffffff;
          }
        `}
      </style>

      <div className="min-h-screen font-sans selection:bg-rose-500/30 selection:text-rose-200 scroll-smooth">
        
        {/* --- NAVBAR --- */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0306]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              
            </span>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300">
              <a href="#inicio" className="hover:text-rose-400 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-rose-400 transition-colors">Sobre Mí</a>
            </div>
            <a href="./CV Gabriela De Casas Arroyo.pdf" target="_blank" rel="noopener noreferrer" className="border border-rose-600 text-rose-500 hover:bg-rose-600 hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(225,29,72,0.2)] hover:shadow-[0_0_25px_rgba(225,29,72,0.5)]">
              Descargar CV
            </a>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="inicio" className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-rose-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                Buscando residencias profesionales
              </div>
              
              <h2 className="text-gray-400 font-medium text-xl mb-2 tracking-wider">Hola, soy</h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
                Gabriela <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-700">De Casas</span>
              </h1>
              
              {/* Párrafo con efecto de máquina de escribir */}
              <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-lg min-h-[80px] md:min-h-[64px]">
                {typedText}<span className="animate-pulse text-rose-500">|</span>
              </p>
              
              {/* Botones de Redes Sociales */}
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/gabriela-de-casas-arroyo-613011412" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-105 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
               </a>
                <a href="https://github.com/gabrielac24" target="_blank" rel="noopener noreferrer" className="bg-[#1a0a13] border border-white/20 hover:border-white/40 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://instagram.com/gab.dc24" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(253,29,29,0.3)] flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </div>
            </div>

            <div className="relative flex justify-center animate-float hidden md:flex">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/30 to-purple-900/30 rounded-full blur-3xl"></div>
              <img 
                src="./perfil.jpeg" 
                alt="Gabriela" 
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[3rem] border-2 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rotate-3 z-10"
              />
              <div className="absolute -top-6 -right-6 bg-[#1a0a13] p-4 rounded-xl border border-rose-900/50 shadow-[0_0_15px_rgba(225,29,72,0.2)] z-20 flex items-center justify-center min-w-[72px] min-h-[72px]">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-700 font-sans tracking-tighter">
                  {'</>'}
                </span>
              </div>
              <div className="absolute -bottom-10 left-10 bg-[#1a0a13] p-4 rounded-xl border border-rose-900/50 shadow-[0_0_15px_rgba(225,29,72,0.2)] z-20">
                <TechIcon name="GEMINI AI" />
              </div>
            </div>
          </div>
        </section>

        {/* --- SOBRE MÍ --- */}
        <section id="sobre-mi" className="py-24 relative border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[1px] w-12 bg-rose-500"></div>
                <h2 className="text-rose-500 font-bold tracking-widest uppercase text-sm">Acerca de mí</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Conectando el mundo físico con la nube.
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Soy estudiante de Ingeniería en Informática. Construyo experiencias móviles, conecto el mundo físico con la nube y me gusta integrar funcionalidades de la IA en mis desarrollos, especializándome en la integración de hardware y software para crear soluciones con impacto.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Me considero una persona honesta, responsable y puntual. Tengo una gran capacidad de adaptabilidad ante nuevos retos y destaco por mi empatía y trabajo en equipo. Fuera del ámbito tecnológico, disfruto mucho escuchar música, observar la naturaleza y pasar tiempo con mi familia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f0409] border border-white/5 p-8 rounded-2xl text-center hover:border-rose-500/30 transition-colors">
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 mb-2">6+</h4>
                <p className="text-gray-500 text-sm font-semibold uppercase">Proyectos</p>
              </div>
              <div className="bg-[#0f0409] border border-white/5 p-8 rounded-2xl text-center hover:border-rose-500/30 transition-colors">
                <h4 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 mb-2">4</h4>
                <p className="text-gray-500 text-sm font-semibold uppercase">Cursos</p>
              </div>
              <div className="bg-[#0f0409] border border-white/5 p-8 rounded-2xl text-center hover:border-rose-500/30 transition-colors col-span-2">
                <h4 className="text-2xl font-bold text-white mb-2">Residencias</h4>
                <p className="text-gray-500 text-sm">Disponibilidad para cambio de residencia</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- PORTFOLIO SHOWCASE (CON PESTAÑAS) --- */}
        <section id="portafolio" className="py-24 relative bg-[#0a0306] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio Showcase</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Explora mi viaje a través de proyectos, certificaciones y experiencia técnica.</p>
            </div>
            
            {/* Controles de las Pestañas */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
              <button 
                onClick={() => setActiveTab('projects')} 
                className={`px-6 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${activeTab === 'projects' ? 'bg-[#1a0a13] border border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.2)]' : 'bg-[#0f0409] border border-white/5 text-gray-400 hover:text-white hover:border-white/20'}`}
              >
                <span className="text-xl"></span> Proyectos
              </button>
              <button 
                onClick={() => setActiveTab('certificates')} 
                className={`px-6 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${activeTab === 'certificates' ? 'bg-[#1a0a13] border border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.2)]' : 'bg-[#0f0409] border border-white/5 text-gray-400 hover:text-white hover:border-white/20'}`}
              >
                <span className="text-xl"></span> Cursos
              </button>
              <button 
                onClick={() => setActiveTab('techStack')} 
                className={`px-6 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${activeTab === 'techStack' ? 'bg-[#1a0a13] border border-rose-500/50 text-rose-400 shadow-[0_0_20px_rgba(225,29,72,0.2)]' : 'bg-[#0f0409] border border-white/5 text-gray-400 hover:text-white hover:border-white/20'}`}
              >
                <span className="text-xl"></span> Tech Stack
              </button>
            </div>

            {/* CONTENIDO DE LAS PESTAÑAS */}
            <div className="min-h-[500px]">
              
              {/* Pestaña: Proyectos */}
              {activeTab === 'projects' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-tab">
                  {proyectosData.map((proyecto) => (
                    <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                  ))}
                </div>
              )}

              {/* Pestaña: Certificados */}
              {activeTab === 'certificates' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-tab">
                  {cursosData.map((curso, index) => (
                    <CertificadoCard key={index} curso={curso} />
                  ))}
                </div>
              )}

              {/* Pestaña: Tech Stack */}
              {activeTab === 'techStack' && (
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-8 animate-fade-tab">
                  {habilidadesData.map((habNombre, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 w-[100px] md:w-[120px] group">
                      <div className="bg-[#17050e] w-full aspect-square rounded-2xl shadow-sm border border-white/5 flex items-center justify-center group-hover:bg-[#250817] group-hover:border-rose-500/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(225,29,72,0.15)] transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <TechIcon name={habNombre} />
                      </div>
                      <span className="font-sans font-semibold text-[10px] md:text-xs text-gray-500 text-center tracking-wider uppercase group-hover:text-rose-300 transition-colors">
                        {habNombre}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-8 text-center text-gray-500 text-sm bg-black">
          <p>© {new Date().getFullYear()} Gabriela De Casas. Creado con React y Tailwind CSS.</p>
        </footer>

      </div>
    </>
  );
}

export default App;