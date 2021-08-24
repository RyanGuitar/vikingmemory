import {Loci} from './scripts/loci.js'
import hooks from './data/data.js'
import {addToId, showClick, addMatch} from './scripts/addToId.js'

//addClass('loci', 'lociOne')
addToId('loci', Loci(0, hooks))
showClick()
addMatch()



