
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
   return texte1+texte2;
}
let afficherCar5 =  (texte) => {
     return texte[4];
}
let afficher9Car =  (texte) => {
      return texte.slice(0,9);
}
let majusculeString =  (texte) => {
     return texte.toUpperCase();
}
let minusculeString =  (texte) => {
     return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
  return typeof (texte) === 'string';
}

let AfficherExtensionString =  (texte) => {
 return texte.substring(texte.length-3, texte.length);
}
let NombreEspaceString =  (texte) => {
    let espace = 0;
    for(let j=0; j< texte.length; j++){
         if(texte[j]== " "){espace++;};
    }
    return espace;
}
let InverseString =  (texte) => {
    let invTexte =" ";
    for(let j=0; j< texte.length; j++){
         invTexte += texte[(texte.length-1)-j];
    }
    return invTexte.trim();
    
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
   return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
   for(let j=0; j< array.length; j++){
      array[j] = Math.abs(array[j]);
    }
    return array;
}
let sufaceCercle =  (rayon) => {
   return Math.round(Math.PI *rayon*rayon);
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(ab*ab + ac*ac);
}
let calculIMC =  (poids, taille) => {
   return parseFloat((poids/(taille*taille)).toFixed(2));

}
