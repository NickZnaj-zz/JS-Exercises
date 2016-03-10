// Array Stuff

var uniq = function(arr){
  var uniqs = [];
  for (i = 0; i < arr.length; i++){
    if (uniqs.includes(arr[i])){
      continue;
    }
    else{
      uniqs.push(arr[i]);
    }
  }
  return uniqs;
};

var twoSum = function(arr) {
  var twoSums =[];
  for (i = 0; i < arr.length; i++) {
    for (j = (i + 1); j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
};

var myTranspose = function(arr) {
  var transposed = [];
  for (i = 0; i < arr.length; i++) {
    var subArr = [];
    for (j = 0; j < arr.length; j++) {
      subArr.push(arr[j][i]);
    }
    transposed.push(subArr);
  }
  return transposed;
};

// Enumerable Stuff

a = [1, 2, 3];
var func = function(acc, el){return acc + el};

var timesTwo = function(num) { return num * 2; };

Array.prototype.myEach = function(callback){
  for(i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback){
  var mapped = [];

  this.myEach(function(arg) {
    mapped.push(callback(arg));
  });

  return mapped;
};


Array.prototype.myInject = function (callback, acc) {

  if (!acc) {
    acc = 0;
  }

  this.myEach(function (el) {
    acc = callback(acc, el);
  });

  return acc;
};
/////////////////////////////

var swapArrayElements = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

Array.prototype.swap = function(indexA, indexB) {
   swapArrayElements(this, indexA, indexB);
};

Array.prototype.bubbleSort = function () {
  var sorted = false;
  while (!sorted){
    for(i = 0; i < this.length - 1; i++){
      sorted = true;
      var j = i + 1;
      if (this[i] > this[j] ){
        this.swap(i, j);
        sorted = false;
      }
    }
  }
  return this;
};


String.prototype.substrings = function () {
  var substrings = [];
  for (i = 0; i < this.length; i++ ){
    for (j = 1; j < this.length + 1; j++){
      if(this.slice(i, j)){
        substrings.push(this.slice(i, j));
      }
    }
  }
  return substrings;
};


var exponent = function (base, e){
  if (e === 0){
    return 1;
  }
  var result = base * exponent(base, e - 1);
  return result;
};


var fibs = function (n) {
  var firstFibs = [0, 1];

  if (n <= 2) {
    return firstFibs.slice(0, n);
  }

  var prev_fibs = fibs(n - 1);

  return prev_fibs.concat(prev_fibs[prev_fibs.length - 1] + prev_fibs[prev_fibs.length - 2]);
};

Array.prototype.bSearch = function (target) {
  var middle = ~~(this.length / 2);
  if (middle === 0) {
    return null;
  }

  if (this[middle] === target) {
    return middle;
  }
  else if (this[middle] > target) {
    return this.slice(0, middle).bSearch(target);
  }
  else if (this[middle] < target) {
    var rightSide = (this.slice(middle, this.length).bSearch(target));
    if (!rightSide){
      return null;
    }
    else {
      return rightSide + middle;
    }
  }
};

var reallyMakeChange = function (change, coinsArr) {
  var currentCoin = coinsArr.shift();
  var resultArr = [];

  if (change - currentCoin === 0) {
    return resultArr.concat(currentCoin);
  }
  else if (change - currentCoin < 0) {
    return reallyMakeChange(change, coinsArr);
  }

  while (change > currentCoin) {
    if (change - currentCoin < 0){
      break;
    }

    change -= currentCoin;
    resultArr.push(currentCoin);
  }

  if (change - currentCoin === 0) {
    return resultArr.concat(currentCoin);
  }

  return resultArr.concat(reallyMakeChange(change, coinsArr));
};

var makeChange = function (change, coinsArr) {
  var results = [];

  for (i = 0; i < coinsArr.length; i++) {
    var newCoins = coinsArr.slice(i, coinsArr.length);
    results.push(reallyMakeChange(change, newCoins));
  }

  return results.sort()[results.length - 1];
};


var Cat = function(fname, owner){
  this.fname = fname;
  this.owner = owner;
  this.meow = function(){
    console.log("meow");
  };
};

Cat.prototype.cuteStatement = function(fname, owner){
    return console.log(this.owner + " loves " + this.fname);
  };

Cat.prototype.cuteStatement = function(fname, owner){
  console.log("Everybody loves " + this.fname);
};


Cat.prototype.meow












//
