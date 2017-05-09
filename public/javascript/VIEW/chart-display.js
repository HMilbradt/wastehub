'use strict';

function getNumApples() {
    return new Promise(function ( resolve, reject ) {
        readFoodItem('fruit', 'apple').then(function () {
            displayBarChart(numApples);
        });
    })
}
function createChart() {
    getNumApples().then()
}

function displayBarChart(numApples) {

    // TODO static types, change soon
    // var numApples = readFoodItem('fruit', 'apple');
    //var numPear = readFoodItem('fruit', 'pear');
    //var numBanana = readFoodItem('fruit', 'banana');

    var ctx = document.getElementById("chart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["apple", "banana", "pear"], //"Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [numApples, 5, 5], // 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                    // 'rgba(75, 192, 192, 0.2)',
                    //'rgba(153, 102, 255, 0.2)',
                    //'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                    //'rgba(75, 192, 192, 1)',
                    //'rgba(153, 102, 255, 1)',
                    //'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

