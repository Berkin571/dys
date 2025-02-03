import {
  Box,
  HStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import {
  CalendarIcon,
  EditIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import { BsBank } from 'react-icons/bs';
import { RiServiceFill } from 'react-icons/ri';
import { TbFlagStar } from 'react-icons/tb';
import { FaCreditCard } from 'react-icons/fa';
import {
  FullWidthImage,
  ContainerComponent,
  Title,
  TextComponent,
} from '../../components';
import process from '../../assets/ablauf.jpeg';
import './process.scss';

export function Process() {
  const accentColor = 'var(--primary)';

  return (
    <>
      <FullWidthImage src={process} alt='Ablauf' yOffset='center' />
      <ContainerComponent className='ablauf'>
        <Title
          label='Ablauf des Kaufs von Vorratsgesellschaften'
          className='heading'
        />
        <TextComponent marginRight>
          Der Kauf einer Vorratsgesellschaft bei EKP Corporations ist ein
          schneller und unkomplizierter Prozess, der Ihnen eine zügige
          Handlungsfähigkeit mit Ihrer neuen Gesellschaft ermöglicht. Hier sind
          die Schritte, die Sie durchlaufen werden:
        </TextComponent>
        <Accordion allowToggle>
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
                    <Text as='span'>1. Reservierungsanfrage</Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Wir freuen uns auf Ihre Reservierungsanfrage! Füllen Sie hierfür
              unser Kontaktformular (Link zu Kontakt) aus und geben Sie die
              gewünschte Rechtsform für Ihre Gesellschaft an. Wir prüfen Ihre
              Angaben und reservieren entsprechend Ihrem Wunsch eine oder
              mehrere unserer sofort verfügbaren Vorratsgesellschaften.
            </AccordionPanel>
          </AccordionItem>

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
                      2. Übersendung Fragebogen und Vorabinformationen
                    </Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Wir übersenden Ihnen umgehend einen Fragebogen, die alle
              Informationen abfragt, die für den notariellen Kaufvertrag sowie
              für Satzungsänderungen benötigt werden. Gleichzeitig übersenden
              wir Ihnen alle relevanten Informationen und Dokumente zu den für
              Sie reservierten Gesellschaften.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  <HStack>
                    <Icon
                      as={FaCreditCard}
                      color={accentColor}
                      boxSize={6}
                      marginRight={1.5}
                    />
                    <Text as='span'>3. Kaufpreiszahlung</Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Für die Kaufpreiszahlung stehen Ihnen folgende Möglichkeiten zur
              Verfügung: Am einfachsten und schnellsten ist die Kaufpreiszahlung
              per Banküberweisung direkt an uns. Bitte beachten Sie, dass der
              Kaufpreis vor dem Notartermin für die Beurkundung des Kaufvertrags
              auf unserem Bankkonto eingegangen sein muss. Alternativ können Sie
              den Kaufpreis auf einem Anderkonto eines in Deutschland tätigen
              Steuerberaters oder Rechtsanwalts hinterlegen. In Einzelfällen
              genügt uns zudem, wenn der Kaufpreis durch eine unbedingte und
              unwiderrufliche Gutsagung durch einen deutschen Rechtsanwalt oder
              Notar sichergestellt wird.
            </AccordionPanel>
          </AccordionItem>

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
                    <Text as='span'>4. Notartermin</Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Für die Beurkundung des Kauf- und Abtretungsvertrages sowie aller
              notwendigen Änderungen vereinbaren Sie einen Termin bei einem
              Notar Ihrer Wahl. Wir übersenden sämtliche für die Veräußerung
              benötigten Unterlagen zusammen mit der Verkäufervollmacht per
              Kurier an das Notariat. Voraussetzung hierfür ist die geleistete
              bzw. durch Hinterlegung oder Gutsagung sichergestellte
              Kaufpreiszahlung sowie der Erhalt des ausgefüllten Fragebogens.
              Nach der Beurkundung meldet der Notar die Änderungen zur
              Eintragung ins Handelsregister an. Die Eintragung hat allerdings
              nur deklaratorische Bedeutung, sodass Sie bereits sofort nach dem
              Notartermin unter Ausschluss der persönlichen Haftung voll
              handlungsfähig sind.
            </AccordionPanel>
          </AccordionItem>

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
                    <Text as='span'>
                      5. Unterstützung bei der Umschreibung des Bankkontos
                    </Text>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Nach Erhalt der notariellen Urkunden kann die neue
              Geschäftsführung die Umschreibung des Geschäftskontos bei der
              kontoführenden Bank beantragen. Hierfür muss sich die neue
              Geschäftsführung bei der Bank legitimieren und eine bankeigene KYC
              (Know Your Customer)-Prüfung durchlaufen. Dieser Prozess kann je
              nach Bank unterschiedlich viel Zeit in Anspruch nehmen. Wir
              unterstützen Sie bei der Vorbereitung der relevanten Unterlagen,
              damit die Umschreibung des Bankkontos möglichst schnell und
              reibungslos vollzogen werden kann.
            </AccordionPanel>
          </AccordionItem>

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
              neue Geschäftsführung. Hierfür muss sich die neue Geschäftsführung
              bei der Bank legitimieren und eine sogenannte KYC (Know Your
              Customer)-Prüfung durchlaufen. Dieser Prozess kann je nach Bank
              unterschiedlich viel Zeit in Anspruch nehmen. Wir unterstützen Sie
              bei der Vorbereitung der relevanten Unterlagen, damit die
              Umschreibung des Bankkontos möglichst schnell und reibungslos
              vollzogen werden kann.
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
      </ContainerComponent>
    </>
  );
}
