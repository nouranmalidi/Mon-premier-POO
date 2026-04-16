class Television {
    // Constructeur
    constructor(taille, couleur, poids,fabricant) {
       // Propriétés de la classe Television
        this.taille = taille;
        this.couleur = couleur;
        this.poids = poids;
        this.fabricant = fabricant;
    }

    // Méthode allumer
    allumer() {
        console.log("Il a allumé la télévision de la marque", this.fabricant);
    }

    // Méthode eteindre
    eteindre() {
        console.log("Il a éteint la télévision de la marque", this.fabricant);
    }

}
// Je declare la classe Ecran qui hérite de la classe Television, 
// elle a les propriétés de la classe Television et des propriétés spécifiques à la classe Ecran
class Ecran extends Television {
   // Constructeur de la classe Livret
    constructor(taille, couleur, poids, fabricant,resolution,WiFi,nbPortUSB,eteindrePortHDMI) {
       
       // J'utilise la fonction super() pour indiquer les propriétés héritées de la classe superieure Televison
       // Pas besoin de réécrire this.taille, this.couleur et this.poids dans la classe Ecran, 
       // je les récupère de la classe Television grâce à super()
        super(taille, couleur, poids, fabricant);

        // Propriété spécifique à la classe Ecran
        this.resolution = resolution;
        this.WiFi = WiFi;
        this.nbPortUSB = nbPortUSB;
        this.eteindrePortHDMI = eteindrePortHDMI;
    }

    // Méthode parler
    parler() {
        console.log("Le fabricant de l'écran est", this.fabricant);
    }

    // Méthode reconnaitreVoix
    reconnaitreVoix() {
        console.log("C'est la voix du fabricant", this.fabricant);
    }
    

    // Méthode reveiller
    reveiller() {
        console.log("Le fabricant de l'écran est", this.fabricant);
    }

    

}

// Création d'une instance de la classe Television
const tele1 = new Television(55, "noir", 15, "Samsung");
const tele2 = new Television(65, "blanc", 20, "LG");
tele1.allumer();
tele1.eteindre();
tele2.allumer();
tele2.eteindre();

// Méthode pour récupérer la taille de la télévision
Television.prototype.getTaille = function() { // Prototype pour ajouter une méthode à la classe Television
    return this.taille;
}

// Méthode pour récupérer la couleur de la télévision   
Television.prototype.getCouleur = function() {
    return this.couleur;
}
// Méthode pour récupérer le poids de la télévision
Television.prototype.getPoids = function() {
    return this.poids;
}

// Méthode pour récupérer le fabricant de la télévision
Television.prototype.getFabricant = function() {
    return this.fabricant;
}

// Méthode pour modifier la taille de la télévision 
Television.prototype.modifierTaille = function(nouvelleTaille) {
    console.log("Taille avant modification :", this.taille);
    this.taille = nouvelleTaille;
    console.log("Taille après modification :", this.taille);
}

//Méthode pour modifier la couleur de la télévision
Television.prototype.modifierCouleur = function(nouvelleCouleur) {
    console.log("Couleur avant modification :", this.couleur);
    this.couleur = nouvelleCouleur;
    console.log("Couleur après modification :", this.couleur);
}

//Méthode pour modifier le poids de la télévision
Television.prototype.modifierPoids = function(nouveauPoids) {
    console.log("Poids avant modification :", this.poids);
    this.poids = nouveauPoids;
    console.log("Poids après modification :", this.poids);
}

// Méthode pour modifier le fabricant de la télévision
Television.prototype.modifierFabricant = function(nouveauFabricant) {
    console.log("Fabricant avant modification :", this.fabricant);
    this.fabricant = nouveauFabricant;
    console.log("Fabricant après modification :", this.fabricant);
}


// Création d'une instance de la classe Ecran
const ecran1 = new Ecran(27, "noir", 5, "Dell", "4K", true, 2, true);
ecran1.parler();
ecran1.reveiller();

const ecran2 = new Ecran(32, "blanc", 7, "HP", "Full HD", false, 4, false);
ecran2.parler();
ecran2.reveiller();

// Méthode pour récupérer la résolution de l'écran
Ecran.prototype.getResolution = function() {
    return this.resolution;
}

// Méthode pour récupérer la connectivité WiFi de l'écran
Ecran.prototype.getWiFi = function() {
    return this.WiFi;
}   

// Méthode pour récupérer le nombre de ports USB de l'écran
Ecran.prototype.getNbPortUSB = function() {
    return this.nbPortUSB;
}

// Méthode pour récupérer la fonction d'eteindre le port HDMI de l'écran
Ecran.prototype.getEteindrePortHDMI = function() {
    return this.eteindrePortHDMI;
}

// Méthode pour modifier la résolution de l'écran
Ecran.prototype.modifierResolution = function(nouvelleResolution) {
    console.log("Résolution avant modification :", this.resolution);
    this.resolution = nouvelleResolution;
    console.log("Résolution après modification :", this.resolution);
}

// Méthode pour modifier la connectivité WiFi de l'écran
Ecran.prototype.modifierWiFi = function(nouvelleWiFi) {
    console.log("WiFi avant modification :", this.WiFi);
    this.WiFi = nouvelleWiFi;
    console.log("WiFi après modification :", this.WiFi);
}

// Méthode pour modifier le nombre de ports USB de l'écran
Ecran.prototype.modifierNbPortUSB = function(nouveauNbPortUSB) {
    console.log("Nombre de ports USB avant modification :", this.nbPortUSB);
    this.nbPortUSB = nouveauNbPortUSB;
    console.log("Nombre de ports USB après modification :", this.nbPortUSB);
}

// Méthode pour modifier la fonction d'eteindre le port HDMI de l'écran
Ecran.prototype.modifierEteindrePortHDMI = function(nouvelleEteindrePortHDMI) {
    console.log("Eteindre le port HDMI avant modification :", this.eteindrePortHDMI);
    this.eteindrePortHDMI = nouvelleEteindrePortHDMI;
    console.log("Eteindre le port HDMI après modification :", this.eteindrePortHDMI); }