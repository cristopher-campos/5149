/* VARIABLES Y RESET BÁSICO */
:root {
    --color-primary: #004AAD; /* Azul institucional */
    --color-secondary: #FFD700; /* Dorado institucional */
    --color-text: #333;
    --color-light-bg: #f8f8f8;
    --color-white: #ffffff;
    --header-height: 70px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-text);
    line-height: 1.6;
    background-color: var(--color-white);
}

html {
    scroll-behavior: smooth;
}

/* UTILIDADES Y FORMATO GENERAL */
.section-padding {
    padding: 80px 5%;
}

.bg-light {
    background-color: var(--color-light-bg);
}

h2 {
    font-size: 2.5em;
    color: var(--color-primary);
    margin-bottom: 40px;
    text-align: center;
    border-bottom: 3px solid var(--color-secondary);
    padding-bottom: 10px;
    display: inline-block;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    display: block; /* Centrar el bloque */
}

a {
    text-decoration: none;
    color: var(--color-primary);
}

/* BOTONES */
.btn-principal, .btn-secundario {
    display: inline-block;
    padding: 12px 25px;
    margin-top: 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
}

.btn-principal {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border: 2px solid var(--color-secondary);
}

.btn-principal:hover {
    background-color: #e5c100; /* Dorado oscuro */
    transform: translateY(-2px);
}

.btn-secundario {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: 2px solid var(--color-primary);
}

.btn-secundario:hover {
    background-color: #00367a; /* Azul oscuro */
    transform: translateY(-2px);
}

/* 1. ENCABEZADO Y MENÚ FIJO */
#header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: var(--color-primary);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
}

.logo h1 {
    color: var(--color-white);
    font-size: 1.8em;
    font-weight: 700;
}

.logo h1 strong {
    color: var(--color-secondary);
}

.nav-list {
    list-style: none;
    display: flex;
}

.nav-list li a {
    color: var(--color-white);
    padding: 10px 15px;
    display: block;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 5px;
}

.nav-list li a:hover,
.nav-list li a.active {
    background-color: var(--color-secondary);
    color: var(--color-primary);
}

.menu-toggle {
    display: none; /* Oculto por defecto en desktop */
    background: none;
    border: none;
    color: var(--color-white);
    font-size: 1.5em;
    cursor: pointer;
}

/* 2. SECCIÓN INICIO (HERO) */
.hero-section {
    padding-top: var(--header-height); /* Ajuste para el header fijo */
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('placeholder-hero-bg.jpg') no-repeat center center/cover; /* Reemplazar con imagen real */
    color: var(--color-white);
    position: relative;
    padding: 100px 5%;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Overlay oscuro */
    z-index: 1;
}

.hero-content, .destacados-anuncios {
    z-index: 2;
}

.hero-content h2 {
    font-size: 3.5em;
    margin-bottom: 15px;
    color: var(--color-white);
    border: none;
    padding: 0;
}

.hero-content p {
    font-size: 1.5em;
    margin-bottom: 30px;
    font-weight: 300;
}

.destacados-anuncios {
    margin-top: 50px;
    width: 100%;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: var(--color-text);
}

.destacados-anuncios h3 {
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8em;
}

.anuncios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.anuncio-card {
    background-color: var(--color-white);
    padding: 20px;
    border-left: 5px solid var(--color-secondary);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.anuncio-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.anuncio-card h4 {
    color: var(--color-primary);
    margin-bottom: 5px;
}

.anuncio-card .fecha {
    font-size: 0.9em;
    color: #888;
    margin-bottom: 10px;
}

/* 3. SECCIÓN SOBRE NOSOTROS */
.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
    text-align: center;
}

.about-card {
    padding: 30px;
    border: 1px solid #ddd;
    border-top: 5px solid var(--color-primary);
    border-radius: 8px;
    transition: box-shadow 0.3s;
}

.about-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.about-card h3 {
    color: var(--color-secondary);
    font-size: 1.5em;
    margin-bottom: 15px;
}

.team-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.team-member {
    text-align: center;
}

.team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--color-secondary);
    margin-bottom: 10px;
}

.team-member h4 {
    color: var(--color-primary);
}

/* 4. SECCIÓN NOTICIAS Y ANUNCIOS */
.news-list {
    max-width: 900px;
    margin: 0 auto 30px;
}

.comunicado {
    background-color: var(--color-white);
    border: 1px solid #eee;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s;
}

.comunicado:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.comunicado-fecha {
    color: var(--color-secondary);
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 5px;
}

.comunicado h4 {
    color: var(--color-primary);
    margin-bottom: 5px;
}

/* 5. SECCIÓN HORARIOS Y CALENDARIO */
.table-responsive {
    overflow-x: auto;
    margin-bottom: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; /* Asegura que la tabla no sea demasiado estrecha en móvil */
}

table th, table td {
    padding: 12px 15px;
    text-align: left;
    border: 1px solid #eee;
}

table thead th {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: bold;
}

table tbody tr:nth-child(even) {
    background-color: var(--color-light-bg);
}

/* CALENDARIO */
#calendar-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--color-white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.calendar-header h4 {
    font-size: 1.5em;
    color: var(--color-primary);
}

.calendar-header button {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: opacity 0.3s;
}

.calendar-header button:hover {
    opacity: 0.8;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    gap: 5px;
}

.day-header {
    font-weight: bold;
    color: var(--color-primary);
    padding: 10px 0;
}

.day-cell {
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s;
    position: relative;
    aspect-ratio: 1 / 1; /* Asegura que la celda sea cuadrada */
    display: flex;
    justify-content: center;
    align-items: center;
}

.day-cell:hover {
    background-color: #eee;
}

.today {
    background-color: var(--color-primary);
    color: var(--color-white);
    font-weight: bold;
}

.event {
    border: 2px solid var(--color-secondary);
    font-weight: bold;
}

/* 6. SECCIÓN ESTUDIANTES Y PADRES */
.section-intro {
    text-align: center;
    margin-bottom: 40px;
    font-size: 1.1em;
}

.downloads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.download-card {
    background-color: var(--color-white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    border-bottom: 5px solid var(--color-secondary);
}

.download-card i {
    font-size: 3em;
    color: var(--color-primary);
    margin-bottom: 15px;
}

.download-card h4 {
    color: var(--color-primary);
    margin-bottom: 10px;
}

.download-link {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

.download-link:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
}

/* 7. GALERÍA DE IMÁGENES */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 74, 173, 0.7); /* Azul con transparencia */
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.gallery-item:hover .overlay {
    opacity: 1;
}

/* PIE DE PÁGINA */
#footer {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 40px 5% 10px;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
}

.footer-content h4 {
    color: var(--color-secondary);
    margin-bottom: 15px;
    font-size: 1.2em;
}

.footer-info p, .footer-links a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 8px;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--color-secondary);
}

.footer-social a {
    color: var(--color-white);
    font-size: 1.5em;
    margin-right: 15px;
    transition: color 0.3s;
}

.footer-social a:hover {
    color: var(--color-secondary);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 10px;
    text-align: center;
    font-size: 0.9em;
}


/* RESPONSIVE DESIGN (MÓVILES) */
@media (max-width: 992px) {
    .hero-content h2 {
        font-size: 2.5em;
    }
}

@media (max-width: 768px) {
    /* Header y Navegación Móvil */
    .nav-list {
        display: none;
        flex-direction: column;
        position: absolute;
        top: var(--header-height);
        left: 0;
        width: 100%;
        background-color: var(--color-primary);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
    }

    .nav-list.active {
        display: flex;
    }

    .nav-list li a {
        padding: 15px 5%;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .menu-toggle {
        display: block; /* Mostrar el botón de menú */
    }

    /* Ajustes Generales */
    h2 {
        font-size: 2em;
    }

    .section-padding {
        padding: 60px 5%;
    }

    /* Hero */
    .hero-content h2 {
        font-size: 2em;
    }

    .destacados-anuncios {
        margin-top: 30px;
        padding: 15px;
    }

    /* Footer */
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-info p {
        margin-bottom: 15px;
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
    }

    .footer-social {
        margin-top: 20px;
    }
}
