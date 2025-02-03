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
        <Title label='EKP Corporations – Ihr Partner für Vorratsgesellschaften' />

        <TextComponent>
          Willkommen bei EKP Corporations, Ihrem Partner für den Erwerb von
          Vorratsgesellschaften. Wir sind spezialisiert auf den Vertrieb
          vorgegründeter Gesellschaften mit beschränkter Haftung (GmbH) und
          Unternehmergesellschaften (UG), die Ihnen einen schnellen und
          unkomplizierten Einstieg in die Geschäftswelt ermöglichen.
        </TextComponent>

        <VStack spacing={8} align='stretch'>
          <Box>
            <Heading as='h2' size='lg' mb={4} color={accentColor}>
              Unsere Priorität: Ihre Zufriedenheit
            </Heading>
            <TextComponent mb={2}>
              Bei EKP Corporations steht Kundenzufriedenheit an erster Stelle.
              Mit unserem erfahrenen Expertenteam und unserem Netzwerk aus
              Notaren, Steuerberatern und Rechtsanwälten unterstützen wir
              Unternehmer, Investoren und Gründer dabei, schnell mit einer
              passenden Vorratsgesellschaft unternehmerisch handlungsfähig zu
              werden.
            </TextComponent>
          </Box>

          <Box>
            <Heading as='h2' size='lg' mb={3} color={accentColor}>
              Schnell handlungsfähig mit einer Vorrats-GmbH oder Vorrats-UG
            </Heading>
            <TextComponent mb={2}>
              Wenn es mal schnell gehen muss und Sie kurzfristig mit einer GmbH
              oder UG handlungsfähig sein müssen, ist eine Vorratsgesellschaft
              genau das Richtige für Sie. Unsere Vorratsgesellschaften sind
              bereits gegründet und im Handelsregister eingetragen, jedoch noch
              nicht operativ tätig gewesen. Dies bietet Ihnen den Vorteil,
              sofort handlungsfähig zu sein, ohne den zeitaufwändigen
              Gründungsprozess durchlaufen zu müssen. Zudem umgehen Sie damit
              die persönliche Haftung während des Gründungsprozesses, da Sie von
              uns eine fertig gegründete Gesellschaft übernehmen, bei der Sie ab
              Übernahme eine sofortige persönliche Haftungsbeschränkung
              genießen. Wir haben uns auf die Gründung und Vertrieb von
              Gesellschaften mit beschränkter Haftung (GmbH) und
              Unternehmergesellschaften (UG) spezialisiert und können Ihnen
              Lösungen anbieten, die auf Ihre spezifischen Bedürfnisse
              zugeschnitten sind.
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
                  Vorratsgesellschaften können Sie innerhalb kurzer Zeit eine
                  voll funktionsfähige Gesellschaft erwerben ohne den
                  zeitaufwändigen Gründungsprozess durchlaufen zu müssen.
                </TextComponent>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Sicherheit:</strong> Alle unsere Gesellschaften sind
                  frei von Lasten und Verbindlichkeiten und haben keine
                  Geschäftstätigkeit aufgenommen. Das jeweilige satzungsmäßige
                  Stammkapital der Gesellschaft ist zum Zeitpunkt des Verkaufs
                  voll eingezahlt.
                </TextComponent>
              </HStack>
              <HStack>
                <Icon as={CheckCircleIcon} color={accentColor} />
                <TextComponent mb={1}>
                  <strong>Erfahrung:</strong> Profitieren Sie von unserer
                  Erfahrung und unserem umfassenden Wissen im Bereich der
                  Unternehmensgründung.
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
              einer GmbH oder UG zu erleichtern und Ihnen eine solide Basis für
              den Geschäftserfolg zu bieten. Mit unseren Vorratsgesellschaften
              legen Sie den Grundstein für Ihre unternehmerische Tätigkeit.
            </TextComponent>
          </Box>
        </VStack>
      </ContainerComponent>
    </>
  );
}
