const btnEnviar = document.getElementById('submit-btn');
const chkBox = document.getElementById('agreement');

function login() {
	document.getElementById('login-btn').addEventListener('click', function() {
		if (document.getElementById('input-email').value = "tryber@teste.com" && document.getElementById('input-password').value === "123456") {
			alert('Olá, Tryber!')
		}
		else {
			alert('Email ou senha inválidos.')
		}
	})
}

function verifyButton () {
	if (chkBox.checked) {
		btnEnviar.disabled = false;
	}
}

function deletP() {
	if (document.getElementById('counter')) {
		document.getElementById('counter').remove()
	}
}



function cont(event) {
	deletP()	
	let tagP = document.createElement('p')
	tagP.innerText = (500 - document.getElementsByTagName('textarea')[0].value.length)
	tagP.id = 'counter'
	if (document.getElementsByTagName('textarea')[0].value.length === 0) {
		tagP.style.color = 'green'
		document.getElementsByClassName('class-3')[0].appendChild(tagP)
	} else if (document.getElementsByTagName('textarea')[0].value.length > 0 && document.getElementsByTagName('textarea')[0].value.length <= 200) {
		tagP.style.color = 'green'
		document.getElementsByClassName('class-3')[0].appendChild(tagP)
	} else if (document.getElementsByTagName('textarea')[0].value.length > 200 && document.getElementsByTagName('textarea')[0].value.length <= 450) {
		tagP.style.color = 'blue'
		document.getElementsByClassName('class-3')[0].appendChild(tagP)
	} else {
		tagP.style.color = 'red'
		document.getElementsByClassName('class-3')[0].appendChild(tagP)
	}
	
}

function init() {
	login()
	chkBox.addEventListener('click', verifyButton);
	document.getElementsByTagName('textarea')[0].addEventListener('keyup', cont)
}



window.onload = init()
