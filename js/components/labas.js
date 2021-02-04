function labas(data) {
   for (let i = 0; i < data.length; i++) {
      const person = data[i];

      //console.log(person);

      //console.log(person['name']);
      //console.log(person['fruit']);
    
   //rekomendacija naudoti toki varianta:
      //console.log(person.name);
      //console.log(person.fruit);

      console.log(`hi, my name is ${person.name} and I like ${person.fruit}`);
   }
}

export { labas }