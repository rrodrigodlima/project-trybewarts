const btnEnviar = document.getElementById('submit-btn');
const chkBox = document.getElementById('agreement');
const inputEmailValue = document.getElementById('input-email2');
const inputPassword = document.getElementById('input-password');
const textareaGet = document.getElementsByTagName('textarea')[0];
let numLista = 0;
let num = 0;
const listaInfo = {};
let teste = 0;
const lista = [];

function login() {
  document.getElementById('login-btn').addEventListener('click', () => {
    if (inputEmailValue.value === 'tryber@teste.com' && inputPassword.value === '123456') {
      alert('Olá, Tryber!');
      console.log(inputEmailValue);
    } else {
      alert('Email ou senha inválidos.');
      console.log(inputEmailValue);
    }
  });
}

function verifyButton() {
  if (num % 2 === 0) {
    btnEnviar.disabled = false;
    btnEnviar.style.backgroundColor = 'rgb(81, 74, 146)';
    num += 1;
  } else {
    btnEnviar.disabled = true;
    btnEnviar.style.backgroundColor = 'grey';
    num += 1;
  }
}

function deletP() {
  if (document.getElementById('counter')) {
    document.getElementById('counter').remove();
  }
}

function cont() {
  deletP();
  const tagP = document.createElement('p');
  tagP.innerText = (500 - document.getElementsByTagName('textarea')[0].value.length);
  tagP.id = 'counter';
  if (textareaGet.value.length > 0 || textareaGet.value.length === 0) {
    tagP.style.color = 'black';
    document.getElementsByClassName('class-3')[0].appendChild(tagP);
  }
  // } else if (document.getElementsByTagName('textarea')[0].value.length > 0 && document.getElementsByTagName('textarea')[0].value.length <= 200) {
  //   tagP.style.color = 'black';
  //   document.getElementsByClassName('class-3')[0].appendChild(tagP);
  // } else if (document.getElementsByTagName('textarea')[0].value.length > 200 && document.getElementsByTagName('textarea')[0].value.length <= 450) {
  //   tagP.style.color = 'blue';
  //   document.getElementsByClassName('class-3')[0].appendChild(tagP);
  // } else {
  //   tagP.style.color = 'red';
  //   document.getElementsByClassName('class-3')[0].appendChild(tagP);
  // }
}

function deleteMain() {
  // document.getElementsByTagName('main')[0].remove()
  document.getElementById('evaluation-form').style.display = 'none';
}

function verificacao() {
  if (teste === 0) {
    document.getElementsByTagName('main')[0].style.flexDirection = 'row-reverse';
    teste += 1;
  }
}

function nextPage() {
  let index = 0;
  for (index = 0; index < 7; index += 1) {
    const tagP = document.createElement('p');
    tagP.className = 'p-final-info';
    document.getElementById('form-data').appendChild(tagP);
    console.log('teste');
    verificacao();
  }
  const pFinal = document.getElementsByClassName('p-final-info');
  pFinal[0].innerText = `Nome: ${listaInfo.name} ${listaInfo.lastname}`;
  pFinal[1].innerText = `Email: ${listaInfo.email}`;
  pFinal[2].innerText = `Casa: ${listaInfo.casa}`;
  pFinal[3].innerText = `Família: ${listaInfo.family}`;
  pFinal[4].innerText = `Matérias:${listaInfo.check}`;
  pFinal[5].innerText = `Avaliação: ${listaInfo.rate}`;
  pFinal[6].innerText = `Observações: ${listaInfo.textarea}`;
}

function saveInfo() {
  let index = 0;
  for (index = 0; index < (document.getElementsByClassName('saved-input-1').length - 1); index += 1) {
    numLista = index;
    if (document.getElementsByClassName('saved-input-1')[numLista].type === 'radio') {
      if (document.getElementsByClassName('saved-input-1')[numLista].checked === true) {
        // listaInfo.push(document.getElementsByClassName('saved-input-1')[numLista].value)
        listaInfo[document.getElementsByClassName('saved-input-1')[numLista].name] = document.getElementsByClassName('saved-input-1')[numLista].value;
      }
    } else if (document.getElementsByClassName('saved-input-1')[numLista].type === 'checkbox') {
      if (document.getElementsByClassName('saved-input-1')[numLista].checked === true) {
        lista.push(` ${document.getElementsByClassName('saved-input-1')[numLista].value}`);
        listaInfo[document.getElementsByClassName('saved-input-1')[numLista].name] = lista;
        console.log(lista);
      }
    } else {
      listaInfo[document.getElementsByClassName('saved-input-1')[numLista].name] = document.getElementsByClassName('saved-input-1')[numLista].value;
    }
  }
}

function submitButton(event) {
  event.preventDefault();
  saveInfo();
  deleteMain();
  const tagSection = document.createElement('section');
  tagSection.id = 'form-data';
  document.getElementsByTagName('main')[0].appendChild(tagSection);
  nextPage();
}

function init() {
  login();
  chkBox.addEventListener('click', verifyButton);
  document.getElementsByTagName('textarea')[0].addEventListener('keyup', cont);
  document.getElementById('submit-btn').addEventListener('click', submitButton);
}

window.onload = init;
