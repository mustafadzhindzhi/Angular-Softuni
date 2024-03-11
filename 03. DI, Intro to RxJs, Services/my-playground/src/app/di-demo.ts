class Wallet {
    balance = 0
  
    constructor(balance: number) {
      this.balance = balance;
    }
  }
  
  const w = new Wallet(1000);
  
  class Car {
    model: string;
    color: string;
    constructor(model: string, color: string) {
      this.model = model;
      this.color = color
    }
  }
  //bad way
  class Person {
    wallet: Wallet;
    car: Car;
  
    constructor(balance: number, model: string, color: string) {
      this.wallet = new Wallet(balance);
      this.car = new Car(model, color)
    }
  }
  
  const pesho = new Person(2100, 'VW', 'red');
  const ivan = new Person(3200, 'BMW', 'black');
  
  console.log('peshos balance', pesho.wallet.balance);
  console.log('peshos car model', pesho.car.model);
  console.log('ivan balance:', ivan.wallet.balance);
  console.log('ivan car model ', ivan.car.model);
  
  // Better way
  class PersonOptimized {
    wallet: Wallet;
    car: Car;
  
    constructor(wallet: Wallet, car: Car) {
      this.car = car;
      this.wallet = wallet;
    }
  }
  
  const mariasWallet = new Wallet(10000);
  const mariasCar = new Car('Mercedes', 'blue')
  
  const mariaPerson = new PersonOptimized(mariasWallet, mariasCar);
  console.log(mariaPerson);
  
  const petkoWallet = new Wallet(9000);
  const petkoCar = new Car('Mercedes', 'black')
  
  const petkoPerson = new PersonOptimized(petkoWallet, petkoCar);
  console.log(petkoPerson);
  
  
  