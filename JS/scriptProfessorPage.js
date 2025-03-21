document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const activitiesTitle = document.getElementById('activities-title');

    function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('pt-PT', options).format(date);
    }

    function updateTitle(date) {
        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        activitiesTitle.textContent = isToday ? `Atividades Marcadas para Hoje (${formatDate(date)})` : `Atividades Marcadas para ${formatDate(date)}`;
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Aula de Pilates',
                start: '2023-02-01T07:00:00',
                end: '2023-02-01T07:45:00'
            },
            {
                title: 'Avaliação Física',
                start: '2023-02-01T08:15:00',
                end: '2023-02-01T08:25:00'
            },
            {
                title: 'Treino Individual',
                start: '2023-02-01T10:00:00',
                end: '2023-02-01T11:00:00'
            }
        ],
        dateClick: function(info) {
            updateTitle(new Date(info.dateStr));
        }
    });
    calendar.render();

    // Atualizar o título com a data de hoje ao carregar a página
    updateTitle(new Date());

    document.getElementById('hamburger').addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});