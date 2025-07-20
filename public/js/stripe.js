/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    const stripe = Stripe(
      'pk_test_51RlbblQvY8ZSKutiboJh3xfDUxJojSwmNcKsKLUhX2E2Ap545ZmUTk8Qo1JILHY4oslUIql5L972CnnlZOa7QDre00LZNzt7T3'
    );

    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // console.log(session);
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
