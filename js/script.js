
function sendForm(e){
e.preventDefault();
alert('Заявка відправлена!');
}

function scrollToForm(){
document.getElementById('form').scrollIntoView({behavior:'smooth'});
}
