


//window.alert("yes start");
var mybutton = window.document.getElementById("search-button");
const form = document.getElementById("search-wrap");
var bar = window.document.getElementById("search-bar-id");

form.addEventListener("submit", (e)=>{
e.preventDefault();
//window.alert("prevent submit");
runQuery();
});


bar.addEventListener("keydown",(e)=> {

    if(e.code === "Enter"){
      form.requestSubmit();  
        
    }
})

function runQuery(){
    //window.alert("made it");
    var arr = bar.value.split(" ");
    var queryString = arr.join("+");
    //alert(queryString);
    newUrl = "https://www.youtube.com/results?search_query=" + queryString;
    window.open(newUrl,"_self");
}

