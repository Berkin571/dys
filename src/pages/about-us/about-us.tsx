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
  const accentColor = useColorModeValue('blue.700', 'blue.700');

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
            EKP Corporations – Ihr Experte für Vorratsgesellschaften
          </Heading>

          <Text fontSize='lg' textAlign='center'>
            Willkommen bei EKP Corporations, Ihrem Partner für den Erwerb von
            Vorratsgesellschaften. Wir sind spezialisiert auf den Vertrieb
            vorgegründeter Gesellschaften, insbesondere von
            Unternehmergesellschaften (UG) und Gesellschaften mit beschränkter
            Haftung (GmbH), die Ihnen einen schnellen und unkomplizierten
            Einstieg in die Geschäftswelt ermöglichen.
          </Text>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Wer wir sind
            </Heading>
            <Text>
              Bei EKP Corporations steht Kundenzufriedenheit an erster Stelle.
              Unser erfahrenes Team besteht aus Experten im Bereich
              Unternehmensgründung und -verwaltung. Mit unserem umfassenden
              Know-how und unserem Engagement für Qualität sowie unserem
              Netzwerk aus Notaren, Steuerberatern und Rechtsanwälten
              unterstützen wir Unternehmer, Investoren und Gründer dabei,
              schnell mit einer passenden Vorratsgesellschaft unternehmerisch
              handlungsfähig zu werden.
            </Text>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Was wir tun
            </Heading>
            <Text>
              Unsere Vorratsgesellschaften sind bereits gegründet und im
              Handelsregister eingetragen, jedoch noch nicht operativ tätig
              gewesen. Dies bietet Ihnen den Vorteil, sofort handlungsfähig zu
              sein, ohne den zeitaufwändigen Gründungsprozess durchlaufen zu
              müssen. Wir haben uns auf die Gründung und Vertrieb von
              Unternehmergesellschaften (UG) und Gesellschaften mit beschränkter
              Haftung (GmbH) spezialisiert und können Ihnen Lösungen anbieten,
              die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
            </Text>
          </Box>

          <Box>
            <Heading
              as='h2'
              size='lg'
              mb={'-5px !important'}
              color={accentColor}
            >
              Warum wir?
            </Heading>
            <VStack align='start'>
              <HStack className='h-stack' sx={{ marginTop: '0rem !important' }}>
                <Icon as={CheckCircleIcon} color='blue.700' />
                <Text>
                  <strong>Schnelligkeit:</strong> Mit unseren
                  Vorratsgesellschaften können Sie innerhalb weniger Stunden
                  eine voll funktionsfähige Gesellschaft erwerben.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='blue.700' />
                <Text>
                  <strong>Sicherheit:</strong> Alle unsere Gesellschaften sind
                  frei von Verbindlichkeiten und haben keine Geschäftstätigkeit
                  aufgenommen. Das jeweilige Stammkapital der Gesellschaft ist
                  zum Zeitpunkt des Verkaufs voll eingezahlt.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='blue.700' />
                <Text>
                  <strong>Erfahrung:</strong> Profitieren Sie von unserer
                  langjährigen Erfahrung und unserem umfassenden Wissen im
                  Bereich der Unternehmensgründung.
                </Text>
              </HStack>
              <HStack className='h-stack'>
                <Icon as={CheckCircleIcon} color='blue.700' />
                <Text>
                  <strong>Kundensupport:</strong> Unser freundliches und
                  kompetentes Team steht Ihnen bei jedem Schritt zur Seite und
                  beantwortet alle Ihre Fragen.
                </Text>
              </HStack>
            </VStack>
          </Box>

          <Box sx={{ marginTop: '1.5rem' }}>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Unsere Mission
            </Heading>
            <Text>
              Unsere Mission ist es, Ihnen den Weg zur Handlungsfähigkeit mit
              einer UG oder GmbH zu erleichtern und Ihnen eine solide Basis für
              den Geschäftserfolg zu bieten. Mit unseren Vorratsgesellschaften
              legen Sie den Grundstein für Ihre unternehmerische Tätigkeit.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
