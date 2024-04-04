const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) { //verificando se existe a classe fa-moon do icon
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark'); //Alterando para o modo dark

        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});