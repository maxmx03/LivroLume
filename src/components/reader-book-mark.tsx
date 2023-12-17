import { ButtonProps, IconButton } from '@chakra-ui/react';
import { MdBookmark } from 'react-icons/md';

interface Props extends ButtonProps {
  isActive: boolean;
}

const ReaderBookMark: React.FC<Props> = ({ isActive, ...props }) => {
  return (
    <IconButton
      icon={<MdBookmark />}
      fontSize="42px"
      color={isActive ? 'red.500' : 'textPrimary'}
      aria-label="book mark"
      variant="link"
      {...props}
    />
  );
};

export default ReaderBookMark;
