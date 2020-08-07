class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity)
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity)
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

// Same interface as StripePaymentProcessor
class PaypalPaymentProcessor {
  constructor(user) {
    this.paypal = new Paypal(user);
  }

  pay(amountInDollars) {
    this.paypal.makePayment(amountInDollars);
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

class Paypal {
  constructor() {
    this.user = user;
  }

  makePayment(amountInDollars) {
    console.log(`${this.user} made payment of ${amountInDollars} with paypal`);
  }
}

// you can switch between new PaypalPaymentProcessor(user)
// payment processors with minimum changes
const paymentProcessor = new StripePaymentProcessor('John');
const store = new Store(paymentProcessor);
store.purchaseBike(2);
store.purchaseHelmet(2);
