import { useState } from 'react';
import { Button } from '@chakra-ui/react';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/6b0d8d80-783a-11ed-a126-b172cf164538';

export const ContactForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setWasSubmitted(true);
    }, 100);
  };

  if (wasSubmitted) {
    return (
      <p>Thank you for contacting me! I'll be in touch soon.</p>
    );
  };

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST' target='_blank' aria-label='Enter your contact information'>
      <label htmlFor='name'>name:</label>
      <input type='text' placeholder='your name' id='name' name='name' />

      <label htmlFor='email'>email:</label>
      <input type='email' placeholder='your email' id='email' name='email' />

      <label htmlFor='message'>message:</label>
      <textarea name='message' id='message' cols='30' rows='10' placeholder='your message' />

      <Button>send message</Button>
    </form>
  );
};
