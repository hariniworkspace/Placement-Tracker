var graph = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(graph, {
    type: 'doughnut',
    data: {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
             data: [26,7,2],
            label: ' involvement',
           
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
               'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgb(255, 99, 133)',
                
                
                
            ],
            
            borderWidth: 1
        }]
    },
    
});
var graph = document.getElementById('linechart').getContext('2d');
var myChart = new Chart(graph, {
    type: 'bar',
    data: {
        labels: ['Mysql', 
            'Java', 
            'c' 
            ],
        datasets: [{
             data: [27,4,4],
            label: 'Problems Solved',
           
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgb(153, 102, 255)',
                'rgba(255, 206, 86, 1)',
                'rgb(66, 163, 55)',
                
            ],
            
            borderWidth: 1
        }]
    },
    
});