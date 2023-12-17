
// src/api/pay.jsx
import randomUUID from 'randomuuid/randomUUID';
import { Client } from 'square';
BigInt.prototype.toJSON = function(){return this.toString();}
const { paymentsApi } = new Client({
  accessToken: 'EAAAEJH0SDP63SnAT4QsVavhN8uwrAtdBa9DAWmA7aDrJ2_ka2VuC0kTeH8Evk8I',
  environment: 'sandbox'
});

export default async function handler(req, res) {
  if ( req.method === 'POST' ) {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: 100
      }
    })
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}