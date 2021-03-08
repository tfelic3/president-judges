//import judge data for Trump and Obama
 import {presidentsJudges} from './judgeData.js';



//Create new array for Obama judges 
const obamaJudges = presidentsJudges.filter(judge=>{
  if(judge['Appointing President (1)']==="Barack Obama"){
    return true;
  }
});

//Creating gender array for ObamaData
const obamaMaleJudges = obamaJudges.filter(judge=>{
  if(judge.Gender==="Male"){
    return true;
  }
})

//Creating gender array for ObamaData
const obamaFemaleJudges = obamaJudges.filter(judge=>{
  if(judge.Gender==="Female"){
    return true;
  }
})



//Create new array for Trump judges
const trumpJudges = presidentsJudges.filter(judge=>{
  if(judge['Appointing President (1)']==="Donald J. Trump"){
    return true;
  }
});
 //Trump male judges
const trumpMaleJudges = trumpJudges.filter(judge=>{
  if(judge.Gender==="Male"){
    return true;
  }
})


//Trump female judges
const trumpFemaleJudges = trumpJudges.filter(judge=>{
  if(judge.Gender==="Female"){
    return true;
  }
})



//Create percentage for each gender

//Obama Male judges
let obamaMalePercentText = document.getElementById('obamaMalePercentTotals');
let obamaMalePercentage = Math.trunc(obamaMaleJudges.length/obamaJudges.length *100) + "%";
obamaMalePercentText.textContent = obamaMalePercentage;

//Female judges
let obamaFemalePercentText = document.getElementById('obamaFemalePerecentTotals');
let obamaFemalePercentage = Math.trunc(obamaFemaleJudges.length/obamaJudges.length *100) + "%";
obamaFemalePercentText.textContent = obamaFemalePercentage;

//Trump male judges 
let trumpMalePercentText = document.getElementById('trumpMalePercentTotals');
let trumpMalePercentage = Math.trunc(trumpMaleJudges.length/trumpJudges.length *100) + "%";
trumpMalePercentText.textContent = trumpMalePercentage;


//Trump female judges
let trumpFemalePercentText = document.getElementById('trumpFemalePerecentTotals');
let trumpFemalePercentage = Math.trunc(trumpFemaleJudges.length/trumpJudges.length *100) + "%";
trumpFemalePercentText.textContent = trumpFemalePercentage;









//Create Race and Ethnicity counter for Obama judges

const obamaWhiteJudges = obamaJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="White" ){
      return true;
  }
})


const obamaAfricanAmericanJudges = obamaJudges.filter(judge=>{
    if(judge['Race or Ethnicity'] ==="African American" ){
        return true;
    }
})

const obamaHispanicJudges = obamaJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="Hispanic" ){
      return true;
  }
})

const obamaAsianAmericanJudges = obamaJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="Asian American" ){
      return true;
  }
})

const obamaWhiteJudgePercentage = Math.trunc(obamaWhiteJudges.length/obamaJudges.length*100);
const obamaAfricanAmericanPercentage = Math.trunc(obamaAfricanAmericanJudges.length/obamaJudges.length*100);
const obamaHispanicPercentage = Math.trunc(obamaHispanicJudges.length/obamaJudges.length*100);
const obamaAsianAmericanPercentage = Math.trunc(obamaAsianAmericanJudges.length/obamaJudges.length*100);

let obamaWhite = document.getElementById("obamaWhiteJudges");
let obamaAfricanAmerican = document.getElementById("obamaAfricanAmerican");
let obamaHispanic = document.getElementById("obamaHispanicJudges");
let obamaAsianAmerican = document.getElementById("obamaAsianAmerican");


obamaWhite.textContent = "White "  + obamaWhiteJudgePercentage + "%"; 
obamaAfricanAmerican.textContent = "African American " + obamaAfricanAmericanPercentage + "%";
obamaHispanic .textContent = "Hispanic American " + obamaHispanicPercentage + "%";
obamaAsianAmerican.textContent = "Asian American " + obamaAsianAmericanPercentage  + "%";

//Create Race and Ethnicity counter for Trump judges

const trumpWhiteJudges = trumpJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="White" ){
      return true;
  }
})

const trumpAfricanAmericanJudges = trumpJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="African American" ){
      return true;
  }
})


const trumpHispanicJudges = trumpJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="Hispanic" ){
      return true;
  }
})


const trumpAsianJudges = trumpJudges.filter(judge=>{
  if(judge['Race or Ethnicity'] ==="Asian American" ){
      return true;
  }
});









const trumpWhiteJudgePercentage = Math.trunc(trumpWhiteJudges.length/trumpJudges.length*100);
const trumpAfricanAmericanJudgePercentage = Math.trunc(trumpAfricanAmericanJudges.length/trumpJudges.length*100);
const trumpHispanicJudgePercentage = Math.trunc(trumpHispanicJudges.length/trumpJudges.length*100);
const trumpAsianJudgePercentage = Math.trunc(trumpAsianJudges.length/trumpJudges.length*100);



let trumpWhite = document.getElementById("trumpWhiteJudges");
let trumpAfricanAmerican = document.getElementById("trumpAfricanAmericanJudges");
let trumpHispanicAmerican = document.getElementById("trumpHispanicJudges");
let trumpAsianAmerican = document.getElementById("trumpAsianJudges");



trumpWhite.textContent = "White "  + trumpWhiteJudgePercentage + "%"; 
trumpAfricanAmerican.textContent = "African American " + trumpAfricanAmericanJudgePercentage + "%";
trumpHispanicAmerican.textContent = "Hispanic American " + trumpHispanicJudgePercentage + "%";
trumpAsianAmerican.textContent ="Asian American " + trumpAsianJudgePercentage + "%";


//Adding button functionality for Gender and Race and Ethnicity

let genderButton = document.getElementById('gender');




let raceButton = document.getElementById('race');

console.log(genderPage);
console.log(racePage);

genderButton.addEventListener('click', function(){
  racePage.style.display ='none';
  genderPage.style.display="block";
  })

raceButton.addEventListener('click', function(){
racePage.style.display ='block';
genderPage.style.display="none";
});



  










