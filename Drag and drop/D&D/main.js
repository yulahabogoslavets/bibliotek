let dragged;
document.addEventListener("drag", function(event){

});

document.addEventListener("dragstart", function(event){
     dragged = event.target;
    event.target.style.opacity=.5;
});

document.addEventListener("dragend", function(event){
    event.target.style.opacity = "";
});

document.addEventListener("dragover", function(event){
    event.preventDefault();
});

document.addEventListener("dragenter", function(event){
    if (event.target.className == "dropzone"){
        event.target.style.background = "purple";
    }
});

document.addEventListener("dragleave", function(event){
    if (event.target.className == "dropzone"){
        event.target.style.background = "";
    }
})

document.addEventListener("drop", function(event){
    event.preventDefault();
    if(event.target.className == "dropzone"){
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
})