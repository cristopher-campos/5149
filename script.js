document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Cierra el menú móvil al hacer clic en un enlace (navegación One-Page)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // 2. Lógica del Calendario de Eventos
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthDisplay = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    // Datos de eventos (simulación)
    const events = [
        { date: '2025-09-05', title: 'Reunión de Padres (Virtual)' },
        { date: '2025-09-12', title: 'Feria de Ciencias' },
        { date: '2025-09-20', title: 'Entrega de Notas' },
        { date: '2025-10-01', title: 'Inicio del 2do Trimestre' },
        { date: '2025-10-18', title: 'Día del Deporte Escolar' },
    ];

    let currentDate = new Date(); // Empieza con la fecha actual

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Nombres de los meses y días
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
        currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;

        // Obtener el primer día del mes (0=Domingo, 1=Lunes...)
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        // Obtener el número de días en el mes
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarGrid.innerHTML = ''; // Limpiar la cuadrícula

        // Agregar encabezados de días
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day-header');
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        // Rellenar días vacíos al inicio (para alinear con el día de la semana)
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarGrid.innerHTML += '<div></div>';
        }

        // Rellenar con los días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day-cell');
            dayCell.textContent = day;

            // Formato de fecha para comparación (YYYY-MM-DD)
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const isEvent = events.some(event => event.date === dateString);

            if (isEvent) {
                dayCell.classList.add('event');
                dayCell.title = events.find(event => event.date === dateString).title;
            }

            // Marcar el día de hoy
            const today = new Date();
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayCell.classList.add('today');
            }

            calendarGrid.appendChild(dayCell);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Renderizar al cargar la página
    renderCalendar();
});

// Nota: Para una funcionalidad completa de anuncios, se podría usar una lógica similar
// a la del calendario para cargar dinámicamente las tarjetas de la sección "Inicio"
// desde un array de datos.
