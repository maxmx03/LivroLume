import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import themes from './theme';
import useTheme from './hooks/use-theme';

const App = () => {
  const { theme } = useTheme();

  return (
    <ChakraProvider theme={themes[theme]}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
