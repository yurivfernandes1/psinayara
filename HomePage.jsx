import React, { useEffect, useState, useRef } from 'react';

const data = {
    profile: {
        name: "Nayara Freitas",
        title: "Psicóloga • CRP 04/56386",
        subtitle: "Terapia Cognitivo-Comportamental (TCC)",
        tagline: "Te ajudo a ter relações saudáveis contigo e com os outros",
        image: "/fotos/perfil.jpeg",
        fallbackImage: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/perfil.jpeg",
        whatsappUrl: "https://wa.me/5531998471298?text=Olá%20Nayara%2C%20gostaria%20de%20agendar%20uma%20sessão%20on-line."
    },
    about: {
        title: "Sobre Mim",
        image: "/fotos/Apoiada.jpeg",
        fallbackImage: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/Apoiada.jpeg",
        paragraphs: [
            "Olá, seja bem-vindo(a)!",
            "Sou Nayara Freitas, psicóloga, e meu propósito é ajudar homens e mulheres a desenvolverem uma relação mais saudável consigo mesmas e com as pessoas ao seu redor.",
            "Meu trabalho é especialmente voltado para homens e mulheres que enfrentam desafios relacionados à autoestima, ansiedade, insegurança emocional e dificuldades nos relacionamentos.",
            "Acredito que o autoconhecimento é um caminho importante para construir relações mais equilibradas, fortalecer a autoconfiança e aprender a reconhecer suas próprias necessidades e limites."
        ]
    },
    approach: {
        title: "Minha abordagem terapêutica",
        image: "/fotos/pensativa.jpeg",
        fallbackImage: "https://raw.githubusercontent.com/yurivfernandes1/psinayara/refs/heads/main/public/fotos/pensativa.jpeg",
        paragraphs: [
            "Atuo por meio da Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas que busca compreender a relação entre pensamentos, emoções e comportamentos.",
            "Durante o processo terapêutico, meu objetivo é ajudar você a identificar padrões que geram sofrimento emocional, desenvolver novas formas de lidar com suas dificuldades e construir uma relação mais segura e acolhedora consigo mesma."
        ],
        subheading: "Como posso te ajudar?"
    },
    highlights: [
        {
            icon: "fas fa-heart",
            title: "Autoestima e autoconfiança",
            description: "Fortalecer sua percepção de valor pessoal e desenvolver uma relação mais positiva consigo mesma."
        },
        {
            icon: "fas fa-people-arrows",
            title: "Relacionamentos afetivos",
            description: "Compreender padrões emocionais, inseguranças e dificuldades que interferem na construção de relações saudáveis."
        },
        {
            icon: "fas fa-brain",
            title: "Ansiedade e dependência emocional",
            description: "Aprender a lidar com preocupações excessivas, medo de abandono e necessidade constante de aprovação."
        },
        {
            icon: "fas fa-compass",
            title: "Autoconhecimento e limites",
            description: "Reconhecer suas necessidades, aprender a se posicionar e desenvolver maior autonomia emocional."
        }
    ],
    onlineService: {
        title: "Atendimento psicológico on-line",
        paragraphs: [
            "Realizo atendimentos psicológicos on-line para mulheres que vivem no Brasil e em outros países, oferecendo um espaço de escuta, acolhimento e desenvolvimento emocional, independentemente de onde você esteja.",
            "A terapia é um convite para olhar para si mesma com mais compreensão, fortalecer sua autoestima e construir relações mais saudáveis."
        ],
        highlightQuote: "Você não precisa enfrentar suas dificuldades emocionais sozinha.",
        closing: "Será um prazer acompanhar você nesse processo de autoconhecimento e transformação."
    },
    faq: [
        {
            q: "Como a Terapia Cognitivo-Comportamental (TCC) pode me ajudar?",
            a: "A TCC é uma abordagem estruturada, colaborativa e baseada em evidências científicas. Nela, compreendemos como seus pensamentos influenciam diretamente suas emoções e comportamentos. Trabalhamos para identificar padrões cognitivos que causam sofrimento e construir estratégias práticas para lidar com os desafios do dia a dia."
        },
        {
            q: "Como a terapia ajuda a controlar e aliviar a ansiedade?",
            a: "A ansiedade frequentemente se apoia em pensamentos catastróficos e na sensação constante de perigo ou falta de controle. Na terapia, você aprenderá técnicas comprovadas de regulação emocional, manejo do estresse e reestruturação de pensamentos, retomando a tranquilidade e a segurança no seu dia a dia."
        },
        {
            q: "Por que costumo repetir os mesmos padrões nos relacionamentos amorosos?",
            a: "Geralmente, nossos padrões relacionais são moldados por experiências anteriores, medos e crenças sobre afeto e merecimento. Na terapia, investigamos essas raízes emocionais para que você compreenda suas escolhas, rompa ciclos desgastantes e aprenda a construir laços baseados em reciprocidade e respeito."
        },
        {
            q: "Como identificar se estou vivendo uma dependência emocional?",
            a: "A dependência emocional se manifesta pela necessidade constante de validação, medo excessivo do abandono, dificuldade de tomar decisões sozinha e a tendência a anular seus próprios desejos em função do outro. O processo terapêutico ajuda você a resgatar sua autonomia e seu senso de valor pessoal."
        },
        {
            q: "O que é necessário para construir relações mais saudáveis?",
            a: "Uma relação saudável começa pelo autoconhecimento: saber quem você é, do que precisa e quais são seus limites. Além disso, exige diálogo aberto, escuta mútua, respeito às individualidades e maturidade na resolução de conflitos. A terapia é o espaço ideal para desenvolver essas competências."
        },
        {
            q: "Tenho muita dificuldade para impor limites e dizer 'não'. A terapia pode ajudar?",
            a: "Com certeza. O receio de desagradar ou de ser rejeitada muitas vezes faz com que você diga 'sim' para os outros e 'não' para si mesma. Trabalharemos sua assertividade para que você aprenda a se posicionar com segurança e firmeza, compreendendo que estabelecer limites é um ato essencial de preservação e amor-próprio."
        },
        {
            q: "Como o processo terapêutico fortalece a autoestima e a autoconfiança?",
            a: "A baixa autoestima é alimentada por uma crítica interna severa e crenças de desvalor. Na TCC, questionamos essas distorções e estimulamos uma relação interna mais gentil, acolhedora e realista, permitindo que você enxergue seu verdadeiro potencial e confie nas suas capacidades."
        },
        {
            q: "O atendimento on-line é seguro e tem a mesma eficácia do presencial?",
            a: "Sim! O atendimento on-line é regulamentado pelo Conselho Federal de Psicologia (CFP) e diversos estudos científicos comprovam que sua eficácia é idêntica à do formato presencial. As sessões ocorrem por videochamada em plataformas seguras e com sigilo profissional rigoroso, no conforto da sua casa."
        },
        {
            q: "Moro fora do Brasil. Posso fazer terapia on-line com você?",
            a: "Sim, atendo com frequência brasileiras que residem em outros países. Poder se expressar no seu idioma nativo e com alguém que compreende suas referências culturais traz um conforto imenso, especialmente nos desafios comuns de adaptação, solidão e reconstrução de vida no exterior."
        },
        {
            q: "Qual é a frequência e a duração das sessões de terapia?",
            a: "As sessões têm duração de 50 minutos e ocorrem de forma semanal. A regularidade semanal no início do processo é indispensável para construir o vínculo terapêutico, consolidar os aprendizados e promover transformações consistentes."
        },
        {
            q: "Como funciona a primeira sessão de terapia?",
            a: "A primeira sessão é um momento de acolhimento e escuta sem qualquer julgamento. Conversaremos sobre suas principais queixas, angústias e o que motivou você a buscar acompanhamento. Eu explicarei o funcionamento da TCC e traçaremos juntos os primeiros passos do seu processo."
        },
        {
            q: "Como faço para agendar minha sessão on-line?",
            a: "O agendamento é simples e rápido. Basta clicar no botão de WhatsApp aqui no site ('Agende sua sessão on-line'). Você falará diretamente comigo para esclarecer eventuais dúvidas sobre valores e horários disponíveis e daremos início à sua jornada."
        }
    ],
    links: [
        {
            title: "WhatsApp",
            url: "https://wa.me/5531998471298?text=Olá%20Nayara%2C%20gostaria%20de%20agendar%20uma%20sessão%20on-line.",
            icon: "fab fa-whatsapp"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/nayarafpsi/",
            icon: "fab fa-instagram"
        }
    ]
};

const sectionsList = [
    { id: 'home', label: 'Início', title: 'Início' },
    { id: 'sobre', label: 'Sobre Mim', title: 'Sobre Mim' },
    { id: 'abordagem', label: 'Abordagem', title: 'Abordagem Terapêutica' },
    { id: 'atuacao', label: 'Como Te Ajudar', title: 'Áreas de Atuação' },
    { id: 'online', label: 'Atendimento On-line', title: 'Atendimento On-line' },
    { id: 'faq', label: 'Dúvidas', title: 'Dúvidas Frequentes' },
    { id: 'contato', label: 'Contato', title: 'Agendamento & Contato' }
];

const HomePage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isAnimatingRef = useRef(false);
    const lastWheelTimeRef = useRef(0);
    const slideRefs = useRef([]);
    const touchStartYRef = useRef(0);
    const touchStartTimeRef = useRef(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const getSlideStatus = (idx) => {
        if (idx === currentSection) return 'is-active';
        if (idx < currentSection) return 'is-prev';
        return 'is-next';
    };

    const goToSection = (index) => {
        if (index < 0 || index >= sectionsList.length) return;
        if (isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        lastWheelTimeRef.current = Date.now();
        setCurrentSection(index);
        setMobileMenuOpen(false);

        if (slideRefs.current[index]) {
            slideRefs.current[index].scrollTop = 0;
        }

        try {
            window.history.replaceState(null, '', '#' + sectionsList[index].id);
        } catch (e) {}

        setTimeout(() => {
            isAnimatingRef.current = false;
        }, 850);
    };

    useEffect(() => {
        if (slideRefs.current[currentSection]) {
            slideRefs.current[currentSection].scrollTop = 0;
        }
    }, [currentSection]);

    // Leitura inicial de hash (ex: #sobre, #faq)
    useEffect(() => {
        if (window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            const targetIdx = sectionsList.findIndex(s => s.id === hash);
            if (targetIdx !== -1) {
                setCurrentSection(targetIdx);
            }
        }
    }, []);

    // Controle de rolagem do mouse estilo Apple (uma seção por vez com transição fluida)
    useEffect(() => {
        const handleWheel = (e) => {
            const now = Date.now();
            if (isAnimatingRef.current || now - lastWheelTimeRef.current < 750) {
                return;
            }

            if (Math.abs(e.deltaY) < 25) {
                return;
            }

            const currentEl = slideRefs.current[currentSection];
            if (currentEl) {
                const hasScrollableContent = currentEl.scrollHeight > currentEl.clientHeight + 10;
                if (hasScrollableContent) {
                    const atTop = currentEl.scrollTop <= 5;
                    const atBottom = currentEl.scrollHeight - currentEl.scrollTop <= currentEl.clientHeight + 5;
                    if (e.deltaY > 0 && !atBottom) {
                        return; // Deixa o usuário rolar o conteúdo interno
                    }
                    if (e.deltaY < 0 && !atTop) {
                        return; // Deixa o usuário rolar o conteúdo interno
                    }
                }
            }

            if (e.deltaY > 0) {
                if (currentSection < sectionsList.length - 1) {
                    goToSection(currentSection + 1);
                }
            } else if (e.deltaY < 0) {
                if (currentSection > 0) {
                    goToSection(currentSection - 1);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentSection]);

    // Navegação por teclado (Setas, PageDown, PageUp)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                goToSection(currentSection + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                goToSection(currentSection - 1);
            } else if (e.key === 'Home') {
                e.preventDefault();
                goToSection(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                goToSection(sectionsList.length - 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection]);

    // Gestos de toque (swipe up / swipe down para celular e tablet)
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartYRef.current = e.touches[0].clientY;
            touchStartTimeRef.current = Date.now();
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diffY = touchStartYRef.current - touchEndY;
            const timeDiff = Date.now() - touchStartTimeRef.current;

            if (Math.abs(diffY) > 50 && timeDiff < 650) {
                const currentEl = slideRefs.current[currentSection];
                if (currentEl) {
                    const hasScrollableContent = currentEl.scrollHeight > currentEl.clientHeight + 10;
                    if (hasScrollableContent) {
                        const atTop = currentEl.scrollTop <= 5;
                        const atBottom = currentEl.scrollHeight - currentEl.scrollTop <= currentEl.clientHeight + 5;
                        if (diffY > 0 && !atBottom) return;
                        if (diffY < 0 && !atTop) return;
                    }
                }

                if (diffY > 0 && currentSection < sectionsList.length - 1) {
                    goToSection(currentSection + 1);
                } else if (diffY < 0 && currentSection > 0) {
                    goToSection(currentSection - 1);
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSection]);

    const activeSecId = sectionsList[currentSection].id;

    return (
        <div className="apple-presentation-viewport">
            {/* Header / Navbar Superior Fixo */}
            <nav className="site-nav">
                <div className="nav-content">
                    <button 
                        type="button" 
                        className="nav-logo"
                        onClick={() => goToSection(0)}
                    >
                        <span>Nayara Freitas</span>
                        <small>Psicóloga</small>
                    </button>

                    <button 
                        className="mobile-menu-toggle" 
                        aria-label="Abrir menu" 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>

                    <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'home' ? 'active' : ''}`}
                                onClick={() => goToSection(0)}
                            >
                                Início
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'sobre' ? 'active' : ''}`}
                                onClick={() => goToSection(1)}
                            >
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'abordagem' ? 'active' : ''}`}
                                onClick={() => goToSection(2)}
                            >
                                Abordagem
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'atuacao' ? 'active' : ''}`}
                                onClick={() => goToSection(3)}
                            >
                                Áreas de Atuação
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'online' ? 'active' : ''}`}
                                onClick={() => goToSection(4)}
                            >
                                Atendimento On-line
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button" 
                                className={`nav-link-btn ${activeSecId === 'faq' ? 'active' : ''}`}
                                onClick={() => goToSection(5)}
                            >
                                Dúvidas
                            </button>
                        </li>
                    </ul>

                    <div className="nav-cta-group">
                        <a 
                            href={data.profile.whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-nav-agendar"
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span>Agendar Sessão</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Navegador Lateral de Pontos (Apple Slide Indicator) */}
            <aside className="section-nav-dots" aria-label="Navegação entre seções">
                {sectionsList.map((sec, idx) => (
                    <button 
                        key={sec.id} 
                        type="button"
                        onClick={() => goToSection(idx)}
                        className={`nav-dot ${currentSection === idx ? 'active' : ''}`}
                        title={sec.label}
                        aria-label={sec.label}
                    >
                        <span className="dot-tooltip">{sec.label}</span>
                    </button>
                ))}
            </aside>

            {/* Container de Slides Estilo Apple (Transições Independentes) */}
            <main className="apple-slides-container">
                {/* SEÇÃO 1: HERO */}
                <section 
                    id="home" 
                    ref={el => slideRefs.current[0] = el}
                    className={`apple-slide section-hero ${getSlideStatus(0)}`}
                >
                    <div className="hero">
                        <div className="hero-photo-wrapper">
                            <img 
                                id="profile-image" 
                                src={data.profile.image} 
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = data.profile.fallbackImage;
                                }}
                                alt={data.profile.name} 
                            />
                        </div>
                        <h1 id="profile-name">{data.profile.name}</h1>
                        <p id="profile-title" className="hero-title">{data.profile.title}</p>
                        <p id="profile-subtitle" className="hero-subtitle">{data.profile.subtitle}</p>
                        
                        <p className="hero-tagline">
                            "{data.profile.tagline}"
                        </p>

                        <div className="hero-cta">
                            <a 
                                href={data.profile.whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-primary-cta"
                            >
                                <i className="fab fa-whatsapp"></i>
                                <span>Agendar Consulta On-line</span>
                            </a>
                        </div>

                        <div className="social-links">
                            {data.links.map(link => (
                                <a 
                                    key={link.title} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title={link.title}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>

                        {/* Dica de rolagem Apple */}
                        <button 
                            type="button"
                            onClick={() => goToSection(1)} 
                            className="scroll-hint-btn" 
                            aria-label="Ir para Sobre Mim"
                        >
                            <span>Conheça mais</span>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </section>

                {/* SEÇÃO 2: SOBRE MIM */}
                <section 
                    id="sobre" 
                    ref={el => slideRefs.current[1] = el}
                    className={`apple-slide section-sobre ${getSlideStatus(1)}`}
                >
                    <div className="container-inner">
                        <h2 className="section-title">Sobre Mim</h2>
                        <div className="about-content">
                            <div className="about-text" id="about-text">
                                {data.about.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="about-photo">
                                <img 
                                    id="about-image" 
                                    src={data.about.image} 
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = data.about.fallbackImage;
                                    }}
                                    alt={data.profile.name}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 3: MINHA ABORDAGEM TERAPÊUTICA */}
                <section 
                    id="abordagem" 
                    ref={el => slideRefs.current[2] = el}
                    className={`apple-slide section-abordagem ${getSlideStatus(2)}`}
                >
                    <div className="container-inner">
                        <h2 className="section-title">{data.approach.title}</h2>
                        <div className="approach-content">
                            <div className="approach-photo">
                                <img 
                                    src={data.approach.image} 
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = data.approach.fallbackImage;
                                    }}
                                    alt="Abordagem terapêutica Nayara Freitas"
                                />
                            </div>
                            <div className="approach-text">
                                {data.approach.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <h3 className="approach-subheading">{data.approach.subheading}</h3>
                                <button 
                                    type="button"
                                    onClick={() => goToSection(3)} 
                                    className="btn-secondary-cta"
                                >
                                    <span>Conheça as áreas de atuação</span>
                                    <i className="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 4: COMO POSSO TE AJUDAR? (HIGHLIGHTS) */}
                <section 
                    id="atuacao" 
                    ref={el => slideRefs.current[3] = el}
                    className={`apple-slide section-atuacao ${getSlideStatus(3)}`}
                >
                    <div className="container-inner">
                        <h2 className="section-title">Como posso te ajudar?</h2>
                        <p className="section-lead">
                            Meu trabalho é direcionado especialmente às seguintes questões:
                        </p>

                        <div className="highlights-grid">
                            {data.highlights.map((item, index) => (
                                <div key={index} className="highlight-card">
                                    <div className="highlight-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 className="highlight-title">{item.title}</h3>
                                    <p className="highlight-desc">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 5: ATENDIMENTO PSICOLÓGICO ON-LINE */}
                <section 
                    id="online" 
                    ref={el => slideRefs.current[4] = el}
                    className={`apple-slide section-online ${getSlideStatus(4)}`}
                >
                    <div className="container-inner">
                        <div className="online-box">
                            <h2 className="section-title">{data.onlineService.title}</h2>
                            
                            <div className="online-paragraphs">
                                {data.onlineService.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="online-highlight-quote">
                                <i className="fas fa-quote-left"></i>
                                <blockquote>{data.onlineService.highlightQuote}</blockquote>
                            </div>

                            <p className="online-closing">{data.onlineService.closing}</p>

                            <div className="online-cta-wrap">
                                <a 
                                    href={data.profile.whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-primary-cta"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    <span>Agende sua sessão on-line</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 6: DÚVIDAS FREQUENTES (FAQ COM DUAS COLUNAS NO DESKTOP) */}
                <section 
                    id="faq" 
                    ref={el => slideRefs.current[5] = el}
                    className={`apple-slide section-faq ${getSlideStatus(5)}`}
                >
                    <div className="container-inner">
                        <h2 className="section-title">Dúvidas Frequentes</h2>
                        <p className="section-lead">
                            Esclareça as principais dúvidas sobre o processo terapêutico e o início do seu acompanhamento:
                        </p>

                        <div className="faq-list">
                            {data.faq.map((item, index) => {
                                const isOpen = openFaq === index;
                                return (
                                    <div 
                                        key={index} 
                                        className={`faq-item ${isOpen ? 'active' : ''}`}
                                    >
                                        <button 
                                            type="button"
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={isOpen}
                                        >
                                            <h3>{item.q}</h3>
                                            <span className="faq-icon">
                                                <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="faq-answer">
                                                <p>{item.a}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 7: FOOTER / CONTATO FINAL */}
                <footer 
                    id="contato" 
                    ref={el => slideRefs.current[6] = el}
                    className={`apple-slide site-footer ${getSlideStatus(6)}`}
                >
                    <div className="footer-content">
                        <div className="footer-brand-info">
                            <h3>Psicóloga Nayara Freitas</h3>
                            <p className="footer-crp">CRP 04/56386</p>
                            <p className="footer-approach">Terapia Cognitivo-Comportamental (TCC)</p>
                            
                            <div className="footer-cta-container">
                                <a 
                                    href={data.profile.whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-footer-agendar"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    <span>Agende sua sessão on-line</span>
                                </a>
                            </div>
                        </div>

                        <div className="footer-social" id="footer-social">
                            {data.links.map(link => (
                                <a 
                                    key={link.title} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title={link.title}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>

                        <div className="developer-info">
                            <p>© {new Date().getFullYear()} Nayara Freitas • Todos os direitos reservados</p>
                            <div className="dev-credit">
                                <span>Desenvolvido por Yuri Fernandes</span>
                                <a 
                                    href="https://wa.me/5531987798823?text=Olá,%20quero%20fazer%20meu%20site" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    title="WhatsApp do Desenvolvedor"
                                >
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Pílula Flutuante de Próxima Seção (Estilo Apple) */}
            {currentSection < sectionsList.length - 1 && (
                <button 
                    type="button"
                    className="apple-next-pill"
                    onClick={() => goToSection(currentSection + 1)}
                    aria-label={`Ir para próxima seção: ${sectionsList[currentSection + 1].label}`}
                >
                    <span>{sectionsList[currentSection + 1].label}</span>
                    <i className="fas fa-chevron-down"></i>
                </button>
            )}
        </div>
    );
};

export default HomePage;