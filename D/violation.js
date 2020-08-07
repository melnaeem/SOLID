class Store {
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.paypal = new paypal();
    this.user = user;
  }

  purchaseBike(quantity) {
    this.paypal.makePayment(this.user, 200 * quantity)
    // this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity)
    // this.stripe.makePayment(15 * quantity * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
  }
}

class paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of ${amountInDollars} with paypal`);
  }
}

const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2);