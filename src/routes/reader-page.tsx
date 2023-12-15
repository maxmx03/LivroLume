import { useLoaderData } from 'react-router-dom';
import { Layout } from '../components';
import Reader from '../features/reader/reader-feature';

// TODO: TOOL-BAR
// TODO: THEMES

const ReaderPage = () => {
  const url = useLoaderData() as string | ArrayBufferLike;

  return (
    <Layout>
      <Reader url={url} />
    </Layout>
  );
};

export default ReaderPage;
