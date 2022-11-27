const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;

const cit=[
{citation:"On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.",auteur:"Victor Hugo"},
{citation:"Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",auteur:"Coluche"},
{citation:"On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.",auteur:"Victor Hugo"},
{citation:"Un seul être vous manque et tout est dépeuplé.",auteur:"Lamartine"},
{citation:"Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",auteur:"Antoine De Saint-Exupéry"},
{citation:"Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",auteur:"Abbé Pierre"},
{citation:"Le bonheur est parfois caché dans l'inconnu.",auteur:"Victor Hugo"},
{citation:"Mieux vaut une conscience tranquille qu'une destinée prospère. J'aime mieux un bon sommeil qu'un bon lit.",auteur:"Coluche"},
{citation:"Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.",auteur:"Voltaire"},
{citation:"Il n'y a point de bonheur sans courage, ni de vertu sans combat.",auteur:"Jean-Jacques Rousseau"},

{citation:"Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l'avenir.",auteur:"Jean Jaurès"}
];


function randomQuote(){
		const index=Math.floor(Math.random()*cit.length);
        quoteText.innerText = cit[index].citation;
        authorName.innerText = cit[index].auteur;
}


copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


quoteBtn.addEventListener("click", randomQuote);