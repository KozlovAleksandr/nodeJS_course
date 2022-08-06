import EventEmmiter from "events";

const emmiter = new EventEmmiter();

const RequestTypes = [
  {
    type: "send",
    payload: "to send a document",
  },
  {
    type: "receive",
    payload: "to receive a document",
  },
  {
    type: "sign",
    payload: "to sign a document",
  },
];

class Customer {
  constructor({ type, payload }) {
    this.type = type;
    this.payload = payload;
  }
}

const generateIntRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateNewCustomer = () => {
  const randonCustomer = RequestTypes[generateIntRange(0, RequestTypes.length - 1)]
  return new Customer(randonCustomer)
}

class Handler {
  static send(payload) {
    console.log("Send request: ", payload);
  }
  static receive(payload) {
    console.log("Send receive: ", payload);
  }
  static sign(payload) {
    console.log("Send sign: ", payload);
  }
}

emmiter.on('send', Handler.send)
emmiter.on('receive', Handler.receive)
emmiter.on('sign', Handler.sign)

//emmiter.emit('receive', 'payload')

const run = async () => {
  const { type, payload } = generateNewCustomer()

  emmiter.emit(type, payload)

  await new Promise(resolve => setTimeout(resolve, generateIntRange(1000, 5000)))

  await run()
}

run()