import { Spinner, Stack, Text } from '@chakra-ui/react';

type Props = {
  text?: string;
};

const Loading: React.FC<Props> = ({ text }) => {
  return (
    <Stack spacing={5} align="center">
      <Spinner
        thickness="4px"
        speed="0.80s"
        emptyColor="fg"
        color="heading"
        size="xl"
      />
      <Text>{text ?? 'Loading'}</Text>
    </Stack>
  );
};

export default Loading;
