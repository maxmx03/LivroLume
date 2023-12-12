import { Heading, Text, VStack } from '@chakra-ui/react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Article: React.FC<Props> = ({ title, children }) => (
  <VStack alignItems="start" width="50%">
    <Heading>{title}</Heading>
    <Text fontSize="larger">{children}</Text>
  </VStack>
);

export default Article;
