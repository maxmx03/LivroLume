import { AbsoluteCenter, Button, Center, HStack, Text } from '@chakra-ui/react';
import { Form, SubmitOptions, useSubmit } from 'react-router-dom';
import { libraryRoute } from '../../constants/routes';

type Props = {
  title: string;
  filePath: string;
};

const buttonWidth = '70px';

const BookOverlay: React.FC<Props> = ({ title, filePath }) => {
  const submit = useSubmit();

  const submitForm = (
    event: React.FormEvent<HTMLFormElement>,
    opts: SubmitOptions
  ) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('filePath', filePath);
    submit(formData, {
      method: opts.method,
      action: opts.action,
    });
  };

  const onReadBook = (event: React.FormEvent<HTMLFormElement>) => {
    const action = libraryRoute.read.url();
    submitForm(event, { method: 'POST', action });
  };

  const onDeleteBook = (event: React.FormEvent<HTMLFormElement>) => {
    const action = libraryRoute.delete.url();
    submitForm(event, { method: 'POST', action });
  };

  return (
    <AbsoluteCenter
      opacity="0"
      transition="opacity 0.3s"
      bg="rgba(0, 0, 0, 0.75)"
      h="100%"
      w="100%"
      borderRadius="7px"
      _hover={{
        opacity: '1',
      }}
    >
      <Center h="inherit" w="inherit" flexDir="column" gap={3}>
        <Text color="#ffffff" textAlign="center">
          {title}
        </Text>
        <HStack>
          <Form onSubmit={onReadBook}>
            <Button type="submit" colorScheme="blue" width={buttonWidth}>
              Read
            </Button>
          </Form>
          <Form onSubmit={onDeleteBook}>
            <Button type="submit" colorScheme="red" width={buttonWidth}>
              Delete
            </Button>
          </Form>
        </HStack>
      </Center>
    </AbsoluteCenter>
  );
};

export default BookOverlay;
