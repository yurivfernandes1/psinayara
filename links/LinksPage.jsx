import React, { useEffect } from 'react';
import gsap from 'gsap';
import './style.css';

const data = {
    profile: {
        image: "/fotos/perfil.jpeg",
        fallbackImage: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/experiencias.jpeg",
        name: "Nayara Freitas",
        title: "Terapia Cognitivo-Comportamental",
        tagline: "Te ajudo a ter relações saudáveis contigo e com os outros",
        crp: "CRP 04/56386"
    },
    links: [
        {
            title: "Agendar Consulta",
            url: "https://wa.me/5531998471298?text=Olá%2C%20gostaria%20de%20agendar%20a%20minha%20consulta.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Grupo de Supervisão - Lista de Espera",
            url: "https://wa.me/5531998471298?text=Olá%2C%20gostaria%20de%20entrar%20na%20lista%20de%20espera%20do%20grupo%20de%20supervisão.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/nayarafpsi/",
            icon: "fab fa-instagram"
        },
        {
            title: "Meu Site",
            url: "https://psinayara.com.br",
            icon: "fas fa-globe"
        }
    ]
};

const LinksPage = () => {
    useEffect(() => {
        // Ativa classe isolada no body e html somente enquanto estiver na página de links
        document.body.classList.add('links-page-active');
        document.documentElement.classList.add('links-page-active');

        // Configuração de animações com GSAP
        gsap.set('.links-content-container', { opacity: 0 });
        gsap.set('.photo-wrapper', { opacity: 0, scale: 1.05 });
        gsap.set('.profile-name, .profile-subtitle, .profile-badge', { opacity: 0, y: 20 });
        gsap.set('.link-pill', { opacity: 0, y: 25 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to('.links-content-container', {
            opacity: 1,
            duration: 0.3
        })
            .to('.photo-wrapper', {
                opacity: 1,
                scale: 1,
                duration: 0.8
            }, '-=0.2')
            .to('.profile-name, .profile-subtitle, .profile-badge', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1
            }, '-=0.4')
            .to('.link-pill', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1
            }, '-=0.3');

        return () => {
            // Remove a classe ao sair, garantindo que o restante do site permaneça 100% inalterado
            document.body.classList.remove('links-page-active');
            document.documentElement.classList.remove('links-page-active');
        };
    }, []);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Nayara Freitas - Psicóloga de Relacionamentos',
                text: 'Conheça o trabalho de Nayara Freitas, Psicóloga de Relacionamentos (TCC)',
                url: window.location.href
            }).catch(() => { });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copiado para a área de transferência!');
            }).catch(() => { });
        }
    };

    return (
        <div className="links-page-wrapper">
            <div className="links-content-container">
                <button className="share-btn" aria-label="Compartilhar" onClick={handleShare}>
                    <i className="fas fa-arrow-up-from-bracket"></i>
                </button>

                <div className="profile-hero">
                    <div className="photo-wrapper">
                        <img
                            id="profile-img"
                            src={data.profile.image}
                            onError={(e) => {
                                if (!e.currentTarget.dataset.retry) {
                                    e.currentTarget.dataset.retry = '1';
                                    e.currentTarget.src = '/fotos/experiencias.jpeg';
                                } else if (e.currentTarget.dataset.retry === '1') {
                                    e.currentTarget.dataset.retry = '2';
                                    e.currentTarget.src = data.profile.fallbackImage;
                                }
                            }}
                            alt={data.profile.name}
                        />
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="profile-info">
                        <h1 className="profile-name">{data.profile.name}</h1>
                        <p className="profile-subtitle">{data.profile.title}</p>
                        <p className="profile-tagline">{data.profile.tagline}</p>
                        <div className="profile-badge">
                            <span>{data.profile.crp}</span>
                        </div>
                    </div>
                </div>

                <div className="links-list">
                    {data.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="link-pill"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="link-icon">
                                <i className={link.icon}></i>
                            </span>
                            <span className="link-title">{link.title}</span>
                            <span className="link-dots">
                                <i className="fas fa-ellipsis-vertical"></i>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LinksPage;
