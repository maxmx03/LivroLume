import { AbsoluteCenter, Button, Center, Text } from '@chakra-ui/react';

type Props = {
  title: string;
};

const BookOverlay: React.FC<Props> = ({ title }) => (
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
      <Button type="submit">Read</Button>
    </Center>
  </AbsoluteCenter>
);

export default BookOverlay;
