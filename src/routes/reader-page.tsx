import { Flex, useTheme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IReactReaderStyle } from 'react-reader';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
import Reader from '../features/reader/reader-feature';
import { Layout, ReaderBookMark } from '../components';
import readerTheme from '../theme/reader-theme';
import { LibraryBook } from '../features/library/library-reducer';
import { readerRoute } from '../constants/routes';
import { Rendition } from 'epubjs';

const isBookMarked = (book: LibraryBook, location: string | number) => {
  return book.isPageMarked && book.location === location;
};

type LoaderData = {
  url: string | ArrayBufferLike;
  book: LibraryBook;
};

const ReaderPage = () => {
  const submit = useSubmit();
  const { colors } = useTheme();
  const { url, book } = useLoaderData() as LoaderData;
  const [location, setLocation] = useState<string | number>(0);
  const [rendition, setRendition] = useState<Rendition>();
  const [readerStyles, setReaderStyles] = useState<IReactReaderStyle>();

  useEffect(() => {
    if (rendition) setReaderStyles(readerTheme(colors, rendition));
  }, [rendition]);

  useEffect(() => {
    if (book) setLocation(book.location);
  }, []);

  const onPageMark = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('location', location.toString());
    formData.append('bookId', book.filePath);
    submit(formData, { method: 'post', action: readerRoute.edit.url() });
  };

  return (
    <Layout>
      <Flex width="100%" flexDir="row-reverse">
        <Form onSubmit={onPageMark}>
          <ReaderBookMark
            type="submit"
            isActive={isBookMarked(book, location)}
          />
        </Form>
      </Flex>
      <Reader
        url={url}
        location={location}
        readerStyles={readerStyles}
        getRendition={setRendition}
        locationChanged={setLocation}
      />
    </Layout>
  );
};

export default ReaderPage;
