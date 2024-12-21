function toggle(){
    const ham=document.querySelector(".hambar");
    const ul=document.getElementById("menu");
    ul.style.display="flex";
    ham.style.display="none";
}

function closetoggle(){
    const ham=document.querySelector(".hambar");
    const ul=document.getElementById("menu");
    ul.style.display="none";
    ham.style.display="flex";
}

