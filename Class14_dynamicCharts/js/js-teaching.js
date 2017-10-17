
// To Do Today

1. Understand how C3 works.
2. Write C3 chart to page
3. Write multiple C3 charts to page
4. Planning code
5. AJAX JSON parsing
6. Populate C3 Charts with dyanamic data





$( document ).ready(function() {
    loadData();
});

function loadData(){
    //ajax Call to load json data
    parseData();
}

function parseData(data){
    //loop through loaded json data to formate and store vars.
    buildCharts();
}


function buildCharts(){
    //put c3 charts on page.
    
}
