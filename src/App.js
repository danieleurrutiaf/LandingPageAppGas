import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Banner from './components/Banner';
import Features from './components/Features';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';



import './components/App.scss';

// Importa las imágenes desde la carpeta assets
import image1 from './assets/images/Login.png'; // Primera imagen
import image2 from './assets/images/Perfil.png';  // Segunda imagen
import image3 from './assets/images/Pedido.png';  // Tercera imagen
import image4 from './assets/images/Boleta.png';  // Cuarta imagen

function App() {
  const images = [image1, image2, image3, image4]; // Arreglo de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para la imagen actual

  // Títulos y textos que acompañan las imágenes
  const sectionContent = [
    {
      title: "Unete en pocos segundos",
      text: [
        "•   Crea una cuenta en pocos segundos.",
      ]
    },
    {
      title: "Ve tu perfil ",
      text: [
        "•   Gestiona tu perfil",
      ]
    },
    {
      title: "Compra nuestros galónes",
      text: [
        "•  Tu galón a tus puertas.",
      ]
    },
    {
      title: "Ve todo en tiempo real",
      text: [
        "•   Ve tus productos en tiempo real",
      ]
    }
  ];

  // Cambia la imagen y el contenido cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [images.length]);

  // Obtener el contenido (título y texto) de la imagen actual
  const currentContent = sectionContent[currentImageIndex];

  const sectionsData = [
    {
      image: images[currentImageIndex], // La imagen actual que cambia
      gradientClass: 'gradient1',
      reverse: false,
      title: currentContent.title, // Título de la imagen actual
      text: currentContent.text, // Texto de la imagen actual
    },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          image={section.image} // Pasa la imagen que cambia
          codeSnippet={section.codeSnippet}
          gradientClass={section.gradientClass}
          reverse={section.reverse}
          title={section.title} // Título dinámico
          text={section.text} // Texto dinámico
        />
      ))}
      <Banner />
      <Features />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
