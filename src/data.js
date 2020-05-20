// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo


// INFO RICK EN MODAL

function bRick (){ return data.results[0].name;}
console.log(bRick())
function genderR (){return data.results[0].gender;}
function statusR (){ return data.results[0].status;}
function speciesR (){ return data.results[0].species;}
function originR (){ return data.results[0].origin.name;}

// INFO MORTY EN MODAL
function bMorty (){return data.results[1].name;}
function genderM (){return data.results[1].gender;}
function statusM  (){ return data.results[1].status;}
function speciesM (){ return data.results[1].species;}
function originM  (){ return data.results[1].origin.name;}
// INFO SUMMER EN MODAL
function bSummer  (){ return data.results[2].name;}
function genderS (){ return data.results[2].gender;}
function statusS (){ return data.results[2].status;}
function speciesS (){ return data.results[2].species;}
function originS (){ return data.results[2].origin.name;}
// INFO BETH EN MODAL
function bBeth  (){ return data.results[3].name;}
function genderB (){ return data.results[3].gender;}
function statusB (){ return data.results[3].status;}
function speciesB (){ return data.results[3].species;}
function originB (){ return data.results[3].origin.name;}
// INFO JERRY EN MODAL
function bJerry (){ return data.results[4].name;}
function genderJ (){ return data.results[4].gender;}
function statusJ (){ return data.results[4].status;}
function speciesJ (){ return data.results[4].species;}
function originJ (){ return data.results[4].origin.name;}

 /*const createCard=(element)=>{
    return `<h1 id="PERSONAJES"></h1>
            <div id="${data.results.id}">
              <div class="flip-card">
                <p></p>
                <div class="flip-card-inner">
                  <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                    <img src="${data.results.image}">
                  </div>
                  <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                    <p>NOMBRE:${data.results.name}}</p>
                    <p>GENERO:${data.results.gender}}</p>
                    <p>STATUS:${data.results.status}}</p>
                    <p>ESPECIE:${data.results.species}}</p>
                    <p>ORIGEN:${data.results.origin}}</p>
                  </div>
                </div>
              </div>
            </div> `
} 
const showCard=()=>{
  let items ="";
  data.forEach(element=>{
    items += createCard(element)
  });
  let counterValue=data.length;
  counter.innerHTML = counterValue;
  allData.innerHTML=items;
};
showCard();*/
let val = data.results
const change = {
  //createCard,
  bRick,genderR,statusR,speciesR,originR,
  bSummer,genderS,statusS,speciesS,originS,
  bMorty,genderM,statusM,speciesM,originM,
  bBeth,genderB,statusB,speciesB,originB,
  bJerry,genderJ,statusJ,speciesJ,originJ,
  val
  //showCard,createCard
};

export default change; 
