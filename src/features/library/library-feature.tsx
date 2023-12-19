import { Grid } from '@chakra-ui/react';
import { Book } from '../../components';
import { LibraryBook } from './library-reducer';

const bookWidth = 260;
const bookHeight = 340;

type Props = {
  books: LibraryBook[];
};

const Library: React.FC<Props> = ({ books }) => {
  return (
    <Grid
      h="100%"
      w="100%"
      templateColumns={`repeat(auto-fill, minmax(${bookWidth + 10}px, 1fr))`}
      justifyItems="center"
      gap={5}
      overflow="auto"
      padding={10}
    >
      {books.map((book) => (
        <Book
          key={book.id}
          imageUrl={book.cover}
          title={book.title}
          filePath={book.filePath}
          height={bookHeight}
          width={bookWidth}
        />
      ))}
    </Grid>
  );
};

export default Library;
