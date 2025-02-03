import {
  ContainerComponent,
  FullWidthImage,
  TextComponent,
  Title,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';
import {
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Icon,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export function GmbH() {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const accentColor = 'var(--primary)';

  const handleNavigation = () => {
    navigate('/contact');
  };

  return (
    <>
      <FullWidthImage src={lectureCompanies} alt='GmbH' yOffset='50%' />
      <ContainerComponent>
        <Title label='GmbH' />
        <TextComponent>
          Die Gesellschaft mit beschränkter Haftung (GmbH) ist eine der
          beliebtesten Unternehmensformen in Deutschland. Ein zentraler Vorteil
          der GmbH ist die persönliche Haftungsbeschränkung der Gesellschafter
          nach ordnungsgemäßer Gründung und Handelsregistereintragung. Das
          bedeutet, dass die Gesellschafter nicht mit ihren persönlichen
          Vermögenswerten haften sondern die Haftung auf das
          Gesellschaftsvermögen begrenzt ist. Die GmbH eignet sich für nahezu
          alle Branchen und Unternehmensgrößen und genießt in Deutschland sowie
          international hohes Ansehen. Das Mindeststammkapital für eine GmbH
          beträgt 25.000 Euro und die Gründung ist komplexer und zeitaufwendiger
          als bei anderen Rechtsformen, insbesondere als bei
          Personengesellschaften. Als Kapitalgesellschaft bestehen für die GmbH
          Bilanzierungs- und Publikationspflichten.
        </TextComponent>

        <Text fontSize='xl' fontWeight='bold' mb={4}>
          Allgemeines
        </Text>

        <Accordion allowMultiple width='100%'>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize='lg'
                      fontWeight='bold'
                    >
                      Kaufpreis
                    </Box>
                    <Box>
                      <Icon
                        as={isExpanded ? ChevronUpIcon : ChevronDownIcon}
                        boxSize={5}
                      />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TextComponent mb={4} fontSize='md'>
                    Der Kaufpreis für eine GmbH beträgt 28.500 EUR.
                  </TextComponent>
                  <TextComponent mb={4} fontSize='md'>
                    Im Kaufpreis ist das voll eingezahlte Stammkapital von
                    25.000 EUR enthalten. Die gesamten Gründungskosten wurden
                    bereits von uns beglichen. Von unserer Seite fallen keine
                    weiteren Kosten an.
                  </TextComponent>
                  <TextComponent mb={0} fontSize='md'>
                    Für die notarielle Beurkundung des Erwerbs der GmbH sowie
                    für die Handelsregistereintragung fallen zusätzlich Notar-
                    und Gerichtskosten an, die vom Käufer zu zahlen sind.
                  </TextComponent>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize='lg'
                      fontWeight='bold'
                    >
                      Bankkonto
                    </Box>
                    <Box>
                      <Icon
                        as={isExpanded ? ChevronUpIcon : ChevronDownIcon}
                        boxSize={5}
                      />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TextComponent mb={0} fontSize='md'>
                    Jede unserer Vorratsgesellschaften verfügt über ein
                    übernahmefähiges Bankkonto, die nach Umschreibung auf die
                    neue Geschäftsführung uneingeschränkt als Geschäftskonto
                    genutzt werden kann. Für die Umschreibung muss die neue
                    Geschäftsführung sich bei der Bank legitimieren sowie eine
                    sogenannte KYC-Prüfung durchlaufen. Wir unterstützen Sie bei
                    der Vorbereitung der relevanten Unterlagen damit die
                    Kontoumschreibung möglichst schnell und reibungslos
                    vollzogen werden kann.
                  </TextComponent>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      flex='1'
                      textAlign='left'
                      fontSize='lg'
                      fontWeight='bold'
                    >
                      Steuernummer
                    </Box>
                    <Box>
                      <Icon
                        as={isExpanded ? ChevronUpIcon : ChevronDownIcon}
                        boxSize={5}
                      />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <TextComponent mb={0} fontSize='md'>
                    Vorratsgesellschaften verfügen grundsätzlich nicht über eine
                    reguläre Steuernummer sondern lediglich über eine vorläufige
                    Steuernummer. Hintergrund ist, dass Finanzämter keine
                    reguläre Steuernummer an Vorratsgesellschaften vergeben, da
                    sich nach dem Erwerb der Gesellschaft der Unternehmenssitz
                    ändern und die Gesellschaft damit in die örtliche
                    Zuständigkeit eines anderen Finanzamtes fallen kann. Erst
                    nach Erwerb und Klärung der örtlichen Zuständigkeit des
                    entsprechenden Finanzamtes, vergibt dieses der Gesellschaft
                    anschließend eine reguläre Steuernummer.
                  </TextComponent>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          marginTop={'1.5rem'}
        >
          <Button
            width={isMobile ? '70%' : '400px'}
            backgroundColor={accentColor}
            onClick={handleNavigation}
            _hover={{
              backgroundColor: 'var(--primary-hover)',
              transform: 'scale(1.01)',
            }}
          >
            GmbH reservieren
          </Button>
        </Box>

        {/* <CardComponent
          title='GmbH'
          description='inkl. 25.000 Euro eingezahltes Kapital'
          price={
            <>
              Kaufpreis <strong>27.900 Euro</strong>
            </>
          }
        /> */}
      </ContainerComponent>
    </>
  );
}
