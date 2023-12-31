import { Center, GridItem, Image, Text } from '@chakra-ui/react';
import BookOverlay from './book-overlay';

type Props = {
  title: string;
  imageUrl: string;
  filePath: string;
  height: number;
  width: number;
};

const Book: React.FC<Props> = ({
  title,
  imageUrl,
  filePath,
  height,
  width,
}) => {
  return (
    <GridItem width={width} height={height} position="relative">
      <Image
        src={imageUrl}
        fallback={
          <Center h="100%" w="100%" bg="bgDark" p={5} boxShadow="2xl">
            <Text>{title}</Text>
          </Center>
        }
        alt={title}
        objectFit="cover"
        w="100%"
        h="100%"
        borderRadius="7px"
      />
      <BookOverlay title={title} filePath={filePath} />
    </GridItem>
  );
};

export default Book;
