import {
  Flex,
  MenuItem,
  MenuList,
  MenuButton,
  Center,
  Menu,
  Button,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Form } from 'react-router-dom';

type Options = {
  label: string;
  action: string;
};

type Props = {
  options: Options[];
};

const MenuBar: React.FC<Props> = ({ options }) => {
  return (
    <Flex w="100%">
      <Center padding={1} gap={5}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<MdKeyboardArrowDown />}
            background="none"
            color="blue.500"
            _hover={{ color: 'blue.600' }}
            _active={{ color: 'blue.600', background: 'none' }}
          >
            File
          </MenuButton>
          <MenuList bg="bgPrimary" borderColor="primary">
            {options.map((option, index) => (
              <Form key={index} method="POST" action={option.action}>
                <MenuItem type="submit" bg="bgPrimary">
                  {option.label}
                </MenuItem>
              </Form>
            ))}
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default MenuBar;
