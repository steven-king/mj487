var data;
var balance = [];
var age = [];
var person = [];
var maleCount = 0;
var femaleCount = 0;


$( document ).ready(function() {
    loadData();
});


function loadData(){

    $.ajax({
            type:"GET",
            url:"data.json",
            dataType:"text",
            success: parseData
});


}


function parseData(data){
    //console.log(data);
    dataObj = $.parseJSON(data);
    //console.log(dataObj);

     for (var i = 0, len = dataObj.length; i < len; ++i) {
            //sets data to arrays for charts
            balance.push(dataObj[i]["balance"]);
            age.push(dataObj[i]["age"]);
            person.push(dataObj[i]["name"]);

            if (dataObj[i]["gender"] == "male") {
                maleCount++;
            }else{
                femaleCount++;
            }
     }

     var sum = age.reduce((previous, current) => current += previous);
     var avg = sum / age.length;
     console.log(avg);
    //console.log(person);
    console.log(maleCount);
    generateChart()
}





function generateChart(){
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sudent Debt'
        },
        subtitle: {
            text: 'Source: My Imagination.com'
        },
        xAxis: {
            categories: person
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Student',
            data: age

        }]
    });
}
