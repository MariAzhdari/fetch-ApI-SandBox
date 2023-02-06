const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click',getText);

function  getText(){
fetch('sample.txt')
.then(res => res.text())
.then(data => {text.innerHTML = data })
.catch(er => console.log(er))
}