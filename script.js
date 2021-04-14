/*
MIT License

Copyright (c) 2021 JohnjiRomanji

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const options=['rock', 'paper', 'scissors'];
const emojis={
	'rock':"🗿", 
	'paper':"📄",
	'scissors':"✂️"
};


function on_load() {
	if (!isNaN(parseInt(localStorage.cscore))) {
		let cscore = parseInt(localStorage.cscore)
		let hscore = parseInt(localStorage.hscore)
		/*if (cscore.isNan || cscore==null) {
			localStorage.cscore=0
			cscore = 0
		}
		if (hscore.isNan || hscore==null) {
			localStorage.hscore=0
			hscore = 0
		}*/
		document.getElementById('hscorel').innerHTML=hscore.toString()
		document.getElementById('cscorel').innerHTML=cscore.toString()
	}
	
}

async function resetScore() {
	let i = document.getElementById('warning');
	if (i.style.display=='block') {
		localStorage.setItem('cscore', 0);
		localStorage.setItem('hscore', 0);
		i.style.display='none';
		document.getElementById('hscorel').innerHTML='0';
		document.getElementById('cscorel').innerHTML='0';
		document.getElementById('hemoji').innerHTML='⠀';
		document.getElementById('cemoji').innerHTML='⠀';
		document.getElementById('sign').innerHTML=' - ';
		document.getElementById('result').innerHTML='Click any of the buttons to play!';
		document.getElementById('result').style.color='white';
	} else {
		i.style.display='block';
		await sleep(120);
		i.style.display='none';
	}
}

function gen() {
	var option=options[Math.floor(Math.random() * options.length)];
	return option;
}

function main(choice) {
	let i=gen();
	document.getElementById('hemoji').innerHTML=emojis[choice];
	document.getElementById('cemoji').innerHTML=emojis[i];
	if (choice==i) {
		document.getElementById('sign').innerHTML='=';
		let r = document.getElementById('result');
		r.innerHTML='You Tied! 🤷';
		r.style.color='white';
		return
	} else {
		if ((i=='rock' && choice=='scissors') || (i=='paper' && choice=='rock') || (i=='scissors' && choice=='paper')) {
			let compscore=document.getElementById('cscorel').innerHTML;
			document.getElementById('sign').innerHTML='<'
			let intc=parseInt(compscore);
			intc++;
			localStorage.cscore=intc.toString();
			document.getElementById('cscorel').innerHTML=intc.toString();
			let r = document.getElementById('result');
			r.innerHTML='You Lost! 😔';
			r.style.color='#FF6347';
			localStorage.setItem('cscore', intc);
		} else {
			let humscore=document.getElementById('hscorel').innerHTML;
			document.getElementById('sign').innerHTML='>'
			let intc=parseInt(humscore);
			intc++;
			localStorage.hscore=intc.toString();
			document.getElementById('hscorel').innerHTML=intc.toString();
			let r = document.getElementById('result');
			r.innerHTML='You Won! 🎉';
			r.style.color='#03C04A';
			localStorage.setItem('hscore', intc);
			
		}
	}
 	return 
}
function r() {
	let i=gen();
	let choice=gen()
	document.getElementById('hemoji').innerHTML=emojis[choice];
	document.getElementById('cemoji').innerHTML=emojis[i];
	if (choice==i) {
		document.getElementById('sign').innerHTML='='
		let r = document.getElementById('result');
		r.innerHTML='You Tied! 🤷';
		r.style.color='white';
		return
	} else {
		if ((i=='rock' && choice=='scissors') || (i=='paper' && choice=='rock') || (i=='scissors' && choice=='paper')) {
			let compscore=document.getElementById('cscorel').innerHTML;
			document.getElementById('sign').innerHTML='<'
			let intc=parseInt(compscore);
			intc++;
			localStorage.cscore=intc;
			document.getElementById('cscorel').innerHTML=intc.toString();
			let r = document.getElementById('result');
			r.innerHTML='You Lost! 😔';
			r.style.color='#FF6347';
			localStorage.setItem('cscore', intc);
			
		} else {
			let humscore=document.getElementById('hscorel').innerHTML;
			let intc=parseInt(humscore);
			intc++;
			localStorage.hscore=intc;
			document.getElementById('sign').innerHTML='>'
			document.getElementById('hscorel').innerHTML=intc.toString();
			let r = document.getElementById('result');
			r.innerHTML='You Won! 🎉';
			r.style.color='#03C04A';
			localStorage.setItem('hscore', intc);
			
		}
	}
 	return 
}


 

