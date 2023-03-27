(() => {

type UserID = string | number;  //crear un tipado especifico
let userId: UserID;


  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {

    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }else{
      console.log(`string ${userId.toFixed(1)}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');

})();
