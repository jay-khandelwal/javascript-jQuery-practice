var para = document.getElementById('para');


para.innerHTML = window.screen.height +' '+ window.screen.width + '' + window.location +''+document.URL;
//window.open('https://jaykhandelwal.herokuapp.com')

var a = document.getElementById('ekk');
a.className='one';

var b = document.getElementsByClassName('myli')[0];
b.className=('two');


var c = document.getElementById('f');
//c.className='four';

var d = c.nextSibling;
d.className = 'three';

function formclick(e){
  e.preventDefault();
  paragraph = document.getElementById('para1');
  paragraph.textContent =this.value;
};


//for form
var btn =document.getElementById('btn');
btn.onclick = formclick;


