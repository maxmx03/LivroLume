import { Grid } from '@chakra-ui/react';
import { Book } from '../../components';
import { LibraryBook } from './library-reducer';
import { Form, useSubmit } from 'react-router-dom';
import { libraryRoute } from '../../constants/routes';

const bookWidth = 260;
const bookHeight = 340;

type Props = {
  books: LibraryBook[];
};

const Library: React.FC<Props> = ({ books }) => {
  const submit = useSubmit();

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
        <Form
          key={book.id}
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('filePath', book.filePath);
            submit(formData, {
              method: 'post',
              action: libraryRoute.read.url(),
            });
          }}
        >
          <Book
            imageUrl={book.cover}
            title={book.title}
            height={bookHeight}
            width={bookWidth}
          />
        </Form>
      ))}
    </Grid>
  );
};

export default Library;
