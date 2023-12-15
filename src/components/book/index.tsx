import { Center, GridItem, Image, Text } from '@chakra-ui/react';
import BookOverlay from './book-overlay';

type Props = {
  title: string;
  imageUrl: string;
  height: number;
  width: number;
};

const Book: React.FC<Props> = ({ title, imageUrl, height, width }) => {
  return (
    <GridItem width={width} height={height} position="relative">
      <Image
        src={imageUrl}
        fallback={
          <Center h="100%" w="100%" bg="foreground" p={5} boxShadow="2xl">
            <Text color="background">{title}</Text>
          </Center>
        }
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        borderRadius="7px"
      />
      <BookOverlay title={title} />
    </GridItem>
  );
};

export default Book;
