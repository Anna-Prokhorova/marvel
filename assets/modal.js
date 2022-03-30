window.onload = function(){ 
    let modal = document.getElementById('modal')
    let btn1 = document.getElementById('btn-close')
    let btn2 = document.getElementById('btn-close-text')
    var btn3 = document.getElementById('btn-open')

    btn3.onclick = function(event) {
        modal.style.display = "block";
        event.stopPropagation();
    }

    btn1.onclick = function(event) {
        modal.style.display = "none";
        event.stopPropagation();
    }

    btn2.onclick = function(event) {
        modal.style.display = "none";
        event.stopPropagation();
    }

    document.body.onclick=function(event){
        modal.style.display="none";
        event.stopPropagation();
    }
};

