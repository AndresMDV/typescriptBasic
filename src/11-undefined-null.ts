(() => {

  //let myNumber: number = undefined; no es el typo
  //let myString: string = null;  no es el typo

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber =12;

  let myString: string | undefined = undefined;
  myString = 'assa';

  function hi(name: string | null) {

    let hello = 'Hola';
    if(name) {
      hello += name.toLocaleLowerCase();
    }else{
      hello += ' nobody'
    }
    console.log(hello)

  }

  //codigo mas limpio.
  function hiv2(name: string | null) {

    let hello = 'Hola';
    hello += name?.toLocaleLowerCase() || ' nobody';
    console.log(hello)

  }

  hi(' Nicolas');
  hi(null);
  hiv2(' Nicolas');
  hiv2(null);
})();
