import { Box } from "@chakra-ui/react";
import { SideNavDrawer } from "./SideNavDrawer";

export const SideNav = () => {
  return (
    <Box display='flex' flexDirection='column' p={2} bgColor='gray.500'>
      <SideNavDrawer />
    </Box>
  );
};
