import { Box, Heading, VStack, HStack, Icon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Title,
  ContainerComponent,
  FullWidthImage,
  TextComponent,
} from '../../components';
import aboutUsImage from '../../assets/ueber_ekp_corporation.jpg';
import './about-us.scss';

export function AboutUs() {
  const accentColor = 'var(--primary)';

  return (
    <>
      <FullWidthImage src={aboutUsImage} alt='About Us' yOffset='60%' />
      <ContainerComponent className='about-us'>
        <Title label='EKP Corporations – Ihr Experte für Vorratsgesellschaften' />

        <TextComponent>
          Willkommen bei EKP Corporations, Ihrem Partner für den Erwerb von
          Vorratsgesellschaften. Wir sind spezialisiert auf den Vertrieb
          vorgegründeter Gesellschaften, insbesondere von
          Unternehmergesellschaften (UG) und Gesellschaften mit beschränkter
          Haftung (GmbH), die Ihnen einen schnellen und unkomplizierten Einstieg
          in die Geschäftswelt ermöglichen.
        </TextComponent>

        <VStack spacing={8} align='stretch'>
          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Wer wir sind
            </Heading>
            <TextComponent mb={2}>
              Bei EKP Corporations steht Kundenzufriedenheit an erster Stelle.
              Unser erfahrenes Team besteht aus Experten im Bereich
              Unternehmensgründung und -verwaltung. Mit unserem umfassenden
              Know-how und unserem Engagement für Qualität sowie unserem
              Netzwerk aus Notaren, Steuerberatern und Rechtsanwälten
              unterstützen wir Unternehmer, Investoren und Gründer dabei,
              schnell mit einer passenden Vorratsgesellschaft unternehmerisch
              handlungsfähig zu werden.
            </TextComponent>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={3} color={accentColor}>
              Was wir tun
            </Heading>
            <TextComponent mb={2}>
              Unsere Vorratsgesellschaften sind bereits gegründet und im
              Handelsregister eingetragen, jedoch noch nicht operativ tätig
              gewesen. Dies bietet Ihnen den Vorteil, sofort handlungsfähig zu
              sein, ohne den zeitaufwändigen Gründungsprozess durchlaufen zu
              müssen. Wir haben uns auf die Gründung und Vertrieb von
              Unternehmergesellschaften (UG) und Gesellschaften mit beschränkter
              Haftung (GmbH) spezialisiert und können Ihnen Lösungen anbieten,
              die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
            </TextComponent>
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
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Schnelligkeit:</strong> Mit unseren
                  Vorratsgesellschaften können Sie innerhalb weniger Stunden
                  eine voll funktionsfähige Gesellschaft erwerben.
                </TextComponent>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Sicherheit:</strong> Alle unsere Gesellschaften sind
                  frei von Verbindlichkeiten und haben keine Geschäftstätigkeit
                  aufgenommen. Das jeweilige Stammkapital der Gesellschaft ist
                  zum Zeitpunkt des Verkaufs voll eingezahlt.
                </TextComponent>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Erfahrung:</strong> Profitieren Sie von unserer
                  langjährigen Erfahrung und unserem umfassenden Wissen im
                  Bereich der Unternehmensgründung.
                </TextComponent>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Kundensupport:</strong> Unser freundliches und
                  kompetentes Team steht Ihnen bei jedem Schritt zur Seite und
                  beantwortet alle Ihre Fragen.
                </TextComponent>
              </HStack>
            </VStack>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Unsere Mission
            </Heading>
            <TextComponent mb={2}>
              Unsere Mission ist es, Ihnen den Weg zur Handlungsfähigkeit mit
              einer UG oder GmbH zu erleichtern und Ihnen eine solide Basis für
              den Geschäftserfolg zu bieten. Mit unseren Vorratsgesellschaften
              legen Sie den Grundstein für Ihre unternehmerische Tätigkeit.
            </TextComponent>
          </Box>
        </VStack>
      </ContainerComponent>
    </>
  );
}
