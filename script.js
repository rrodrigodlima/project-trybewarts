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

function init() {
	login()
	chkBox.addEventListener('click', verifyButton);
}

window.onload = init()
