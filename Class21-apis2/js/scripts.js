$( document ).ready(function() {
    loadData();
});



function loadData(){

    $.ajax({
            type:"GET",
            url:"",
            dataType:"json",
            success: parseData
});


}

function parseData(data){
  console.log(data);


}





//https://newsapi.org/v1/articles?source=techcrunch&apiKey=b33a41de4be74829a057f2248c0a40dc
//b33a41de4be74829a057f2248c0a40dc
