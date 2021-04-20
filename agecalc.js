function Person(dob) {
    
    this.birthday = new Date(dob); 
    
    this.calculateAge = function() {
      
      const diff = Date.now() - this.birthday.getTime(); 
      
      const ageDate = new Date(diff); 
      
      
      console.log(ageDate.getUTCFullYear()); 
      
      
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
  }
  var age =new Person('2001-2-1').calculateAge();
  console.log(age); 