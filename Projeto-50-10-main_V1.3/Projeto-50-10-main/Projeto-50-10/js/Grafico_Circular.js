document.addEventListener('DOMContentLoaded', function() { 
    // Configurações do gráfico
    const config = {
        type: 'pie',
        data: {
            labels: [
                ' Peso ',
                ' IMC ',
                ' Massa Gorda ',
                ' Massa Muscular ',
                ' Gordura Visceral ',
                ' Agua ',
                ' Massa Ossea',
                ' Nivel Físico', 
                ' Idade Metabolica',
            ],
            datasets: [{
                data: [35, 25, 15, 15, 10, 30 , 15, 85, 5 ],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#8AC24A',
                    '#607D8B',
                    '#E91E63',

                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'center',
                },
                title: {
                    display: true,
                    text: 'Informação geral',
                    font: {
                        size: 18
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    };

    // Criar o gráfico
    const ctx = document.getElementById('Grafico Circular').getContext('2d');
    new Chart(ctx, config);
});