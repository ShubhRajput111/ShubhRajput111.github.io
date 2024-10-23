// Chart Configuration
const chartColors = {
    primary: '#3498db',
    secondary: '#e74c3c',
    tertiary: '#2ecc71',
    quaternary: '#f1c40f'
};

// Age-Based Analysis Chart
const createAgeChart = () => {
    const ctx = document.getElementById('ageChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Youth', 'Young Adult', 'Adult', 'Middle Age', 'Senior'],
            datasets: [{
                label: 'Average Profit by Age Group',
                data: [1200, 1500, 1800, 2000, 1600],
                backgroundColor: chartColors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Average Profit by Age Group'
                }
            }
        }
    });
};

// Gender Distribution Chart
const createGenderChart = () => {
    const ctx = document.getElementById('genderChart').getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [60, 40],
                backgroundColor: [chartColors.primary, chartColors.secondary]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Customer Gender Distribution'
                }
            }
        }
    });
};

// Revenue Trends Chart
const createRevenueChart = () => {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Revenue Trend',
                data: [500000, 750000, 900000, 1200000, 1500000],
                borderColor: chartColors.tertiary,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Yearly Revenue Trend'
                }
            }
        }
    });
};

// Geography Chart
const createGeographyChart = () => {
    const ctx = document.getElementById('geographyChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['USA', 'Canada', 'UK', 'Germany', 'France'],
            datasets: [{
                label: 'Orders by Country',
                data: [1200, 800, 600, 400, 300],
                backgroundColor: chartColors.primary
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Orders by Country'
                }
            }
        }
    });
};

// Material Analysis Chart
const createMaterialChart = () => {
    const ctx = document.getElementById('materialChart').getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Carbon', 'Aluminum', 'Steel', 'Titanium'],
            datasets: [{
                label: 'Average Profit by Material',
                data: [2500, 1800, 2200, 3000],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    chartColors.tertiary,
                    chartColors.quaternary
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Average Profit by Material'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Profit ($)'
                    }
                }
            }
        }
    });
};

// Initialize all charts
document.addEventListener('DOMContentLoaded', () => {
    const ageChart = createAgeChart();
    const genderChart = createGenderChart();
    const revenueChart = createRevenueChart();
    const geographyChart = createGeographyChart();
    const materialChart = createMaterialChart();
});