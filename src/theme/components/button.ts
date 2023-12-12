import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    solid: {
      background: 'blue',
      color: 'foreground',
      _hover: {
        background: 'background',
        color: 'blue',
      },
      _active: {
        background: 'background',
        color: 'blue',
      },
    },
  },
});

export default Button;
