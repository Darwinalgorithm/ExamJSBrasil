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
//c du genre la donnée n'existe que dans then pour l'instant, let et pas var....
    });

//bref, ça marche on peut passer à l'affichage de ces données dans le dom. 
//je cible à présent la section service, en particulier la div pour effectuer le processus.
//on n'oublie pas les antiquotes !

// face aux difficultés : fonction fondamentale :
// Fonction générale pour injecter des éléments dans le DOM
function ajouterElementsAuDOM(liste, conteneurId, genererHTML) {
    const conteneur = document.querySelector(`#${conteneurId}`);
    conteneur.innerHTML = ''; // Vide le conteneur avant d'ajouter les éléments
    liste.forEach(item => {
      conteneur.innerHTML += genererHTML(item);
    });
  }
  
  // Fonctions pour générer le HTML de chaque section
  function genererHTMLService(service) {
    return `
      <div class="box">
        <h3>${service.nom}</h3>
        <p>${service.desc}</p>
      </div>
    `;
  }
  
  function genererHTMLPlat(plat) {
    return `
      <div class="box">
        <img src="${plat.imageUrl}" alt="${plat.nom}">
        <h3>${plat.nom}</h3>
        <p>${plat.desc}</p>
      </div>
    `;
  }
  
  function genererHTMLPromesse(promesse) {
    return `<p>${promesse}</p>`;
  }
  
  function genererHTMLTemoignage(temoignage) {
    return `
      <div class="box">
        <h4>${temoignage.prenom}</h4>
        <p>${temoignage.typeExperience}</p>
        <p>${temoignage.commentaire}</p>
        <p>Note : ${'⭐'.repeat(temoignage.note)}</p>
      </div>
    `;
  }
  
  // Fetch pour charger les données JSON et injecter les sections
  fetch('./restaurant-bresilien.json')
    .then(response => response.json())
    .then(donnee => {
      // Injecter les services
      ajouterElementsAuDOM(donnee.services, 'containerServices', genererHTMLService);
  
      // Injecter les plats
      ajouterElementsAuDOM(donnee.plats, 'containerPlats', genererHTMLPlat);
  
      // Injecter les promesses des clients
      ajouterElementsAuDOM(donnee.promessesClient, 'containerPromesses', genererHTMLPromesse);
  
      // Injecter les avis clients
      ajouterElementsAuDOM(donnee.temoignages, 'containerTemoignages', genererHTMLTemoignage);
    })