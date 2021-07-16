const form = document.getElementById('form');
const check = document.getElementById('checkbox');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  
  if(nome && email) {
    let data = {
      nome,
      email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = `<img src="assets/load.gif" alt=""style="width: 30px;">`;

    content.innerHTML = carregando;

    let retrieved = localStorage.getItem('lead');
    const { nome: name, email: mail } = JSON.parse(retrieved);

    let time = setTimeout(() => {
      content.innerHTML = `Seja bem-vindo <span>${name}</span>!</br>E-mail <span>${mail}</span> cadastrado com sucesso!`;
    }, 2000);
  } else {
    let error = document.getElementById('errorMsg');
    error.style.display = "block";
    let message = `<p>Preencha todos os campos!</p>`; 
    error.innerHTML = message;
    setTimeout(() => {
      error.style.display = "none";
    }, 1500);
  }
});