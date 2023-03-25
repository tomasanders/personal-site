import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const NavTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>portfolio.js</Tab>
        <Tab>README.md</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>portfolio code</p>
        </TabPanel>
        <TabPanel>
          <p>readme</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
