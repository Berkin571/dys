import {
  ContainerComponent,
  FullWidthImage,
  TextComponent,
  Title,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';
import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Icon,
  AccordionButton,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export function UG() {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const accentColor = 'var(--primary)';

  const handleNavigation = () => {
    navigate('/contact');
  };

  return (
    <>
      <FullWidthImage
        src={lectureCompanies}
        alt='UG (haftungsbeschränkt)'
        yOffset='50%'
      />
      <ContainerComponent>
        <Title label='UG (haftungsbeschränkt)' size={isMobile ? 'lg' : 'xl'} />
        <TextComponent>
          Die Unternehmergesellschaft (haftungsbeschränkt), kurz UG
          (haftungsbeschränkt), ist eine Sonderform der GmbH und in Deutschland
          besonders beliebt bei Gründern, die mit wenig Eigenkapital starten
          möchten. Die UG ist besonders bei Start-ups und Einzelgründern
          beliebt, da sie eine weniger kapitalintensive Alternative zur GmbH
          darstellt. Sie wird oft als “Mini-GmbH” bezeichnet und ist seit ihrer
          Einführung 2008 weit verbreitet. Das Mindeststammkapital beträgt 1
          Euro und die persönliche Haftung der Gesellschafter ist wie bei der
          GmbH auf das Gesellschaftsvermögen begrenzt. 25 % des
          Jahresüberschusses müssen jährlich in eine gesetzliche Rücklage
          fließen, bis das Mindeststammkapital einer GmbH (25.000 Euro) erreicht
          ist. Anschließend kann die UG in eine GmbH umgewandelt werden.
          Alternativ kann das Stammkapital durch eine Kapitalerhöhung durch
          Einlagen erhöht werden, um die Umwandlung der UG in eine GmbH zu
          ermöglichen bzw. zu beschleunigen. Als Kapitalgesellschaft bestehen
          für die UG Bilanzierungs- und Publikationspflichten. hat Kontextmenü
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
                    Der Kaufpreis für eine UG (haftungsbeschränkt) beträgt 2.900
                    EUR.
                  </TextComponent>
                  <TextComponent mb={4} fontSize='md'>
                    Im Kaufpreis ist das voll eingezahlte Stammkapital von 500
                    EUR enthalten. Die gesamten Gründungskosten wurden bereits
                    von uns beglichen. Von unserer Seite fallen keine weiteren
                    Kosten an.
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
            width={isMobile ? '93%' : '450px'}
            backgroundColor={accentColor}
            onClick={handleNavigation}
            _hover={{
              backgroundColor: 'var(--primary-hover)',
              transform: 'scale(1.01)',
            }}
          >
            UG (haftungsbeschränkt) reservieren
          </Button>
        </Box>

        {/* <CardComponent
          title='UG (haftungsbeschränkt)'
          description='inkl. 500 Euro eingezahltes Kapital'
          price={
            <>
              Kaufpreis <strong>2.900 Euro</strong>
            </>
          }
        /> */}
      </ContainerComponent>
    </>
  );
}
