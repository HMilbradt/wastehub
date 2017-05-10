'use strict';

function getChartData() {

    var dataOne = readWasteCount('apple');
    var dataTwo = readWasteCount('banana');

    Promise.all([dataOne, dataTwo]).then(function(values) {
        displayBarChart(values);
    }, function(error) {
        console.log("Failed", error);
    })
}

function displayBarChart(data) {


    // TODO static types, change soon
    // var numApples = readFoodItem('fruit', 'apple');
    //var numPear = readFoodItem('fruit', 'pear');
    //var numBanana = readFoodItem('fruit', 'banana');

    var ctx = document.getElementById("chart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['apple', 'banana', 'fuck'], //"Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [data[0], data[1], 5], // 5, 2, 3],
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

