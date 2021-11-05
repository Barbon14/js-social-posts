// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine(non tutti i post devono avere una immagine)[quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// creo un array di oggetti con le informazioni che mi servono
const posts = [
    {
        'autore': 'Phil Mangione',
        'fotoProfilo': 'https://unsplash.it/300/300?image=15',
        'data': '4 mesi fa',
        'testo': 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'immagine': 'https://unsplash.it/600/300?image=171',
        'likes': 80
    },
    {
        'autore': 'Mattia Barbieri',
        'fotoProfilo': 'https://unsplash.it/300/300?image=14',
        'data': '5 mesi fa',
        'testo': 'prova testo 1 prova testo 1 prova testo 1 prova testo 1 prova testo 1 prova testo 1',
        'immagine': 'https://unsplash.it/600/300?image=172',
        'likes': 70
    },
    {
        'autore': 'Phil Mangione',
        'fotoProfilo': 'https://unsplash.it/300/300?image=15',
        'data': '6 mesi fa',
        'testo': 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'immagine': 'https://unsplash.it/600/300?image=173',
        'likes': 90
    },
    {
        'autore': 'Mattia Barbieri',
        'fotoProfilo': 'https://unsplash.it/300/300?image=14',
        'data': '7 mesi fa',
        'testo': 'prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 prova testo 2 ',
        'immagine': '',
        'likes': 60
    },
    {
        'autore': 'Phil Mangione',
        'fotoProfilo': 'https://unsplash.it/300/300?image=15',
        'data': '8 mesi fa',
        'testo': 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'immagine': 'https://unsplash.it/600/300?image=174',
        'likes': 100
    },
];

/* genero in pagina i post
- uso un ciclo for per generare i post con le informazioni degli oggetti
- li stampo in pagina */
const cont = document.getElementById("container");
for (let i = 0; i < posts.length; i++) {
    
    let {autore, fotoProfilo, data, testo, immagine, likes} = posts[i];
    console.log(fotoProfilo);
    
    cont.innerHTML +=`
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${fotoProfilo}" alt="${autore}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">
                        ${autore}
                    </div>
                    <div class="post-meta__time">
                        ${data}
                    </div>
                </div>
            </div>
        </div>
        <div class="post__text">
            ${testo}
        </div>
        <div class="post__image">
            <img src="${immagine}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div>
        </div>
    </div>
    `
 }

/*aggiungo un eventlistener al pulsante mi piace
- incremento il contatore e aggiungo una classe per dare il feedback all'utente */