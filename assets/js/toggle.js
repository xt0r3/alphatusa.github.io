function toggle(id, btn){
    let obj = document.getElementById(id);
    btn.classList.toggle('open');
    if(obj.style.maxHeight=='100%'){
        obj.style.maxHeight = '0';
        btn.textContent = 'Bővebb információ';
    }
    else{
        obj.style.maxHeight = '100%';
        btn.textContent = 'Kevesebb információ';

    }
}