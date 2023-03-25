import { Box } from "@chakra-ui/react";
import { SideNav } from "./SideNav";

export const ContentWrapper = () => {
  return (
    <Box display='flex' h='full'>
      <SideNav />
    </Box>
  );
};
