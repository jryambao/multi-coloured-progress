function complete(){
    var element = document.getElementsByClassName("progress");
    for(let i=0; i<5; i++){
        element[i].style.width = "100%";
        element[i].innerText = "100%"
    }
}


