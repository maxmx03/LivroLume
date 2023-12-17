import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    solid: {
      background: 'blue.500',
      color: 'bgPrimary',
      _hover: {
        background: 'bgPrimary',
        color: 'blue.500',
      },
      _active: {
        background: 'bgPrimary',
        color: 'blue.500',
      },
    },
  },
});

export default Button;
