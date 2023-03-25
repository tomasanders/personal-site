import { Box, Heading } from "@chakra-ui/react";

export const TitleBar = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' bgColor='gray.700' p={2}>
      <Heading as='h1' color='gray.400' size='md'>tom-sanders-portfolio</Heading>
    </Box>
  );
};
