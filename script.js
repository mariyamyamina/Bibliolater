var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var popupbutton=document.getElementById("button")

popupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton=document.getElementById("cancelbutton")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
})
cancelbutton.addEventListener("click",function(){
     overlay.style.display="none"
    popupbox.style.display="none"
})


//selecting container,addbutton,title-input,author-input,description-input
var container=document.querySelector(".container")
var addbutton=document.getElementById("addbutton")
var titleinput=document.getElementById("title-input")
var authorinput=document.getElementById("author-input")
var description=document.getElementById("description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebutton(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})

function deletebutton(event){
    event.target.parentElement.remove()
}