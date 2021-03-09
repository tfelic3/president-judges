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


obamaWhite.style.color ="rgb(183,183,183)";
obamaAfricanAmerican.style.color = "rgb(0,60,180)";
obamaHispanic.style.color = "rgb(251,175,93)"
obamaAsianAmerican.style.color="rgb(0,166,81)";


obamaWhite.textContent = "White "  + obamaWhiteJudgePercentage + "%"; 
obamaAfricanAmerican.textContent = "African American " + obamaAfricanAmericanPercentage + "%";
obamaHispanic.textContent = "Hispanic American " + obamaHispanicPercentage + "%";
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

trumpWhite.style.color ="rgb(183,183,183)";
trumpAfricanAmerican.style.color = "rgb(0,60,180)";
trumpHispanicAmerican.style.color = "rgb(251,175,93)"
trumpAsianAmerican.style.color="rgb(0,166,81)";

trumpWhite.textContent = "White "  + trumpWhiteJudgePercentage + "%"; 
trumpAfricanAmerican.textContent = "African American " + trumpAfricanAmericanJudgePercentage + "%";
trumpHispanicAmerican.textContent = "Hispanic American " + trumpHispanicJudgePercentage + "%";
trumpAsianAmerican.textContent ="Asian American " + trumpAsianJudgePercentage + "%";





//Adding judge appointments div


let appointmentsDiv = document.getElementById('appointments');

let obamaAppointments = document.createElement('div');

obamaAppointments.id = "obamaAppointments";

let trumpAppointments = document.createElement('div');

trumpAppointments.id = "trumpAppointments";


let divTitle = document.createElement('h4');
divTitle.textContent = "President Obama's Appointments";


let trumpDivTitle = document.createElement('h4');
trumpDivTitle.textContent = "President Trump's Appointments";

appointmentsDiv.appendChild(divTitle);
appointmentsDiv.appendChild(obamaAppointments);
appointmentsDiv.appendChild(trumpAppointments);


obamaJudges.forEach(judge=>{  
let judgeGroup = document.createElement('div');
let judgeImg = document.createElement("img");
let judgeTooltip = document.createElement('div');
let judgeName = document.createElement('p');
let judgeCourt = document.createElement('p');
let judgeRace = document.createElement('p');
let judgeConfirmation = document.createElement('p');


judgeGroup.id ="judgeGroup";
judgeImg.id = 'judgeImg';
judgeTooltip.id = 'judgeTooltip';
judgeName.id = 'judgeName';
judgeCourt.id ="judgeCourt";
judgeRace.id="judgeRace";
judgeConfirmation.id ="judgeConfirmation";

judgeName.textContent = "Name: " + judge['First Name'] +  " " +judge['Last Name'];
judgeCourt.textContent = "Court: " + judge['Court Name (1)'];
judgeRace.textContent = "Race: " + judge['Race or Ethnicity'];
judgeConfirmation.textContent= "Confirmed: " + judge['Confirmation Date (1)'];


//Colors for each type
if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "African American"){
 judgeImg.src = "img/aamale.png"
} else if(judge.Gender ==="Female" && judge['Race or Ethnicity'] === "African American"){
judgeImg.src = "img/aafemale.png";
} else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "White"){
  judgeImg.src = "img/whitemale.png";
} else if (judge.Gender ==="Female" && judge['Race or Ethnicity'] === "White"){
  judgeImg.src = "img/whitefemale.png";
} else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "Hispanic"){
  judgeImg.src = "img/hispanicmale.png"
} else if(judge.Gender ==="Female" && judge['Race or Ethnicity'] === "Hispanic"){
  judgeImg.src = "img/hispanicfemale.png";
} else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "Asian American"){
  judgeImg.src = "img/asianmale.png";
} else if (judge.Gender ==="Female" && judge['Race or Ethnicity'] === "Asian American"){
  judgeImg.src = "img/asianfemale.png";
} else if(judge.Gender ==="Male"){
judgeImg.src = "img/multiracialmale.png";
} 
else{
 judgeImg.src = "img/multiracialfemale.png"
}


judgeGroup.appendChild(judgeImg);
judgeTooltip.appendChild(judgeName);
judgeTooltip.appendChild(judgeCourt);
judgeTooltip.appendChild(judgeRace);
judgeTooltip.appendChild(judgeConfirmation);
judgeGroup.appendChild(judgeTooltip);
obamaAppointments.appendChild(judgeGroup);

judgeGroup.addEventListener('mouseover', e=>{
  judgeTooltip.style.visibility= "visible";
  judgeTooltip.style.top = e.pageX + 1 + "px";
  judgeTooltip.style.top = e.pageY + 1 + "px"; 
})


judgeGroup.addEventListener('mouseout', e=>{
  judgeTooltip.style.visibility= "hidden";
  
})






})





trumpJudges.forEach(judge=>{  
  let judgeGroup = document.createElement('div');
  let judgeImg = document.createElement("img");
  let judgeTooltip = document.createElement('div');
  let judgeName = document.createElement('p');
  let judgeCourt = document.createElement('p');
  let judgeRace = document.createElement('p');
  let judgeConfirmation = document.createElement('p');
  
  
  judgeGroup.id ="judgeGroup";
  judgeImg.id = 'judgeImg';
  judgeTooltip.id = 'judgeTooltip';
  judgeName.id = 'judgeName';
  judgeCourt.id ="judgeCourt";
  judgeRace.id="judgeRace";
  judgeConfirmation.id ="judgeConfirmation";
  
  judgeName.textContent = "Name: " + judge['First Name'] +  " " +judge['Last Name'];
  judgeCourt.textContent = "Court: " + judge['Court Name (1)'];
  judgeRace.textContent = "Race: " + judge['Race or Ethnicity'];
  judgeConfirmation.textContent= "Confirmed: " + judge['Confirmation Date (1)'];
  
  //Colors for each type
  if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "African American"){
   judgeImg.src = "img/aamale.png"
  } else if(judge.Gender ==="Female" && judge['Race or Ethnicity'] === "African American"){
  judgeImg.src = "img/aafemale.png";
  } else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "White"){
    judgeImg.src = "img/whitemale.png";
  } else if (judge.Gender ==="Female" && judge['Race or Ethnicity'] === "White"){
    judgeImg.src = "img/whitefemale.png";
  } else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "Hispanic"){
    judgeImg.src = "img/hispanicmale.png"
  } else if(judge.Gender ==="Female" && judge['Race or Ethnicity'] === "Hispanic"){
    judgeImg.src = "img/hispanicfemale.png";
  } else if(judge.Gender ==="Male" && judge['Race or Ethnicity'] === "Asian American"){
    judgeImg.src = "img/asianmale.png";
  } else if (judge.Gender ==="Female" && judge['Race or Ethnicity'] === "Asian American"){
    judgeImg.src = "img/asianfemale.png";
  } else if(judge.Gender ==="Male"){
  judgeImg.src = "img/multiracialmale.png";
  } 
  else{
   judgeImg.src = "img/multiracialfemale.png"
  }
  
  
  judgeGroup.appendChild(judgeImg);
  judgeTooltip.appendChild(judgeName);
  judgeTooltip.appendChild(judgeCourt);
  judgeTooltip.appendChild(judgeRace);
  judgeTooltip.appendChild(judgeConfirmation);
  judgeGroup.appendChild(judgeTooltip);
  trumpAppointments.appendChild(judgeGroup);
  
  judgeGroup.addEventListener('mouseover', e=>{
    judgeTooltip.style.visibility= "visible";
    judgeTooltip.style.top = e.pageX + 1 + "px";
    judgeTooltip.style.top = e.pageY + 1 + "px"; 
  })
  
  
  judgeGroup.addEventListener('mouseout', e=>{
    judgeTooltip.style.visibility= "hidden";
    
  })

  
  })
  trumpAppointments.insertAdjacentElement("beforebegin", trumpDivTitle) ;




  //Adding button functionality for Gender and Race and Ethnicity

let genderButton = document.getElementById('gender');

let raceButton = document.getElementById('race');

console.log(genderPage);
console.log(racePage);

genderButton.addEventListener('click', function(){
  racePage.style.display ='none';
  genderPage.style.display="block";
  appointments.style.display= "none";
  })

raceButton.addEventListener('click', function(){
racePage.style.display ='block';
genderPage.style.display="none";
appointments.style.display= "none";
});

let appointmentsButton = document.getElementById('appointmentsButton');
console.log(appointmentsButton);


appointmentsButton.addEventListener('click', function (){
  racePage.style.display ='none';
  genderPage.style.display="none";
  appointments.style.display= "block";

})
    
  
