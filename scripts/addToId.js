import {Loci, hookNames} from '../scripts/loci.js'
import hooks from '../data/data.js'
import lociBack  from '../data/locidata.js';

/* adds hookImages to loci */
function addToId(id, add){
  document.getElementById(id).innerHTML = add;
}

/* add background to loci */
function addClass(id, name){
  document.getElementById(id).classList.add(name)
}

/* removeClass */
function removeClass(id, name){
  document.getElementById(id).classList.remove(name)
}
 
/* shuffle recall of stickers */
 function shuffle(){
   let shuffled = hookNames.sort(() => Math.random() - 0.5)
   return shuffled
 }

 
 
 /* next level */
 function nextLevel(){

 
   let step = document.getElementById('loci').children[0].alt
   step = step.split(' ')
   step = Number(step[1]) + 1;
  if(step <= 9){
    addToId('loci', Loci(step, hooks))
    document.getElementById('background').src = lociBack[step].image;
  } else {
    step = 0;
    addToId('loci', Loci(step, hooks))
    document.getElementById('background').src = lociBack[step].image;
  }

  addMatch()
  showClick()
 }
 
/* shows hook to match returned from random */
function addMatch(){
  let shuffleHook = ''
   if(shuffle().length > 0){
     shuffleHook = shuffle()
     document.getElementById('match').innerText = shuffleHook.pop()
   } else {
     shuffleHook = shuffle()
    setTimeout(nextLevel, 1000)
     document.getElementById('match').innerText = ""
   }
}

function getId(id){
  return document.getElementById(id)
}

function removeAnimation(){
  //removeClass('overlay', 'fade')
  removeAddClasses("overlay", "animate-zoom", "hide")
}

function removeAddClasses(id, remove, add){
  removeClass(id, remove)
  addClass(id, add)
}

function checkMatch(matchWith, clicked, target){
  if(matchWith == clicked){
    addMatch()
    target.add('fade')
  }else {
    //getId("banner").textContent = "Wrong"
    //removeClass('overlay', 'fade')
    removeAddClasses("overlay", "hide", "animate-zoom")
    setTimeout(removeAnimation, 1500);
  }
}

/* add listener to hookImages and get name of hook clicked */
function showClick(){
  document.querySelectorAll('#loci img').forEach((hook) => {
    hook.addEventListener('click', (e) => {
      let clicked = e.target.classList[0];
      let matchWith = getId("match").textContent
      checkMatch(matchWith, clicked, e.target.classList)
    })
  })
}

export {addToId, addClass, showClick, addMatch}