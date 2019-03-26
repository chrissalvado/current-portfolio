
var dogs = {
    raining: true,

    noise: "Woof!",
    
    makeNoise: function() {
   
      if (this.raining === true) {
        console.log(this.noise);
      }
    }
  };
  
  
  var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    }
  };
  
  
  dogs.makeNoise();
  cats.raining = true;
  cats.makeNoise();
  var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  massHysteria(dogs, cats);
  