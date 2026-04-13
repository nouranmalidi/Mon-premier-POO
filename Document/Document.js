/**
 * Je déclare ma classe Document
 * Je commence par le mot-clé class suivi du nom de ma classe Document
 * Le nom de la classe doit obligatoirement commencer par une majuscule
 */


class Document {
// Je déclare mon constructeur de la classe Document
    constructor(titre, nombrePage, auteur) {
        // Je déclare les propriétés dans le constructeur de ma classe Document
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }
    
}

// Je déclare une méthode de ma classe Document
    description() {
        console.log("Le titre du document est ", this.titre);
        console.log("Le nombre de page du document est ", this.nombrePage);
        console.log("L'auteur du document est ", this.auteur);
    };
        
    // Je crée une instance de ma classe Document
    // document1 est une instance de la classe Document, son titre est "Le Petit Prince", 
    // son nombre de page est 96 et son auteur est "Antoine de Saint-Exupéry"
const document1 = new Document("Le Petit Prince", 96, "Antoine de Saint-Exupéry");
// document2 est une instance de la classe Document, son titre est "Le Seigneur des Anneaux", 
// son nombre de page est 1178 et son auteur est "J.R.R. Tolkien"
const document2 = new Document("Le Seigneur des Anneaux", 1178, "J.R.R. Tolkien");