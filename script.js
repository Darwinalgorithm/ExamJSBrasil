//fetch('./restaurant-bresilien.json')
//.then(response => {
 //     return response.json();
   // })
  //  .then(donnee => console.log(donnee))
   
//bon ça marche. à présent je dois intégrer mes variables dedans si je veux pouvoir les utiliser.
//mes variables :

fetch('./restaurant-bresilien.json')
.then(response => {
      return response.json();
    })
    .then(donnee => {

let nomCommercial = donnee.nomCommercial;
let texteAccroche = donnee.texteAccroche;
let texteBouton = donnee.texteBouton;
let promessesClient = donnee.promessesClient;
let plats = donnee.plats;
let services = donnee.services;
let temoignages = donnee.temoignages;


console.log("Nom Commercial :", nomCommercial);
console.log("Texte Accroche :", texteAccroche);
console.log("Texte Bouton :", texteBouton);
console.log("Promesses Client :", promessesClient);
console.log("Plats :", plats);
console.log("Services :", services);
console.log("Témoignages :", temoignages);
//je suis étonné le console log doit être dans l'accolade.... sinon mes données n'apparaissent plus 
//pourquoi ??? je pensais que les console.log étaient indépendants et permettaient de vérifier les choses
    });

//bref, ça marche on peut passer à l'affichage de ces données dans le dom. 
//je cible à présent la section service pour effectuer le processus, j'englobe la section.

let CarteServiceAdupliquer =
<section>
<h2>SERVICES</h2>

<div class="containerGrid spaceBetween" id="containerServices">
    <div class="box">
        <h3>texte</h3>
        <p>Service 1 description</p>
    </div>
    <div class="box">
        <h3>texte</h3>
         <p>Service 2 description</p>
    </div>
    <div class="box"> 
        <h3>texte</h3>
        <p>Service 3 description</p>
    </div>
</div>
</section>;


document.querySelector("#containerServices").innerHTML+=CarteServiceAdupliquer;
//c'est la formule que Ludivine m'a montré et que j'aime bien car condensée.


