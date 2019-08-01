function
function keepGoing (array, changeValue, skipValue){
<<<<<<< HEAD
  for( var i=0; i<array.length; i++){
=======
  for( i=0; i<array.length; i++){
>>>>>>> 7477b1f3cbc4b415089d54103e395db897207925
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

<<<<<<< HEAD
function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
=======
function findBy (array, findFn) {
  for( i=0; i<array.length; i++){
    if(findFn(array[i])){
      return array
    }
}
return null
>>>>>>> 7477b1f3cbc4b415089d54103e395db897207925
}
