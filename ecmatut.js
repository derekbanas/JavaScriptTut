// ECMAScript 6 OOP with JavaScript

// ----- Method Notation in Object Property Definitions -----

// EC5 WAY
var addStuff = {
    sum: function(num1, num2){
      return num1 + num2;
    }
  };
  
  document.write("1 + 2 = ", addStuff.sum(1,2) + "<br />");
  
  
  // EC6 WAY
  var addStuff = {
    sum(num1, num2){
      return num1 + num2;
    }
  }
  
  document.write("1 + 2 = ", addStuff.sum(1,2) + "<br />");
  
  // ----- CLASSES IN JAVASCRIPT -----
  
  // EC5 WAY
  var Point = function(xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
  };
  
  Point.prototype.getPos = function(){
    return "X: " + this.xPos + " Y: " + this.yPos;
  };
  
  var point = new Point(100, 200);
  
  document.write("Point Pos : " + point.getPos() + "<br />");
  
  // EC6 WAY
  class Point {
    constructor(xPos, yPos){
      this.xPos = xPos;
      this.yPos = yPos;
    }
  
    getPos(){
      return "X: " + this.xPos + " Y: " + this.yPos;
    }
  }
  
  var point = new Point(100,200);
  
  document.write("Point Pos : " + point.getPos() + "<br />");
  
  // ----- MORE OOP IN JAVASCRIPT -----
  
  // EC6 WAY
  class Animal {
    constructor(name){
      this.name = name;
    }
  
    toString(){
      return "Animal is named " + this.name;
    }
  
    // We can create static functions as well
    static getAnimal(){
      return new Animal("No Name");
    }
  
  }
  
  class Dog extends Animal{
    constructor(name, owner){
  
      // We can call the super class now
      super(name);
      this.owner = owner;
    }
  
    toString(){
  
      // You can call super class methods as well
      return super.toString() + "<br />Dog is named " + this.name;
    }
  }
  
  var rover = new Dog("Rover", "Paul");
  
  document.write(rover.name + " is owned by " + rover.owner + "<br />");
  
  document.write(rover.toString() + "<br />");
  
  // Call the static function
  var bowser = Animal.getAnimal();
  document.write("Bowser info : " + bowser.toString() + "<br />");