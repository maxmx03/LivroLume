import { Grid } from '@chakra-ui/react';
import { Book as LibraryBook } from '../../components';
import { Book } from './library-reducer';

const bookWidth = 260;
const bookHeight = 340;

type Props = {
  books: Book[];
};

const Library: React.FC<Props> = ({ books }) => {
  return (
    <Grid
      h="100%"
      w="100%"
      templateColumns={`repeat(auto-fill, minmax(${bookWidth + 10}px, 1fr))`}
      rowGap={10}
      overflow="auto"
      padding={10}
    >
      {books.map((book) => (
        <LibraryBook
          key={book.id}
          imageUrl={book.cover}
          title={book.title}
          height={bookHeight}
          width={bookWidth}
        />
      ))}
    </Grid>
  );
};

export default Library;
