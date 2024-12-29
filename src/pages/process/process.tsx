import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from '@chakra-ui/react';
import {
  CalendarIcon,
  EditIcon,
  ExternalLinkIcon,
  InfoIcon,
  PhoneIcon,
} from '@chakra-ui/icons';

import { RiServiceFill } from 'react-icons/ri';
import { TbFlagStar } from 'react-icons/tb';

import image from '../../assets/process.jpg';

import './process.scss';

export function Process() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = useColorModeValue('brand.500', 'brand.500');

  return (
    <>
      <Box className='image-container'>
        <Image src={image} alt='Ablauf' className='full-width-image' />
      </Box>
      <Box
        className='ablauf'
        bg={bg}
        color={color}
        maxW={{ base: 'full', md: 'container.lg' }}
        mx='auto'
        borderRadius='5px'
        boxShadow='lg'
        p={{ base: 4, md: 8 }}
      >
        <VStack spacing={8} align='stretch'>
          <Heading
            as='h1'
            size='xl'
            textAlign='center'
            mb={6}
            color={accentColor}
          >
            Ablauf des Kaufs von Vorratsgesellschaften
          </Heading>

          <Text fontSize='lg' textAlign='center'>
            Der Kauf einer Vorratsgesellschaft bei CorpFactory ist ein schneller
            und unkomplizierter Prozess, der Ihnen den sofortigen Einstieg in
            die Geschäftswelt ermöglicht. Hier sind die Schritte, die Sie
            durchlaufen werden:
          </Text>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={InfoIcon}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>1. Auswahl der Gesellschaft</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Wählen Sie aus unserem umfangreichen Angebot an
                Vorratsgesellschaften diejenige aus, die am besten zu Ihren
                Anforderungen passt. Unser Portfolio umfasst verschiedene
                Gesellschaftsformen wie GmbH, UG, AG und mehr, die alle bereits
                gegründet und registriert sind, aber noch keine
                Geschäftstätigkeit aufgenommen haben.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={PhoneIcon}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>2. Kontaktaufnahme und Beratung</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Setzen Sie sich mit uns in Verbindung, um Ihre Auswahl zu
                bestätigen und alle offenen Fragen zu klären. Unser kompetentes
                Team steht Ihnen zur Verfügung, um Ihnen eine individuelle
                Beratung zu bieten und sicherzustellen, dass Sie die richtige
                Entscheidung treffen.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={EditIcon}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>
                        3. Vertragserstellung und Unterzeichnung
                      </Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nach der Beratung erstellen wir einen Kaufvertrag für die
                ausgewählte Vorratsgesellschaft. Der Vertrag enthält alle
                notwendigen Details und Bedingungen für den Kauf. Sie erhalten
                den Vertrag zur Durchsicht und Unterschrift. Sobald der Vertrag
                von beiden Parteien unterzeichnet ist, wird der Kauf offiziell
                bestätigt.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={CalendarIcon}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>4. Notartermin und Umschreibung</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Ein Notartermin wird vereinbart, um die Umschreibung der
                Gesellschaftsanteile auf Ihren Namen vorzunehmen. Dies ist ein
                notwendiger Schritt, um die rechtliche Übertragung der
                Gesellschaft abzuschließen. Unser Team koordiniert den Termin
                und sorgt dafür, dass alle erforderlichen Dokumente
                bereitgestellt werden.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={ExternalLinkIcon}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>5. Handelsregistereintragung</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Nach dem Notartermin wird die Änderung im Handelsregister
                eingetragen. Diese Eintragung bestätigt offiziell, dass Sie der
                neue Eigentümer der Gesellschaft sind. Unser Team kümmert sich
                um die Einreichung aller erforderlichen Unterlagen und überwacht
                den Eintragungsprozess.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={TbFlagStar}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>6. Geschäftsbeginn</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Sobald die Handelsregistereintragung abgeschlossen ist, sind Sie
                der rechtmäßige Eigentümer und können sofort mit der
                Geschäftstätigkeit beginnen. Die Vorratsgesellschaft ist nun
                vollständig auf Ihren Namen registriert und bereit für den
                operativen Betrieb.
              </AccordionPanel>
            </AccordionItem>

            <Divider />

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <HStack>
                      <Icon
                        as={RiServiceFill}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>7. Unser Service</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Während des gesamten Prozesses steht Ihnen unser erfahrenes Team
                zur Seite, um sicherzustellen, dass der Kauf reibungslos und
                effizient verläuft. Wir bieten umfassende Unterstützung und
                Beratung, damit Sie sich auf den erfolgreichen Start Ihres
                Unternehmens konzentrieren können.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>
    </>
  );
}
