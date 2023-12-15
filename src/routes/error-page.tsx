import { Button, Center, Heading } from '@chakra-ui/react';
import { Layout } from '../components';
import { useNavigate } from 'react-router-dom';

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
      <Button onClick={goPreviousPage}>Go Back</Button>
    </Layout>
  );
};

export default ErrorPage;
