
$( document ).ready(function() {
    createCharts();
});


function createCharts(){


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Female', 30, 200, 100, 400, 150, 250],
        ['Male', 50, 20, 10, 40, 15, 25]
      ]
    }
});


var genderChart = c3.generate({
    bindto: '#gender-chart',
    data: {
        // iris data from R
        columns: [
            ['Female', 60],
            ['Male', 40],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var barChart = c3.generate({
  bindto: '#age-chart',
    data: {
        columns: [
            ['Female', 30, 200, 100, 400, 150, 250],
            ['Make', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});




}
