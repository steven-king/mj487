$( document ).ready(function() {
    loadSources();
});


function loadSources(){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v1/sources?language=en&apiKey=b33a41de4be74829a057f2248c0a40dc",
            dataType:"json",
            success: parseSources
});


}

function parseSources(data){
  var html = "";
  console.log("parseSources");
  console.log(data);
  var sources = [];
  var tempPath = data["sources"];

  for (var i = 0, len = tempPath.length; i < len; ++i) {
        //console.log(i);
         //sets data to arrays for charts
         //sources.push(tempPath[i]["name"]);
         sources.push(tempPath[i]);
        console.log(sources[0]["name"]);

          html += '<li><a href="#" onclick="loadArticles('  + String(sources[i]["id"]) + ')">' + sources[i]["name"] + '</a></li>'

  }
  console.log(sources);
  $("#sources-area").html(html);


}





//https://newsapi.org/v1/articles?source=techcrunch&apiKey=b33a41de4be74829a057f2248c0a40dc
//b33a41de4be74829a057f2248c0a40dc
