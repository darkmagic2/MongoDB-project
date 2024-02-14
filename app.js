const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})

const personSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "you need a name bro"]
  },
  age: {
    type: Number,
    min: 18,
    max: 60
  },
  favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peach = new Fruit ({
  name: "Peaches",
  rating: 10,
  review: "Peaches are delicious!",
});

// peach.save();

const Person = mongoose.model("Person", personSchema);

Person.updateOne({_id: "63878e844d8d583c84c49bd7"}, {favoriteFruit: peach}, function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Added favorite fruit to person")
  }
})

// const person = new Person ({
//   name: "Jessica",
//   age: 35,
//   favoriteFruit: kiwi
// });
//
// person.save();

// const Fruit = mongoose.model("Fruit", fruitSchema);


// const john = new Person({
//   name: "John",
//   age: 35
// });
//
// const caitlin = new Person({
//   name: "Caitlin",
//   age: 31
// })

// Person.insertMany([john, caitlin], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved the names to personDB")
//   }
// });


Person.find(function(err, people){
  // mongoose.connection.close();
  if (err){
    console.log(err);
  } else {
    // people.forEach(people => console.log(people.name))
    people.forEach(function(person){
      console.log(person.name);
    });
  }
});

// Person.updateOne({_id: "63878cc295a8dba948f04a1f"}, {name: "Jessica"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Done updating the object")
//   }
// })

// Person.deleteMany({name: "Angel"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("You have deleted all the Angel entrries")
//   }
// })
