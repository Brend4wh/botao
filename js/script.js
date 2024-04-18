/*fazendo a o body mudar de cor quando passamos o mouse em cima do botão*/
function corbody(corzinhadobody){
    if (corzinhadobody) {
        document.body.style.backgroundColor = "#ffc0cb"; 
    }else{
    };
}

const botaozinho = () =>{
    return document.querySelector('.bnt-qualquer');
}

const outrobutton = (texto, cor) =>{

    const botaonormal = document.createElement('button');
    botaonormal.classList.add('bnt-qualquer');

    botaonormal.textContent = texto;

    botaonormal.style.backgroundColor = cor;

    botaonormal.addEventListener('click', () => {
        alert(`você clicou em mim! :D`);

    });

    return botaonormal;

};

const bnt_qualquer1 = outrobutton('Clique aqui agora!', '#92669b');
document.body.appendChild(bnt_qualquer1);

