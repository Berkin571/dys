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
import { BsBank } from 'react-icons/bs';

import { RiServiceFill } from 'react-icons/ri';
import { TbFlagStar } from 'react-icons/tb';

import process from '../../assets/ablauf.jpeg';

import './process.scss';

export function Process() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = useColorModeValue('blue.700', 'blue.700');

  return (
    <>
      <Box className='image-container'>
        <Image src={process} alt='Ablauf' className='full-width-image' />
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
            Der Kauf einer Vorratsgesellschaft bei EKP Corporations ist ein
            schneller und unkomplizierter Prozess, der Ihnen eine zügige
            Handlungsfähigkeit mit Ihrer neuen Gesellschaft ermöglicht. Hier
            sind die Schritte, die Sie durchlaufen werden:
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
                      <Text as='span'>1. Auswahl der Rechtsform</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Wählen Sie die gewünschte Rechtsform für Ihre
                Vorratsgesellschaften aus, die am besten zu Ihren Anforderungen
                passt. Unser Portfolio umfasst GmbHs und UGs, die bereits
                gegründet und im Handelsregister eingetragen sind, aber noch
                keine Geschäftstätigkeit aufgenommen haben. Das jeweilige
                Stammkapital ist zum Zeitpunkt des Verkaufs voll eingezahlt.
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
                      <Text as='span'>2. Kontaktaufnahme</Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Wir freuen uns auf Ihre Anfrage! Füllen Sie hierfür unser
                Kontaktformular aus und geben Sie die gewünschte Rechtsform an.
                Wir prüfen Ihre Angaben und setzen uns umgehend mit Ihnen in
                Verbindung um Ihre Auswahl zu bestätigen und Ihre offenen Fragen
                zu klären. Wir besprechen mit Ihnen, welche unserer verfügbaren
                Vorratsgesellschaften am besten zu Ihren Anforderungen geeignet
                ist und übersenden Ihnen alle relevanten Informationen zu den
                Gesellschaften, die für Sie in Frage kommen. Unser kompetentes
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
                        as={BsBank}
                        color={accentColor}
                        boxSize={6}
                        marginRight={1.5}
                      />
                      <Text as='span'>
                        7. Unterstützung bei der Umschreibung des Bankkontos
                      </Text>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Wir unterstützen Sie bei der Umschreibung des Bankkontos auf die
                neue Geschäftsführung. Hierfür muss sich die neue
                Geschäftsführung bei der Bank legitimieren und eine sogenannte
                KYC (Know Your Customer)-Prüfung durchlaufen. Dieser Prozess
                kann je nach Bank unterschiedlich viel Zeit in Anspruch nehmen.
                Wir unterstützen Sie bei der Vorbereitung der relevanten
                Unterlagen, damit die Umschreibung des Bankkontos möglichst
                schnell und reibungslos vollzogen werden kann.
              </AccordionPanel>
            </AccordionItem>

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
                      <Text as='span'>8. Unser Service</Text>
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
