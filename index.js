const app = "I don't do much.";

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
};

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
};

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop();
};

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift();
};

var appendKitten = function(name) {
  newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}

