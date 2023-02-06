const btn = document.getElementById('btn');
btn.addEventListener('click',getText);

function  getText(){
fetch('sample.txt').then(res => res.text()).then(data => console.log(data));
}
