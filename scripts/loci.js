let hookNames = []

function Loci(num, hooks){
  let filteredHooks = hooks.filter(({type}) => type == num.toString())
  let hookImages ='';
  hookNames = []
  //let i = 0;
  for(let {image, name} of filteredHooks){
    hookNames.push(name)
    hookImages += `<img src=${image} class="${name}" loading="lazy" alt="${name} ${num}">`
  }
  return hookImages
}


export { Loci, hookNames }