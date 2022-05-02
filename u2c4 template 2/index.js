// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",myfunction);
var mplArr=JSON.parse(localStorage.getItem("schedule"))||[];


function myfunction(){
    event.preventDefault();
    var Obj={
        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    };
    mplArr.push(Obj);
    console.log(mplArr);
    localStorage.setItem("schedule",JSON.stringify(mplArr));
    window.location.href="matches.html";
}
