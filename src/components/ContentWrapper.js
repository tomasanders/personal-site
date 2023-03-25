import { Box } from "@chakra-ui/react";
import { NavTabs } from "./NavTabs";
import { SideNav } from "./SideNav";

export const ContentWrapper = () => {
  return (
    <Box display='flex' h='full'>
      <SideNav />
      <NavTabs />
    </Box>
  );
};
