
const button = document.getElementById('submit-button');

button.addEventListener('click',validateForm)

function validateForm(){
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const anoDeNascimento = anoAtual - year;
    const mesDeNascimento = mesAtual - month;
    const diaDeNascimento = diaAtual - day;

    const years = document.getElementById('send-year');
    years.innerHTML = anoDeNascimento;

    const months = document.getElementById('send-months');
    months.innerHTML = mesDeNascimento;

    const days = document.getElementById('send-days');
    days.innerHTML = diaDeNascimento;

   console.log(anoDeNascimento);
}
