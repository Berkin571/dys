import {
  Box,
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface CardComponentProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  price: any;
  description: string;
}

export function CardComponent({
  title,
  description,
  price,
}: CardComponentProps) {
  const navigate = useNavigate();
  const accentColor = 'var(--primary)';

  const handleNavigation = () => {
    navigate('/contact');
  };

  return (
    <Box width='100%' padding={4}>
      <Card
        key={title}
        border='1px solid'
        borderColor={accentColor}
        borderRadius='md'
        boxShadow='md'
        width='100%'
        transition='all 0.3s ease'
        _hover={{
          transform: 'scale(1.02)',
          boxShadow: 'lg',
        }}
      >
        <CardHeader>
          <Heading size='lg' color={accentColor}>
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize='xl' fontWeight='bold'>
            {price}
          </Text>
          <Divider my={4} />
          <Text fontSize='md'>{description}</Text>
        </CardBody>
        <CardFooter>
          <HStack spacing={4}>
            <Button
              backgroundColor={accentColor}
              onClick={handleNavigation}
              _hover={{
                backgroundColor: 'var(--primary-hover)',
                transform: 'scale(1.05)',
              }}
            >
              Jetzt anfragen
            </Button>
            <Button
              variant='outline'
              border='1px solid var(--primary)'
              color={accentColor}
              onClick={() => navigate(`/${title}`)}
              _hover={{
                border: '1px solid var(--primary-hover)',
                transform: 'scale(1.05)',
              }}
            >
              Zur {title}
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </Box>
  );
}
