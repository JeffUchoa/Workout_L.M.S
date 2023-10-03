let enviar = document.getElementById("enviar");
let nome = document.getElementById("nome");
let nome_header = document.getElementById("nome_header");
let modal = document.getElementById("modal");
let grupo_ativo = 0;

function mandar_nome(){
    event.preventDefault();
    nome_header.textContent = nome.value;
    modal.classList.add('desativo');
}

enviar.addEventListener("click", mandar_nome);


let grupos_geral = document.getElementById("grupos");
let icone = document.getElementById("icone");

function abrir_grupo(numero){
    pegar_mensagens(numero);
    grupo_ativo = numero;
    console.log(grupo_ativo);
}

function criargrupo(grupos){
    grupos_geral.innerHTML = "";
    for(let grupo of grupos){
        let div_grupo = document.createElement("div");
        div_grupo.className = "grupo";

        let div_icone = document.createElement("div");
        div_icone.className = "imagem_grupo";
        let icone_copy = icone.cloneNode(true);
        div_icone.appendChild(icone_copy);
        

        let div_nomegrupo = document.createElement("div");
        div_nomegrupo.className = "nome_grupo";

        div_nomegrupo.textContent = grupo.nome
        
        div_grupo.appendChild(div_icone);
        div_grupo.appendChild(div_nomegrupo);
        div_grupo.addEventListener("click",()=>{abrir_grupo(grupo.id)});
        grupos_geral.appendChild(div_grupo);
    }
}



async function request(){
    try{
        let response = await axios({
            method: "GET",
            url: "https://server-json-lms.herokuapp.com/grupos"
        });
        criargrupo(response.data);
        
    }catch(e){
        console.log(e);
    }
}
request();

let botao_criar_grupo = document.getElementById("criar-grupo");
let modal_criar_grupo = document.getElementById("modal_criar_grupo");
let enviar_grupo = document.getElementById("enviar_grupo");

function modal_grupo(){
    event.preventDefault();
    modal_criar_grupo.className = "modal active"
}

function criar_novo_grupo(){
    event.preventDefault();
    modal_criar_grupo.className = "modal criar_grupo"
   post();
}

botao_criar_grupo.addEventListener("click", modal_grupo);
enviar_grupo.addEventListener("click", criar_novo_grupo);

let nome_grupo = document.getElementById("nome_grupo");

async function post(){
    event.preventDefault();
    
    let nome = nome_grupo.value;
    try{
        let response = await axios({
            method: "POST",
            url: "https://server-json-lms.herokuapp.com/grupos",
            data:{
                nome: nome
            }
        });
        request();
    }catch(e){
        console.log(e);
    }
}

let mensagens_grupo = document.getElementById("mensagens");


function criar_mensagens(mensagens){
    mensagens_grupo.innerHTML = "";
    for(let mensagem of mensagens){
        let div_balao = document.createElement("div");
        div_balao.className = "balao-texto";

        let div_nome_usuario = document.createElement("div");
        div_nome_usuario.className = "nome";

        div_nome_usuario.textContent = mensagem.nome;

        let div_mensagem = document.createElement("div");
        div_mensagem.className = "mensagem";

        div_mensagem.textContent = mensagem.corpo;

        div_balao.appendChild(div_nome_usuario);
        div_balao.appendChild(div_mensagem);
        mensagens_grupo.appendChild(div_balao);
    }
}

async function pegar_mensagens(id){
    try{
        let response = await axios({
            method: "GET",
            url: "https://server-json-lms.herokuapp.com/grupos/"+id+"/mensagens"
        });
        criar_mensagens(response.data);
    }catch(e){
        console.log(e);
    }
}



let mensagem_enviada = document.getElementById("mensagem_enviada");
let botao_enviar = document.getElementById("enviar2");


async function mandar_mensagem_grupo(id){
    
    
    try{
        let response = await axios({
            method: "POST",
            url: "https://server-json-lms.herokuapp.com/mensagens",
            data:{
                nome: nome_header.textContent ,
                corpo: mensagem_enviada.value ,
                grupoId: id
            }
        });
        pegar_mensagens(grupo_ativo);
    }catch(e){
        console.log(e);
    }
}

botao_enviar.addEventListener("click", ()=>{mandar_mensagem_grupo(grupo_ativo)});