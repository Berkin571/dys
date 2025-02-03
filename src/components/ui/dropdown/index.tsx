import { Menu, MenuItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export function Dropdown() {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuItem
        onClick={() => navigate('/vorratsgesellschaften')}
        borderRadius='5px'
        px={4}
        py={2}
        whiteSpace='nowrap'
        _hover={{
          bg: 'gray.200',
        }}
      >
        Unsere Leistungsversprechen
      </MenuItem>
      <MenuItem
        onClick={() => navigate('/gmbh')}
        borderRadius='5px'
        px={4}
        py={2}
        whiteSpace='nowrap'
        _hover={{
          bg: 'gray.200',
        }}
      >
        GmbH
      </MenuItem>
      <MenuItem
        onClick={() => navigate('/ug')}
        borderRadius='5px'
        px={4}
        py={2}
        whiteSpace='nowrap'
        _hover={{
          bg: 'gray.200',
        }}
      >
        UG (haftungsbeschränkt)
      </MenuItem>
    </Menu>
  );
}
