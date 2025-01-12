import { Menu, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Dropdown() {
  const navigate = useNavigate();

  return (
    // TODO: weite anpassen
    <Menu>
      <MenuItem
        onClick={() => navigate('/gmbh')}
        borderRadius='5px'
        px={1}
        py={0.5}
        mb={3}
        _hover={{
          bg: 'gray.200',
        }}
      >
        GmbH
      </MenuItem>
      <MenuItem
        onClick={() => navigate('/ug')}
        borderRadius='5px'
        px={1}
        py={0.5}
        _hover={{
          bg: 'gray.200',
        }}
      >
        UG (haftungsbeschränkt)
      </MenuItem>
    </Menu>
  );
}
