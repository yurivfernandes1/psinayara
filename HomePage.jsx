import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = {
    profile: {
        image: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/experiencias.jpeg",
        name: "Nayara Freitas",
        title: "Psicóloga - CRP 04/56386",
        subtitle: "Terapia Cognitivo-Comportamental",
        about: {
            text: [
                "Sou Nayara Freitas, psicóloga dedicada a ajudar pessoas a construírem relações mais saudáveis consigo mesmas e com os outros. Com uma abordagem baseada na Terapia Cognitivo-Comportamental, ofereço um espaço seguro e acolhedor para seu desenvolvimento pessoal.",
                "Realizo atendimentos tanto presencialmente em Contagem quanto on-line, sempre priorizando um acompanhamento humanizado e personalizado. Acredito que cada pessoa é única e merece uma escuta atenta e cuidadosa para suas questões.",
                "Meu trabalho é focado em auxiliar você a desenvolver habilidades e estratégias para lidar com seus desafios emocionais e relacionais, promovendo autoconhecimento e bem-estar mental."
            ],
            image: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/experiencias.jpeg"
        }
    },
    links: [
        {
            title: "WhatsApp",
            url: "https://wa.me/5531998471298?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/nayarafpsi/",
            icon: "fab fa-instagram"
        },
    ]
};

const HomePage = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        // Configurar elementos da seção "Sobre Mim" para começarem invisíveis
        gsap.set('#sobre .about-text p', { opacity: 0, y: 30 });
        gsap.set('#sobre .about-photo', { opacity: 0, x: 50 });

        // Animação para a seção hero
        gsap.from('.hero img', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
        });

        gsap.from('.hero h1, .hero p', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
        });

        gsap.from('.hero .social-links a', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 1.2, // Garantir que os ícones apareçam após o texto
        });

        // Animação para a seção sobre
        ScrollTrigger.create({
            trigger: '#sobre',
            start: 'top center+=100',
            onEnter: () => {
                gsap.to('#sobre .about-text p', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                });

                gsap.to('#sobre .about-photo', {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            },
            once: true
        });
    }, []);

    return (
        <div>
            <nav style={{ width: '100%' }}>
                <div className="nav-content">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                    <div className="header-social" id="header-social">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
            <section id="home">
                <div className="hero">
                    <img id="profile-image" src={data.profile.image} alt={data.profile.name} />
                    <h1 id="profile-name">{data.profile.name}</h1>
                    <p id="profile-title">{data.profile.title}</p>
                    <p id="profile-subtitle">{data.profile.subtitle}</p>
                    <div className="social-links">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section id="sobre" ref={aboutRef}>
                <h2>Sobre Mim</h2>
                <div className="about-content">
                    <div className="about-text" id="about-text">
                        {data.profile.about.text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="about-photo">
                        <img 
                            id="about-image" 
                            src={data.profile.about.image} 
                            alt={data.profile.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-content">
                    <p>© 2025 Nayara Freitas</p>
                    <div className="footer-social" id="footer-social">
                        {data.links.map(link => (
                            <a 
                                key={link.title} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={link.title}
                                style={{ color: 'black' }}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                    <div className="developer-info">
                        <p>Desenvolvido por Yuri Fernandes</p>
                        <a 
                            href="https://wa.me/5531987798823?text=Olá,%20quero%20fazer%20meu%20site" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="WhatsApp do Desenvolvedor"
                            style={{ color: 'black' }}
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
