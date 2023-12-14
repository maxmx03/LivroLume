import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { Center } from '@chakra-ui/react';

const LazyOutlet = () => {
  const navigation = useNavigation()

  return (
    <>
      {navigation.state !== 'idle' ? (
        <Center h="100%" w="100%">
          <Loading text={navigation.state} />
        </Center>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default LazyOutlet;
