import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Text, Textarea } from '@chakra-ui/react';

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/6b0d8d80-783a-11ed-a126-b172cf164538';

export const ContactForm = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setWasSubmitted(true);
      console.log('submitted')
    }, 100);
  };

  if (wasSubmitted) {
    return (
      <Text color='gray.100' fontSize='md'>Thank you for contacting me! I'll be in touch soon.</Text>
    );
  };

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='POST' target='_blank' aria-label='Enter your contact information' acceptCharset='UTF-8'>
      <Stack spacing={4} color='gray.100'>

        <FormControl>
          <FormLabel htmlFor='name'>name:</FormLabel>
          <Input type='text' placeholder='your name' size='sm' name='name' id='name' />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='email'>email:</FormLabel>
          <Input type='email' placeholder='your email' size='sm' name='email' id='email' />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='message'>message:</FormLabel>
          <Textarea placeholder='your message' name='message' id='message' />
        </FormControl>

        <Button type='submit' variant='outline' borderColor='gray.100' color='gray.100' size='lg'>
          send message
        </Button>
      </Stack>
    </form>
  );
};
