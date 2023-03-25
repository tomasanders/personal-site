import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const NavTabs = () => {
  return (
    <Tabs variant='enclosed-colored'>
      <TabList>
        <Tab _selected={{ borderBottom: '1px', borderColor: 'green.300' }}>portfolio.js</Tab>
        <Tab _selected={{ borderBottom: '1px', borderColor: 'green.300' }}>README.md</Tab>
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
