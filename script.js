function init() {
	document.getElementById('login-btn').addEventListener('click', function() {
		if (document.getElementById('input-email').value = "tryber@teste.com" && document.getElementById('input-password').value === "123456") {
			alert('Olá, Tryber!')
		}
		else {
			alert('Email ou senha inválidos.')
		}
	})
}

window.onload = init()
