import { VStack } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }) => (
  <VStack alignItems="start" spacing={10}>
    {children}
  </VStack>
);

export default Section;
