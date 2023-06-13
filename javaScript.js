let dadosImagens= [
    {
        imagem: 'colombiaManchete.webp',
        titulo: 'Novas fotos mostram crianças em avião militar logo após resgate na Colômbia',
        data: '11 de Juho de 2023',
        hiperlink: 'https://g1.globo.com/mundo/noticia/2023/06/11/novas-fotos-mostram-criancas-em-aviao-militar-logo-apos-resgate-na-colombia.ghtml',
    },
    {
        imagem: 'viajanteManchete.webp',
        titulo: 'O homem que viajou para todos os países do mundo sem pegar avião',
        data: '11 de Juho de 2023',
        hiperlink: 'https://g1.globo.com/turismo-e-viagem/noticia/2023/06/11/o-homem-que-viajou-para-todos-os-paises-do-mundo-sem-pegar-aviao.ghtml',
    },
    {
        imagem: 'lgbtManchete.webp',
        titulo: '27ª Parada do Orgulho LGBT+ reúne multidão em SP: Queremos políticas públicas é o tema desta edição',
        data: '11 de Juho de 2023',
        hiperlink: 'https://g1.globo.com/sp/sao-paulo/noticia/2023/06/11/27a-parada-do-orgulho-lgbt-em-sp.ghtml',
    },
];

let indiceDaFotoCorrente = 0;
// ...
let botamAnteriorEl = document.querySelector('#anterior');
let botamProximoEl = document.querySelector('#proximo');
let slideEl = document.querySelector('#trocaImagem');
let linkEl = document.querySelector('#link');
let tituloEl = document.querySelector('#tituloManchete');
let dataEl = document.querySelector('#time');

botamAnteriorEl.addEventListener('click', imagemAnteriorEPosterior);
botamProximoEl.addEventListener('click', imagemAnteriorEPosterior);


function imagemAnteriorEPosterior(event) {
    
    let eventEl = event.currentTarget;
    if (eventEl == botamAnteriorEl) {
        indiceDaFotoCorrente--;
        if (indiceDaFotoCorrente < 0) {
            indiceDaFotoCorrente = 2;
        }
        slideEl.src = dadosImagens[indiceDaFotoCorrente].imagem;
        linkEl.href = dadosImagens[indiceDaFotoCorrente].hiperlink;
        tituloEl.innerHTML = dadosImagens[indiceDaFotoCorrente].titulo;
        dataEl.innerHTML = dadosImagens[indiceDaFotoCorrente].data;
    } else {
        indiceDaFotoCorrente++;
        if (indiceDaFotoCorrente > 2) {
            indiceDaFotoCorrente = 0;
        }
        slideEl.src = dadosImagens[indiceDaFotoCorrente].imagem;
        linkEl.href = dadosImagens[indiceDaFotoCorrente].hiperlink;
        tituloEl.innerHTML = dadosImagens[indiceDaFotoCorrente].titulo;
        dataEl.innerHTML = dadosImagens[indiceDaFotoCorrente].data;
    }
}