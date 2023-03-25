import { Box, Icon, Link } from "@chakra-ui/react";
import { SideNavDrawer } from "./SideNavDrawer";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import NextLink from 'next/link'
export const SideNav = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' p={2} bgColor='gray.900'>
      <SideNavDrawer />

      <Box display='flex' flexDirection='column' gap={4}>

      <Link as={NextLink} href='/resume' aria-label='View my HTML resume' target='_blank'>
        <Icon as={IoDocumentTextOutline} color='gray.100' fontSize='3xl' />
      </Link>

      <Link as={NextLink} href='https://www.linkedin.com/in/thomasasanders/' aria-label='View my Linkedin profile' target='_blank'>
        <Icon as={TbBrandLinkedin} color='gray.100' fontSize='3xl' />
      </Link>

      <Link as={NextLink} href='https://www.github.com/tomasanders' aria-label='View my GitHub profile' target='_blank'>
        <Icon as={TbBrandGithub} color='gray.100' fontSize='3xl' />
      </Link>
      </Box>
    </Box>
  );
};
