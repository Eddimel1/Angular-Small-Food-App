import { Injectable } from '@nestjs/common'
import Stripe from 'stripe'

@Injectable()
export class AppService {
  //use yours stripe secret key
  async createCheckOutSession() {
    const stripe = new Stripe(process.env.stripe_secret_key, {
      apiVersion: '2022-08-01',
    })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      cancel_url: 'http://localhost:4200/',
      success_url: 'http://localhost:4200/',
      mode: 'payment',
    })
    return session.id
  }
}
