import { useState, useRef } from 'react';
import {
  Box,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  useColorModeValue,
  HStack,
  Center,
  Button,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  price: string;
  description: string;
}

interface CardCarouselProps {
  cards: CardProps[];
}

export function CardCarousel({ cards }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const cardWidth = scrollWidth / cards.length;
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = useColorModeValue('brand.500', 'brand.200');

  return (
    <Box bg={bg} color={color} p={4} borderRadius='md' boxShadow='lg'>
      <VStack spacing={4} align='stretch'>
        <Box
          display='flex'
          overflowX='auto'
          ref={scrollRef}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              border='1px solid'
              borderColor={accentColor}
              borderRadius='md'
              boxShadow='md'
              minW={{ base: '95%', md: '300px' }}
              m={2}
              as={motion.div}
              whileHover={{ boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.2)' }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: '0.3' }}
            >
              <CardHeader>
                <Heading size='md' color={accentColor}>
                  {card.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text dangerouslySetInnerHTML={{ __html: card.price }}></Text>
                <Divider my={2} />
                <Text>{card.description}</Text>
              </CardBody>

              <CardFooter>
                <HStack spacing={4}>
                  <Button colorScheme='brand'>Jetzt reservieren</Button>
                  <Button variant='outline' colorScheme='brand'>
                    Zur {card.title}
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
        </Box>
        <Center mt={4} display={{ base: 'flex', md: 'none' }}>
          <HStack spacing={2}>
            {cards.map((_, index) => (
              <Box
                key={index}
                w={3}
                h={3}
                bg={index === currentIndex ? accentColor : 'gray.400'}
                borderRadius='full'
                onClick={() => handleDotClick(index)}
                cursor='pointer'
                as={motion.div}
                whileTap={{ scale: 1.2 }}
              />
            ))}
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
}
