let botao = document.getElementById("hambur");
let menulateral= document.querySelector(".menulate");

let feed = document.querySelector(".feed");
let feed2 = document.querySelector(".feed .postagens");

let postar = document.getElementById("postar");
let modal = document.querySelector(".modal");

let nome = document.querySelector ("#nome");
let mensagem1 = document.querySelector ("#mensagem");
let mandar = document.querySelector ("#envia");
let postagens = document.querySelector ("#postagens");

let destaque1 = document.querySelectorAll (".destaques .post")
let destaque2 = document.querySelector(".destaques")

let direita = document.querySelector(".pra-frente");
let esquerda = document.querySelector(".pra-traz");

let slides = document.querySelectorAll(".image-slider .slides .slide");

let div_bolinhas = document.querySelector(".image-slider .bolinhas");
let quant_bolinhas = 0

let index = 0;





while(quant_bolinhas<slides.length){
    let div_bolinha = document.createElement("div");
    div_bolinha.classList.add('bolinha');
    div_bolinhas.appendChild(div_bolinha);
    quant_bolinhas += 1;
}
let div_todas_bolinhas = document.querySelectorAll(".image-slider .bolinhas .bolinha");
div_todas_bolinhas[index].classList.toggle('active');



function abrir_menu(){
    menulateral.classList.toggle("active");
    feed.classList.toggle("active");
    console.log(menulateral.classList);
}

function abrir_modal(){
    modal.classList.toggle("active");
}

function postar_mensagem(){
    event.preventDefault();
    modal.classList.toggle("active");
    let mensagem = mensagem1.value;
    let nome2 = nome.value;

    let div_post = document.createElement("div");
    div_post.classList.add('post');
    
    let div_nome = document.createElement("div");
    div_nome.classList.add('name');

    let div_mensagem = document.createElement("div");
    div_mensagem.classList.add('msg');
    
    let name = document.createTextNode(nome2);
    let mensg = document.createTextNode(mensagem);

    div_nome.appendChild(name);
    div_mensagem.appendChild(mensg);
    div_post.appendChild(div_nome);
    div_post.appendChild(div_mensagem);

    feed2.appendChild(div_post);
}

function destaques(){
    let conteudos = document.querySelectorAll(".feed .postagens .post");
    let destaque = conteudos[Math.floor(Math.random() * conteudos.length)];
    
    if(conteudos[0] == null){
        
    }
    else{
        feed2.appendChild(destaque2.firstElementChild);
        destaque2.appendChild(destaque);
    }
}

function virar_esquerda(){
    
    // if(index<(1)){
    //     slides[index].classList.toggle('active2');
    //     div_todas_bolinhas[index].classList.toggle('active');

    //     slides[slides.length-1].classList.toggle('active2');
    //     slides[slides.length-1].classList.toggle('desativado');

    //     slides[index].classList.toggle('desativado');

    //     index = slides.length-1;
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     console.log(index);
        
    // }
    // else if(index<(slides.length)){
    //     div_todas_bolinhas[index].classList.toggle('active');
        
    //     slides[index].classList.toggle('active2');
    //     slides[index - 1].classList.toggle('active2');
    //     slides[index].classList.toggle('desativado');
    //     slides[index - 1].classList.toggle('desativado');
    //     index = index - 1;
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     console.log(index);
    // }

    slides[index].className = "slide meio_direita";
    div_todas_bolinhas[index].classList.remove("active");
    index -= 1;

    if(index < 0){
        index = slides.length - 1;
    }

    slides[index].className = "slide esquerda_meio";
    div_todas_bolinhas[index].classList.add("active");
}

function virar_direita(){
    
    // if(index<(slides.length - 1)){
    //     div_todas_bolinhas[index].classList.toggle('active');

    //     slides[index].className = ".image-slider .meio-esquerda"
        
    //     // slides[index+1].classList.toggle('active2');

    //     // slides[index].classList.toggle('desativado');
    //     // slides[index+1].classList.toggle('desativado');
    //     index= index +1;
    //     index = index%slides.length;

    //     slides[index].className = ".image-slider .direita-meio"
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     console.log(index);
    // }
    // else if(index==slides.length - 1){
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     div_todas_bolinhas[index].classList.toggle('active');

    //     // slides[index].classList.toggle('active2');
    //     // slides[index].classList.toggle('desativado');
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     // slides[0].classList.toggle('active2');
    //     // slides[0].classList.toggle('desativado');
    //     index = 0;
    //     div_todas_bolinhas[index].classList.toggle('active');
    //     console.log(index);
    // }

    slides[index].className = "slide meio_esquerda";
    div_todas_bolinhas[index].classList.remove("active");
    index += 1;

    index = index%slides.length;
    slides[index].className = "slide direita_meio";
    div_todas_bolinhas[index].classList.add("active");
}

botao.addEventListener("click", abrir_menu);
postar.addEventListener("click", abrir_modal);
mandar.addEventListener("click", postar_mensagem);
esquerda.addEventListener("click", virar_esquerda);
direita.addEventListener("click", virar_direita);
setInterval(destaques, 2000);