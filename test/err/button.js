
function openMenu(){
    document.getElementById('box').classList.toggle('active');
    document.getElementById('btnmen').classList.toggle('active');
}
var i=1;
function imgsrcv() {
    i++;
    img.src = "../sol/"+ i+".jpg";
    window.scroll(0,100);
}
function imgsrcn() {
    i--;
    img.src = "../sol/"+ i+".jpg";
    window.scroll(0,100);
   
}
function openVhod(){
    document.getElementById('boxvhod').classList.toggle('active');
}
function vhod(){
    var vhod = document.getElementById("vhod");
    var login = document.getElementById("login");
    var reg = document.getElementById("reg");
    reg.innerHTML = login.value;
    vhod.innerHTML = '';
}
function openReg(){
    document.getElementById('boxreg').classList.toggle('active');
}





