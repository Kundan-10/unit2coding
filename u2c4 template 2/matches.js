// write js code here corresponding to matches.html
var matchSch=JSON.parse(localStorage.getItem("schedule"));
displayData (matchSch);


function handleName(){
 
    var selected=document.getElementById("filterVenue").value;
    console.log(selected);
    var list=matchSch.filter(function(elem){
        return elem.venue==selected;
    });
console.log(list);
displayData (list);
}

var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];





function displayData(data){
document.querySelector("tbody");

data.forEach(function(elem) {
    var tr= document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText= elem.matchNum;

     var td2=document.createElement("td");
    td2.innerText= elem.teamA;

    var td3=document.createElement("td");
    td3.innerText= elem.teamB;

    var td4=document.createElement("td");
    td4.innerText= elem.date;

    var td5=document.createElement("td");
    td5.innerText= elem.venue;


    var td6=document.createElement("td");
    td6.innerText="Add as favourites";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        favourite(elem);
    });
tr.append(td1, td2, td3, td4, td5, td6);
document.querySelector("tbody").append(tr);

});
function favourite(elem){
    console.log(elem);
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}

}