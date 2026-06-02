import React, { useState } from 'react';

// ================= COMPONENTE DE LOGOS =================
const TechIcon = ({ name }) => {
  const sizeClass = "w-10 h-10 md:w-14 md:h-14 object-contain";

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
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "MYSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "ARDUINO": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    "GIT / GITHUB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "REDES": "https://cdn-icons-png.flaticon.com/512/2885/2885417.png", 
    "IA (APIs y Modelos)": "./icono.png"
  };

  return (
    <div className="hover:scale-125 transition-transform duration-300 flex items-center justify-center">
      {iconUrls[name] ? (
        <img src={iconUrls[name]} alt={name} className={sizeClass} />
      ) : (
        <span className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-400 font-bold">?</span>
      )}
    </div>
  );
};

// ================= DATOS DE TU PERFIL =================
const proyectosData = [
  {
    id: 1,
    titulo: "Serena – App Móvil de Salud Mental",
    descripcion: "Aplicación móvil diseñada para la reducción y atención de crisis a través de la gestión y monitoreo constante de pacientes, creando un vínculo digital directo y seguro para el cuidado de la salud mental.",
    herramientas: ["Flutter", "APIs de IA", "Firestore"],
    imagenes: ["./serena3.jpg", "./serena1.jpg", "./serena2.png"]
  },
  {
    id: 2,
    titulo: "ARVA – Smart Agriculture IoT",
    descripcion: "Sistema IoT de agricultura inteligente orientado al monitoreo ambiental continuo y el procesamiento de datos. Optimiza la toma de decisiones mediante la lectura de sensores físicos y comunicación segura.",
    herramientas: ["React Native", "ESP32", "MQTT", "APIs de IA"],
    imagenes: ["./arva1.png", "./arva2.png", "./arva3.png", "./arva4.png"] 
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
  }
];

const habilidadesData = [
  "FLUTTER", "ANGULAR", "PYTHON", "C++", "PHP", "JAVASCRIPT", "REACT NATIVE (EXPO)", 
  "REACT.JS", "NODE.JS", "EXPRESS.JS", "FIREBASE", 
  "MYSQL", "HTML5", "ARDUINO", "GIT / GITHUB", "REDES", "IA (APIs y Modelos)" 
];

// Estructura de cursos orientada a "Insignias/Badges" (CORREGIDO IBM)
const cursosData = [
  { nombre: "Introducción a HTML", emisor: "Sololearn", tipo: "shield", colorHex: "#8b5cf6" }, // Violeta
  { nombre: "Introducción a CSS", emisor: "Sololearn", tipo: "shield", colorHex: "#6366f1" }, // Indigo
  { nombre: "Excel intermedio", emisor: "Santander", tipo: "hexagon", colorHex: "#e11d48" }, // Rojo
  { nombre: "Introd. a la Inteligencia Artificial", emisor: "IBM SkillsBuild", tipo: "hexagon", colorHex: "#0f62fe" } // Azul IBM
];

// ================= COMPONENTE DE TARJETA DE PROYECTO =================
const ProyectoCard = ({ proyecto }) => {
  const [indiceImagen, setIndiceImagen] = useState(0);

  const anteriorImagen = () => setIndiceImagen((prev) => (prev === 0 ? proyecto.imagenes.length - 1 : prev - 1));
  const siguienteImagen = () => setIndiceImagen((prev) => (prev === proyecto.imagenes.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-white border border-violet-100 rounded-[2rem] overflow-hidden hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/40 transition-all duration-300 flex flex-col group relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-violet-200/80 rotate-[-2deg] z-20 backdrop-blur-sm shadow-sm"></div>

      <div className="relative overflow-hidden h-[400px] bg-violet-50/30 border-b border-violet-50 flex items-center justify-center p-4">
        <img 
          src={proyecto.imagenes[indiceImagen]} 
          alt={`${proyecto.titulo}`} 
          className="max-h-full max-w-full object-contain mx-auto transition-transform duration-500 rounded-xl"
        />
        {proyecto.imagenes.length > 1 && (
          <>
            <button onClick={anteriorImagen} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-violet-100 text-violet-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-sm backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={siguienteImagen} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-violet-100 text-violet-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-sm backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {proyecto.imagenes.map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${index === indiceImagen ? 'w-6 bg-violet-400' : 'w-2 bg-violet-200'}`} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow bg-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 font-sans">{proyecto.titulo}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed flex-grow text-sm md:text-base font-sans">{proyecto.descripcion}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {proyecto.herramientas.map((herramienta, index) => (
            <span key={index} className="px-4 py-1 bg-violet-50 text-violet-600 text-xs font-bold rounded-full border border-violet-100">
              {herramienta}
            </span>
          ))}
        </div>
        <div className="flex mt-auto">
          
        </div>
      </div>
    </div>
  );
};

// ================= COMPONENTE PRINCIPAL =================
function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
          .font-hand { font-family: 'Caveat', cursive; }
          .font-sans { font-family: 'Nunito', sans-serif; }
          
          /* Textura de papel para el fondo del cuaderno */
          .bg-paper {
            background-color: #f5f5dc;
            background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');
          }

          /* CSS para las líneas del cuaderno (Hoja derecha) */
          .bg-lined-paper {
            background-image: repeating-linear-gradient(transparent, transparent 31px, #cbd5e1 31px, #cbd5e1 32px);
            background-position-y: 2.5rem;
          }
        `}
      </style>

      {/* Fondo blanco hueso liso general */}
      <div className="min-h-screen bg-[#FCFBF8] text-gray-800 font-sans selection:bg-violet-200 scroll-smooth overflow-hidden">
        
        {/* --- HERO SECTION Y CUADERNO REALISTA --- */}
        <section className="flex flex-col items-center justify-center relative pt-20 pb-12 px-6">
          <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center z-10">
            
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-200 text-sm font-bold text-violet-500 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
              </span>
              Buscando residencias profesionales
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900">
              Hola, soy <span className="text-violet-600">Gabriela De Casas</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-500 font-bold mb-10 tracking-wide">
              Desarrolladora Móvil & Sistemas Integrados
            </h2>
            
            {/* BOTONES (Orden: Proyectos, Habilidades Técnicas, Cursos, CV) */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              
              <a href="#herramientas" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-violet-200">
                Habilidades Técnicas
              </a>
              
              <a href="#cursos" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-violet-200">
                Cursos
              </a>
              <a href="#proyectos" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-violet-200">
                Proyectos
              </a>
              <a href="./cv.pdf" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-violet-200" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>

            {/* ================= EL CUADERNO REALISTA ================= */}
            <div className="relative w-full max-w-5xl mx-auto my-8">
              
              {/* Sombra y cubierta trasera del cuaderno para dar efecto 3D */}
              <div className="absolute inset-0 bg-[#d6cdc4] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] translate-y-3 translate-x-2"></div>

              {/* Contenedor principal de las hojas */}
              <div className="relative flex flex-col md:flex-row bg-paper rounded-xl overflow-hidden border border-[#e5dcd3] z-10 min-h-[480px]">
                
                {/* Sombra del doblez central (Lomo interior) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.08)] to-transparent z-10"></div>

                {/* === PÁGINA IZQUIERDA (Polaroid) === */}
                <div className="w-full md:w-1/2 p-8 md:p-16 relative flex items-center justify-center border-b md:border-b-0 border-gray-300 md:border-r border-dashed">
                  
                  {/* Contenedor tipo Polaroid */}
                  <div className="bg-[#f4efe8] p-4 pb-14 rounded-sm shadow-xl transform rotate-[-3deg] relative max-w-[280px] w-full border border-[#e2d8cd]">
                    
                    {/* Cinta adhesiva lila */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 bg-violet-200/70 rotate-[3deg] z-20 backdrop-blur-sm shadow-sm"></div>
                    
                    {/* Timbre postal decorativo */}
                    <div className="absolute -top-5 -left-5 w-14 h-16 bg-[#fae8d4] border-[3px] border-dashed border-[#d18e54] rotate-[-15deg] shadow-md flex flex-col items-center justify-center">
                      <span className="text-[10px] font-bold text-[#b66c2d] tracking-widest font-sans border-b border-[#b66c2d]">MEX</span>
                      <svg className="w-6 h-6 text-[#b66c2d] mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    </div>

                    {/* Estrellitas discretas */}
                    <svg className="absolute top-6 left-2 w-4 h-4 text-yellow-500/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                    <svg className="absolute bottom-20 right-4 w-5 h-5 text-yellow-500/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>

                    {/* Foto real */}
                    <img 
                      src="./perfil.jpeg" 
                      alt="Gabriela De Casas" 
                      className="w-full h-auto aspect-[4/5] object-cover border border-gray-300 shadow-inner filter contrast-105"
                    />
                  </div>
                </div>

                {/* === LOS ANILLOS METÁLICOS (El Espiral) === */}
                <div className="hidden md:flex absolute left-1/2 top-8 bottom-8 -translate-x-1/2 flex-col justify-evenly z-30 w-12 pointer-events-none">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between w-full h-3 relative">
                      {/* Agujero izquierdo */}
                      <div className="w-3 h-3 rounded-full bg-[#2a2a2a] shadow-inner z-10"></div>
                      {/* Metal del anillo cruzando */}
                      <div className="absolute left-1 right-1 h-2 bg-gradient-to-b from-[#f3f4f6] via-[#9ca3af] to-[#4b5563] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.4)] z-20"></div>
                      {/* Agujero derecho */}
                      <div className="w-3 h-3 rounded-full bg-[#2a2a2a] shadow-inner z-10"></div>
                    </div>
                  ))}
                </div>

                {/* === PÁGINA DERECHA (Texto escrito a mano) === */}
                <div className="w-full md:w-1/2 relative p-8 md:p-12 md:pl-16">
                  
                  {/* Capa de renglones grises */}
                  <div className="absolute inset-0 bg-lined-paper opacity-50 pointer-events-none"></div>
                  
                  {/* Línea vertical roja del margen */}
                  <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1.5px] bg-red-400/40 pointer-events-none"></div>
                  
                  {/* Texto manuscrito */}
                  <div className="relative z-20 font-hand text-[1.4rem] md:text-[1.65rem] text-[#3f3f3f] leading-[32px] text-left mt-2">
                    <h3 className="text-4xl text-violet-600 mb-2 font-bold font-hand">hi!</h3>
                    
                    <p className="mb-2">
                      Soy estudiante de Ingeniería en Informática. Construyo experiencias móviles, conecto el mundo físico con la nube y me gusta integrar funcionalidades de la IA en mis desarrollos, especializándome en la integración de hardware y software para crear soluciones con impacto.
                    </p>
                    <p className="mb-2">
                      Me considero una persona <strong>honesta, responsable y puntual</strong>. Tengo una gran <strong>capacidad de adaptabilidad</strong> ante nuevos retos y destaco por mi <strong>empatía y trabajo en equipo</strong>.
                    </p>
                    <p>
                      Fuera del ámbito tecnológico, disfruto mucho escuchar música, observar la naturaleza, hacer ejercicio, pasar tiempo con mis amigos y familia.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            {/* ================= FIN DEL CUADERNO ================= */}

          </div>
        </section>

        {/* --- SECCIÓN DE HERRAMIENTAS TÉCNICAS (Stickers) --- */}
        <section id="herramientas" className="py-24 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-hand font-bold text-center mb-16 text-gray-800">
            Habilidades Técnicas
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10">
            {habilidadesData.map((habNombre, index) => {
              const rotaciones = ["rotate-[-3deg]", "rotate-[4deg]", "rotate-[-5deg]", "rotate-[2deg]", "rotate-[-2deg]", "rotate-[5deg]"];
              const rotacion = rotaciones[index % rotaciones.length];
              
              return (
                <div key={index} className={`flex flex-col items-center gap-2 transform ${rotacion} hover:scale-110 transition-transform duration-300 cursor-default`}>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-violet-100 flex items-center justify-center">
                    <TechIcon name={habNombre} />
                  </div>
                  <span className="font-sans font-bold text-xs text-gray-500 tracking-wider uppercase">{habNombre}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* --- SECCIÓN DE CURSOS (Estilo Badges / Insignias) --- */}
        <section id="cursos" className="py-24 max-w-5xl mx-auto px-6 bg-violet-50/40 border-y border-violet-100">
          <h2 className="text-4xl md:text-5xl font-hand font-bold text-center mb-16 text-gray-800">
            Cursos y Certificaciones
          </h2>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
            {cursosData.map((curso, index) => (
              <div key={index} className="flex flex-col items-center text-center w-40 group">
                
                {/* SVG Badge Dinámico */}
                <div className="w-24 h-24 mb-4 relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  
                  {/* Forma de Escudo (Shield) */}
                  {curso.tipo === 'shield' && (
                    <svg viewBox="0 0 100 110" className="absolute inset-0 w-full h-full drop-shadow-md" style={{ color: curso.colorHex }}>
                      <path d="M50 0 L100 20 L100 60 L50 110 L0 60 L0 20 Z" fill="currentColor" opacity="0.15"/>
                      <path d="M50 6 L94 24 L94 58 L50 102 L6 58 L6 24 Z" fill="currentColor" stroke="white" strokeWidth="2"/>
                    </svg>
                  )}
                  
                  {/* Forma de Hexágono (Hexagon) */}
                  {curso.tipo === 'hexagon' && (
                    <svg viewBox="0 0 100 110" className="absolute inset-0 w-full h-full drop-shadow-md" style={{ color: curso.colorHex }}>
                      <polygon points="50 0, 100 25, 100 85, 50 110, 0 85, 0 25" fill="currentColor" opacity="0.15"/>
                      <polygon points="50 6, 94 28, 94 82, 50 104, 6 82, 6 28" fill="currentColor" stroke="white" strokeWidth="2"/>
                    </svg>
                  )}

                  {/* Contenido dentro de la insignia */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-white px-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest opacity-90">{curso.emisor}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mt-1 opacity-90" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                </div>

                <span className="font-bold text-gray-800 text-sm leading-tight">{curso.nombre}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN DE PROYECTOS --- */}
        <section id="proyectos" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-hand font-bold text-center mb-16 text-gray-800">
              Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {proyectosData.map((proyecto) => (
                <ProyectoCard key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;