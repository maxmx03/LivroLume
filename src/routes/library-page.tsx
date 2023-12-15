import { useLoaderData } from 'react-router-dom';
import { Layout, MenuBar } from '../components';
import Library from '../features/library/library-feature';
import { LibraryBook } from '../features/library/library-reducer';

const options = [
  {
    label: 'Open File',
    action: 'add/file',
  },
];

const LibraryPage = () => {
  const books = useLoaderData() as LibraryBook[];

  return (
    <Layout flexDir="column">
      <MenuBar options={options} />
      <Library books={books} />
    </Layout>
  );
};

export default LibraryPage;
