/**
 * Je déclare ma classe Document
 * Je commence par le mot-clé class suivi du nom de ma classe Document
 * Le nom de la classe doit obligatoirement commencer par une majuscule
 */

class Document {
    // Constructeur
    constructor(titre, nombrePage, auteur) {
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }

    // Méthode description
    description() {
        console.log("Le titre du document est", this.titre);
        console.log("Le nombre de pages du document est", this.nombrePage);
        console.log("L'auteur du document est", this.auteur);
    }

    // Méthode author
    author() {
        console.log("L'auteur du document est", this.auteur);
    }

    // Méthode titre
    afficherTitre() {
        console.log("Le titre du document est", this.titre);
    }
// Je récupère le titre du document1 et je l'affiche dans la console
getafficherTitre() {
    console.log("Le titre du document est", this.titre);
    return this.titre;  }



    // Mes méthodes SETTER,ils permettent de modifier les propriétés d'un objet après sa création
    setTitre(nouveauTitre) {
       console.log("Titre avant modification:", this.titre);
        
       this.titre = nouveauTitre;
         console.log("Titre après modification:", this.titre);
    }

    // Méthode pour modifier l'auteur du document
    setAuteur(nouvelAuteur) {
        console.log("Auteur avant modification:", this.auteur);
        this.auteur = nouvelAuteur;
        console.log("Auteur après modification:", this.auteur);
    }


}

// Création des instances
// Je crée une instance de ma classe Document
    // document1 est une instance de la classe Document, son titre est "Le Petit Prince", 
    // son nombre de page est 96 et son auteur est "Antoine de Saint-Exupéry"
const document1 = new Document("Le Petit Prince", 96, "Antoine de Saint-Exupéry");

// document2 est une instance de la classe Document, son titre est "Le Seigneur des Anneaux", 
// son nombre de page est 1178 et son auteur est "J.R.R. Tolkien"
const document2 = new Document("Le Seigneur des Anneaux", 1178, "J.R.R. Tolkien");

// Appel des méthodes
document1.description();
document2.description();
document1.author();
document2.author();
document1.afficherTitre();
document2.afficherTitre();

// Appel de la méthode SETTER pour modifier le titre du document1
document1.setTitre("Le Petit Du Cartier ");
console.log(document1.titre);

document1.setAuteur("BOUBACAR DIALLO");
console.log(document1.auteur);



/**
 * Extension de la classe Document  qui est la classe mère
 * Il s'agit de créer des classes "enfants" qui sont isssues d'une classe mère Document
 * Pour créer la classe "enfant", j'utilise deux mots-clés : extends et class  
 */

class Livret extends Document {
   // Constructeur de la classe Livret
    constructor(titre, nombrePage, auteur, maisonEdition) {
       
       // J'utilise la fonction super() pour indiquer les propriétés héritées de la classe superieure Document
       // Pas besoin de réécrire this.titre, this.nombrePage et this.auteur dans la classe Livret, 
       // je les récupère de la classe Document grâce à super()
        super(titre, nombrePage, auteur);

        // Propriété spécifique à la classe Livret
        this.maisonEdition = maisonEdition;
    }
}



// Je créer un objet de la classe Livret
const livret1 = new Livret("Le Petit Prince", 96, "Antoine de Saint-Exupéry", "Gallimard");
console.log(livret1);

livret1.description();
livret1.author();
livret1.afficherTitre();

console.log("Nombre de page:", livret1.nombrePage);
console.log("Maison d'édition:", livret1.maisonEdition);    
console.log(livret1.getafficherTitre());
console.log(document1.getafficherTitre());





