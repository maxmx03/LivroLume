import { Button, VStack, Heading, Text, Center } from '@chakra-ui/react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Layout } from '../components';

type Error = {
  statusText: string;
  message: string;
};

const ErrorPage = () => {
  const navigate = useNavigate();

  const goPreviousPage = () => {
    navigate(-1);
  };

  return (
    <Layout as={Center} flexDir="column" gap={5}>
      <Heading fontSize="6rem" role="heading">
        404
      </Heading>
      <Button
        onClick={goPreviousPage}
        // bg="blue"
        // color="foreground"
        // _hover={{ background: 'foreground', color: 'blue' }}
        // _active={{ background: 'foreground', color: 'blue' }}
      >
        Go Back
      </Button>
    </Layout>
  );
};

export default ErrorPage;
