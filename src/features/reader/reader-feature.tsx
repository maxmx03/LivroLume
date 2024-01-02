import { Rendition } from 'epubjs';
import { IReactReaderStyle, ReactReader } from 'react-reader';

type Props = {
  url: string | ArrayBufferLike;
  location: string | number;
  readerStyles?: IReactReaderStyle;
  getRendition: (rendition: Rendition) => void;
  locationChanged: (location: string | number) => void;
};

const Reader: React.FC<Props> = ({
  url,
  location,
  readerStyles,
  getRendition,
  locationChanged,
}) => {
  return (
    <ReactReader
      url={url}
      location={location}
      locationChanged={(epubcfi: string) => locationChanged(epubcfi)}
      getRendition={getRendition}
      readerStyles={readerStyles}
    />
  );
};

export default Reader;
