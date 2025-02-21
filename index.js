const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name)

  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)

  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()

  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()

  return kittens
}

function appendKitten(name){
  var newArray = [...kittens, name]

  return newArray
}

function prependKitten(name){
  var newArray = [name, ...kittens]

  return newArray
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
