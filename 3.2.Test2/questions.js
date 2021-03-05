let CreationTableauLangages =  () => {
let langages = ["Html","CSS","Java","PHP"];
return langages

}

let CreationTableauNombres =  () => {
  let nombres = [0,1,2,3,4,5]
  return nombres;
}

let RemplacementElement =  (langages) => {
   let a = langages.indexOf("Java");
   langages[a] = "Javascript";
   return langages
}

let AjoutElementLangages =  (langages) => {
   langages.push("Ruby", "Python");
   return langages;
}

let AjoutElementNombres =  (nombres) => {
   nombres.splice(0,0,-2,-1);
   return (nombres);
}

let SuppressionPremierElement =  (langages) => {
    langages.shift()
    return langages;
}

let SuppressionDernierElement =  (langages) => {
      langages.pop()
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
  let reseaux_sociaux = reseaux_sociaux_chaine.split(",")
  return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
    let reseaux_sociaux =" ";
    for(let i=0; i<langages.length; i++){
        if(i == langages.length -1){
         reseaux_sociaux += langages[i];
         }
         else{
          reseaux_sociaux += langages[i]+",";
         }
        
      }
      return reseaux_sociaux.trim();
}

let TriTableau =  (reseaux_sociaux) => {
 
 return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
  return reseaux_sociaux.reverse();

}
