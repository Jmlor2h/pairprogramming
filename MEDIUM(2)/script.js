function anagramChecker(a, b){
  var y = a.toLowerCase().split(" ").join("");
  var z = b.toLowerCase().split(" ").join("");

  if (y.length === z.length){
      console.log(true);
  } else {
      console.log(false);
  }


}

anagramChecker("So dark the con of man", "Madonna of the Rocks")