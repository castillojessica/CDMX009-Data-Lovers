import change  from './data.js';

console.log(change.genderR());

// INFO RICK EN MODAL
document.getElementById("bRick").innerHTML = change.bRick()
document.getElementById("genderR").innerHTML = change.genderR()
document.getElementById("statusR").innerHTML = change.statusR()
document.getElementById("speciesR").innerHTML = change.speciesR()
document.getElementById("originR").innerHTML = change.originR()
// INFO MORTY EN MODAL
document.getElementById("bMorty").innerHTML = change.bMorty()
document.getElementById("genderM").innerHTML = change.genderM()
document.getElementById("statusM").innerHTML = change.statusM()
document.getElementById("speciesM").innerHTML = change.speciesM()
document.getElementById("originM").innerHTML = change.originM()
// INFO SUMMER EN MODAL
document.getElementById("bSummer").innerHTML = change.bSummer()
document.getElementById("genderS").innerHTML = change.genderS()
document.getElementById("statusS").innerHTML = change.statusS()
document.getElementById("speciesS").innerHTML = change.speciesS()
document.getElementById("originS").innerHTML = change.originS()
// INFO BETH EN MODAL
document.getElementById("bBeth").innerHTML = change.bBeth()
document.getElementById("genderB").innerHTML = change.genderB()
document.getElementById("statusB").innerHTML = change.statusB()
document.getElementById("speciesB").innerHTML = change.speciesB()
document.getElementById("originB").innerHTML = change.originB()
// INFO JERRY EN MODAL
document.getElementById("bJerry").innerHTML = change.bJerry()
document.getElementById("genderJ").innerHTML = change.genderJ()
document.getElementById("statusJ").innerHTML = change.statusJ()
document.getElementById("speciesJ").innerHTML = change.speciesJ()
document.getElementById("originJ").innerHTML = change.originJ()

// Get the modal
let modalS = document.getElementById("modalImgS");
let modalR = document.getElementById("modalImgR");
let modalM = document.getElementById("modalImgM");
let modalB = document.getElementById("modalImgB");
let modalJ = document.getElementById("modalImgJ");

let modalChar = document.getElementById("modalChar");
//let modalPlace = document.getElementById("modalPlace");
let modalUs = document.getElementById("modalUs");

// Get the button that opens the modal
let summer = document.getElementById("botonimagenS");
let rick = document.getElementById("botonimagenR");
let morty = document.getElementById("botonimagenM");
let beth = document.getElementById("botonimagenB");
let jerry = document.getElementById("botonimagenJ");

let charters = document.getElementById("chartersButton");
//let places = document.getElementById("placesButton");
let us=document.getElementById("usButton")

// Get the <span> element that closes the modal
let spanS = document.getElementsByClassName("closeS")[0];
let spanR = document.getElementsByClassName("closeR")[0];
let spanM = document.getElementsByClassName("closeM")[0];
let spanB = document.getElementsByClassName("closeB")[0];
let spanJ = document.getElementsByClassName("closeJ")[0];

let spanChar = document.getElementsByClassName("closeChar")[0];
//let spanPlaces = document.getElementsByClassName("closePlaces")[0];
let spanUs = document.getElementsByClassName("closeUs")[0];

// When the user clicks the button, open the modal 
summer.onclick = function() {
  modalS.style.display = "block";
  
}
spanS.onclick = function() {
  modalS.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
rick.onclick = function() {
  modalR.style.display = "block";
}
spanR.onclick = function() {
  modalR.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalR) {
    modalR.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
morty.onclick = function() {
  modalM.style.display = "block";
}
spanM.onclick = function() {
  modalM.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalM) {
    modalM.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
beth.onclick = function() {
  modalB.style.display = "block";
}
spanB.onclick = function() {
  modalB.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
jerry.onclick = function() {
  modalJ.style.display = "block";
}
spanJ.onclick = function() {
  modalJ.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalJ) {
    modalJ.style.display = "none";
  }
}
console.log(change.val[1].name)
let inf =""
let newInf =""
charters.onclick = function() {
  modalChar.style.display = "block";
  for(let i=0; i<493; i++){
    inf = document.createElement('div')
    inf.className="per"
    inf.id= "per"
    inf.innerHTML=`<h1 id="PERSONAJES"></h1>
                  <div id="aver">
                    <div class="flip-card">
                      <p></p>
                      <div class="flip-card-inner">
                        <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                          <img src="${change.val[i].image}">
                        </div>
                        <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                          <p>NOMBRE:${change.val[i].name}</p>
                          <p>GENERO:${change.val[i].gender}</p>
                          <p>STATUS:${change.val[i].status}</p>
                          <p>ESPECIE:${change.val[i].species}</p>
                          <p>ORIGEN:${change.val[i].origin.name}</p>
                        </div>
                      </div>
                    </div>
                  </div> `
  document.getElementById("modal-con").appendChild(inf)   
  let searchButton = document.getElementById("searchButton") 
  //console.log(search)
  searchButton.onclick = function () {
    let searching = document.getElementById("ya")
    let text = searching.value
    console.log("ya se apreto")
    console.log(text)
    for(let i=0; i<493; i++){
          if (change.val[i].name.includes (text)) {
          console.log(text)
          newInf = document.createElement('div')
          newInf.className="perT"
          newInf.innerHTML=`<h1 id="PERSONAJES"></h1>
                          <div id="aver">
                              <div class="flip-card">
                              <p></p>
                              <div class="flip-card-inner">
                                  <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                                  <img src="${change.val[i].image}">
                                  </div>
                                  <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                                  <p>NOMBRE:${change.val[i].name}</p>
                                  <p>GENERO:${change.val[i].gender}</p>
                                  <p>STATUS:${change.val[i].status}</p>
                                  <p>ESPECIE:${change.val[i].species}</p>
                                  <p>ORIGEN:${change.val[i].origin.name}</p>
                                  </div>
                              </div>
                              </div>
                          </div> `
          //inf= modal-con.replaceChild(newInf, inf);
          //document.getElementById("modal-con").removeChild(inf)
          document.getElementById("result").appendChild(newInf)
          console.log(change.val[i].name)
          //inf.innerHTML=""
          //document.getElementById("modal-con").appendChild(inf)
          console.log(inf)
          //document.getElementById("modal-con").appendChild(inf)
        }else{
          //document.getElementById("modal-con").appendChild(inf)
          let x= "ño ño"
        }
    }
  }
     
  }
}
/*let searchButton = document.getElementById("searchButton") 
search=searchButton.onclick
//console.log(search)
function search() {
let searching = document.getElementById("ya")
let text = searching.value
console.log("ya se apreto")
console.log(text)
for(let i=0; i<493; i++){
        if (change.val[i].name.includes (text)) {
        console.log(text)
        let newInf = document.createElement('div')
        newInf.className="perT"
        newInf.innerHTML=`<h1 id="PERSONAJES"></h1>
                        <div id="aver">
                            <div class="flip-card">
                            <p></p>
                            <div class="flip-card-inner">
                                <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                                <img src="${change.val[i].image}">
                                </div>
                                <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                                <p>NOMBRE:${change.val[i].name}</p>
                                <p>GENERO:${change.val[i].gender}</p>
                                <p>STATUS:${change.val[i].status}</p>
                                <p>ESPECIE:${change.val[i].species}</p>
                                <p>ORIGEN:${change.val[i].origin.name}</p>
                                </div>
                            </div>
                            </div>
                        </div> `
        //inf= modal-con.replaceChild(newInf, inf);
        //document.getElementById("modal-con").removeChild(inf)
        document.getElementById("modal-con").appendChild(newInf)
        console.log(change.val[i].name)
        //inf.innerHTML=""
        //document.getElementById("modal-con").appendChild(inf)
        console.log(inf)
        //document.getElementById("modal-con").appendChild(inf)
    }else{
        //document.getElementById("modal-con").appendChild(inf)
        let x= "ño ño"
    }
}
}
console.log(search)
console.log(change.val[1].name)
let inf =""
charters.onclick = function() {
  modalChar.style.display = "block";
  let searching = document.getElementById("ya")
  let text = searching.value
  //if (search()){
  //  inf.innerHTML=""
  //  document.getElementById("modal-con").appendChild(inf)
  //}else{
    for(let i=0; i<493; i++){
        inf = document.createElement('div')
        inf.className="per"
        inf.id= "per"
        inf.innerHTML=`<h1 id="PERSONAJES"></h1>
                    <div id="aver">
                        <div class="flip-card">
                        <p></p>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" id="flip-card-front"  alt="Avatar" >
                            <img src="${change.val[i].image}">
                            </div>
                            <div class="flip-card-back" id="flip-card-back" alt="Avatar">
                            <p>NOMBRE:${change.val[i].name}</p>
                            <p>GENERO:${change.val[i].gender}</p>
                            <p>STATUS:${change.val[i].status}</p>
                            <p>ESPECIE:${change.val[i].species}</p>
                            <p>ORIGEN:${change.val[i].origin.name}</p>
                            </div>
                        </div>
                        </div>
                    </div> `
    document.getElementById("modal-con").appendChild(inf)   
    
    }
 
}*/
spanChar.onclick = function() {
  modalChar.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalChar) {
    modalChar.style.display = "none";
  }
}
// When the user clicks the button, open the modal 
/*places.onclick = function() {
  modalPlace.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanPlaces.onclick = function() {
  modalPlace.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalPlace) {
    modalPlace.style.display = "none";
  }
}*/
// When the user clicks the button, open the modal 
us.onclick = function() {
  modalUs.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanUs.onclick = function() {
  modalUs.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalUs) {
    modalUs.style.display = "none";
  }
}

