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


 

