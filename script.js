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


    function ajouterElementsAuDOM(liste, conteneurId, genererHTML) {
        const conteneur = document.querySelector(`#${conteneurId}`);
      
        // Vide le conteneur pour éviter les doublons
        conteneur.innerHTML = '';
      
        // Ajoute chaque élément au conteneur
        liste.forEach(item => {
          conteneur.innerHTML += genererHTML(item);
        });
      }
      
      function genererHTMLPromesse(promesse) {
        return `<p>${promesse}</p>`;
      }
      
      fetch('./restaurant-bresilien.json')
        .then(response => response.json())
        .then(donnee => {
          // Ajoute les promesses clients au conteneur
          ajouterElementsAuDOM(donnee.promessesClient, 'containerPromesses', genererHTMLPromesse);
        })
        .catch(error => console.error("Erreur lors du chargement :", error));
        
        fetch('./restaurant-bresilien.json')
        .then(response => response.json())
        .then(donnee => {
          // Services
          ajouterElementsAuDOM(donnee.services, 'containerServices', genererHTMLService);
      
          // Promesses clients
          ajouterElementsAuDOM(donnee.promessesClient, 'containerPromesses', genererHTMLPromesse);
      
          // Témoignages
          ajouterElementsAuDOM(donnee.temoignages, 'containerTemoignages', genererHTMLTemoignage);
        })
      
        function genererHTMLTemoignage(temoignage) {
            return `
              <div class="box">
                <h4>${temoignage.prenom}</h4>
                <p>${temoignage.typeExperience}</p>
                <p>${temoignage.commentaire}</p>
                <p>Note : ${temoignage.note}</p>
              </div>
            `;
          }

    /*
fetch('./restaurant-bresilien.json')
  .then(response => response.json())
  .then(donnee => {

    let ConteneurHTMLService = document.getElementById('containerServices');


    donnee.services.forEach(service => {
      const serviceHTML = `
        <div class="box">
          <h3>${service.nom}</h3>
          <p>${service.desc}</p>
        </div>
      `;
      ConteneurHTMLService.innerHTML += serviceHTML;
    });
  })

document.querySelector("#containerServices").innerHTML+=CarteServiceAdupliquer;
//c'est la formule que Ludivine m'a montré et que j'aime bien car condensée

//Passons aux témoignages


    function genererHTMLPromesse(promesse) {
        return `<p>${promesse}</p>`;
      }
      fetch('./restaurant-bresilien.json')
  .then(response => response.json())
  .then(donnee => {
    // Ajoute les promesses clients au conteneur
    ajouterElementsAuDOM(donnee.promessesClient, 'containerPromesses', genererHTMLPromesse);
  })*/








// je passe aux avis clients 


/*
fetch('./restaurant-bresilien.json')
  .then(response => response.json())
  .then(donnee => {

    let conteneurHTMLTemoignages = document.getElementById('containerTemoignages');
  
    donnee.temoignages.forEach(temoignage => {
      const CarteTemoignageAdupliquer = ` 
    <div class="box">
        <h4>${temoignage.prenom}</h4>
        <p>${temoignage.typeExperience}</p>
        <p>${temoignage.commentaire}</p>
        <p>${temoignage.note}</p>
    </div>
    `;
    conteneurHTMLTemoignages.innerHTML += CarteTemoignageAdupliquer;
  });
})

document.querySelector("#containerTemoignages").innerHTML+=CarteTemoignageAdupliquer;*/