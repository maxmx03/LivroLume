import { ReactReader } from 'react-reader';
import { useState } from 'react';

type Props = {
  url: string | ArrayBufferLike;
};

const Reader: React.FC<Props> = ({ url }) => {
  const [location, setLocation] = useState<string | number>(0);

  return (
    <ReactReader
      url={url}
      location={location}
      locationChanged={(epubcfi: string) => setLocation(epubcfi)}
    />
  );
};
export default Reader;
