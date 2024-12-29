import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import './about-us.scss';
import image from '../../assets/aboutus.jpg';

export function AboutUs() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = useColorModeValue('brand.500', 'brand.500');

  return (
    <>
      <Box className='image-container'>
        <img src={image} alt='About Us' className='full-width-image' />
      </Box>
      <Box
        className='about-us'
        bg={bg}
        color={color}
        p={{ base: 4, md: 8 }}
        borderRadius='lg'
        boxShadow='lg'
      >
        <VStack spacing={8} align='stretch'>
          <Heading as='h1' size='xl' textAlign='center'>
            CorpFactory – Ihr Experte für Vorratsgesellschaften
          </Heading>

          <Text fontSize='lg' textAlign='center'>
            Willkommen bei CorpFactory, Ihrem vertrauenswürdigen Partner für den
            Erwerb von Vorratsgesellschaften. Seit 2024 sind wir spezialisiert
            auf den Vertrieb vorgegründeter Gesellschaften, die Ihnen einen
            schnellen und unkomplizierten Einstieg in die Geschäftswelt
            ermöglichen.
          </Text>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Wer wir sind
            </Heading>
            <Text>
              Bei CorpFactory steht Kundenzufriedenheit an erster Stelle. Unser
              erfahrenes Team besteht aus Experten im Bereich
              Unternehmensgründung und -verwaltung. Mit unserem umfassenden
              Know-how und unserem Engagement für Qualität unterstützen wir
              Unternehmer, Investoren und Gründer dabei, ihre Geschäftsideen
              schnell und effizient umzusetzen.
            </Text>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Was wir tun
            </Heading>
            <Text>
              Unsere Vorratsgesellschaften sind bereits gegründet und
              registriert, jedoch noch nicht operativ tätig gewesen. Dies bietet
              Ihnen den Vorteil, sofort handlungsfähig zu sein, ohne den
              zeitaufwändigen Gründungsprozess durchlaufen zu müssen. Wir bieten
              eine Vielzahl von Gesellschaftsformen an, die auf Ihre
              spezifischen Bedürfnisse zugeschnitten sind, darunter GmbH, UG, AG
              und viele mehr.
            </Text>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Warum wir?
            </Heading>
            <VStack align='start'>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='brand.500' />
                <Text>
                  <strong>Schnelligkeit:</strong> Mit unseren
                  Vorratsgesellschaften können Sie innerhalb weniger Stunden
                  eine voll funktionsfähige Gesellschaft erwerben.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='brand.500' />
                <Text>
                  <strong>Sicherheit:</strong> Alle unsere Gesellschaften sind
                  frei von Verbindlichkeiten und haben keine Geschäftstätigkeit
                  aufgenommen.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='brand.500' />
                <Text>
                  <strong>Erfahrung:</strong> Profitieren Sie von unserer
                  langjährigen Erfahrung und unserem umfassenden Wissen im
                  Bereich der Unternehmensgründung.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='brand.500' />
                <Text>
                  <strong>Kundensupport:</strong> Unser freundliches und
                  kompetentes Team steht Ihnen bei jedem Schritt zur Seite und
                  beantwortet alle Ihre Fragen.
                </Text>
              </HStack>
            </VStack>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Unsere Mission
            </Heading>
            <Text>
              Unsere Mission ist es, Ihnen den Weg in die Selbstständigkeit zu
              erleichtern und Ihnen eine solide Basis für den Geschäftserfolg zu
              bieten. Mit unseren Vorratsgesellschaften legen Sie den Grundstein
              für eine erfolgreiche und zukunftssichere Unternehmensführung.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
