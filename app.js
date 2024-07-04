// write code here
let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // *John เรียกใช้ method sayHi ที่มี console.log(this.name) 
  //ซึ่ง this.name หมายถึง property name ใน object before the dot