var selectedSource = "";

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

          html += '<li><a href="#" onclick="loadArticles(\''  + sources[i]["id"] + '\')">' + sources[i]["name"] + '</a></li>'

  }
  console.log(sources);
  $("#sources-area").html(html);


}



function loadArticles(source){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=b33a41de4be74829a057f2248c0a40dc",
            dataType:"json",
            success: parseArticles
});


}

function parseArticles(data){
  console.log(data);
  var html = ""
  var articles = [];
  var tempPath = data["articles"];

  for (var i = 0, len = tempPath.length; i < len; ++i) {
        //console.log(i);
         //sets data to arrays for charts
         articles.push(tempPath[i]);
        console.log(articles[0]["title"]);
        if (tempPath[i]["description"] == null){
          var description = "";
        }else{
          description = tempPath[i]["description"];
        }
        html += '<h3><a href="' + articles[0]["url"] + '">' + tempPath[i]["title"] + '</a></h3><p>' + description  + '</p>'

  }
  $("#feed-area").html(html);
  console.log(html);


}





//https://newsapi.org/v1/articles?source=techcrunch&apiKey=b33a41de4be74829a057f2248c0a40dc
//b33a41de4be74829a057f2248c0a40dc
