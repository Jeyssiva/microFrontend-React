import { Box } from '@chakra-ui/react';
import React from 'react';
import ViewEmployees from './components/viewEmployees';

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-2</Box>
    <Box>
      <ViewEmployees />
    </Box>
  </Box>
);

export default App;