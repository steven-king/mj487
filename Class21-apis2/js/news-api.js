$( document ).ready(function() {
    loadData();
});


// function loadData(){
//
//     $.ajax({
//             type:"GET",
//             url:"https://newsapi.org/v1/sources?language=en&apiKey=b33a41de4be74829a057f2248c0a40dc",
//             dataType:"json",
//             success: parseData
// });
//
//
// }
//
// function parseData(data){
//   var sources = [];
//   var tempPath = data["sources"];
//
//   for (var i = 0, len = tempPath.length; i < len; ++i) {
//         //console.log(i);
//          //sets data to arrays for charts
//          sources.push(tempPath[i]["name"]);
//   }
//   console.log(sources);
//
//
// }
//


function loadData(){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b33a41de4be74829a057f2248c0a40dc",
            dataType:"json",
            success: parseData
});


}

function parseData(data){
  console.log(data);
  var html = ""
  var articles = [];
  var tempPath = data["articles"];

  for (var i = 0, len = tempPath.length; i < len; ++i) {
        //console.log(i);
         //sets data to arrays for charts
         articles.push(tempPath[i]);
        console.log(articles[0]["title"]);
        html += '<li><a href="' + articles[0]["url"] + '">' + tempPath[i]["title"] + '</a></li>'

  }
  $("#feed-area").html(html);
  console.log(html);


}





//https://newsapi.org/v1/articles?source=techcrunch&apiKey=b33a41de4be74829a057f2248c0a40dc
//b33a41de4be74829a057f2248c0a40dc
