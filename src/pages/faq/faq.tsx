import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';

import './faq.scss';

import Image from '../../assets/faq.jpg';

export function FAQ() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');
  const accentColor = useColorModeValue('blue.700', 'blue.700');

  const faqImage = Image;

  return (
    <>
      <Box className='image-container'>
        <img src={faqImage} alt='FAQ' className='full-width-image' />
      </Box>
      <Box
        className='faq'
        bg={bg}
        color={color}
        maxW={{ base: 'full', md: 'container.md' }}
        mx='auto'
        borderRadius='5px'
        boxShadow='lg'
        p={{ base: 4, md: 8 }}
      >
        <Heading
          as='h1'
          size='2xl'
          textAlign='center'
          mb={6}
          color={accentColor}
        >
          Antworten auf Ihre Fragen
        </Heading>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Was ist eine Vorratsgesellschaft?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Eine Vorratsgesellschaft ist eine vorgegründete, aber bisher nicht
              operative Gesellschaft, die dazu dient, den Gründungsprozess zu
              verkürzen und Ihnen eine schnelle Handlungsfähigkeit zu
              ermöglichen.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Welche Arten von Vorratsgesellschaften bieten Sie an?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Wir haben uns auf die Gründung und Vertrieb von UGs und GmbHs
              spezialisiert.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Sind Ihre Vorratsgesellschaften schuldenfrei?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ja, alle unsere Vorratsgesellschaften sind frei von
              Verbindlichkeiten und haben keine Geschäftstätigkeit aufgenommen.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Verfügen die Vorratsgesellschaften über ein Bankkonto?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ja, alle unsere Vorratsgesellschaften verfügen über ein
              übernahmefähiges Bankkonto, auf dem das jeweilige satzungsmäßige
              Stammkapital zum Zeitpunkt des Verkaufs voll eingezahlt ist. Nach
              erfolgreicher Umschreibung des Bankkontos auf die neue
              Geschäftsführung kann das Bankkonto uneingeschränkt als
              Geschäftskonto genutzt werden. Hierfür muss sich die neue
              Geschäftsführung bei der Bank legitimieren und eine sogenannte KYC
              (Know Your Customer)-Prüfung durchlaufen. Dieser Prozess kann je
              nach Bank unterschiedlich viel Zeit in Anspruch nehmen. Wir
              unterstützen Sie bei der Vorbereitung der relevanten Unterlagen,
              damit die Kontoumschreibung möglichst schnell und reibungslos
              vollzogen werden kann.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Wie lange dauert der Erwerb einer Vorratsgesellschaft?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Der Erwerb einer Vorratsgesellschaft kann innerhalb kurzer Zeit
              abgeschlossen werden, sodass Sie schnell handlungsfähig sind. Die
              genaue Dauer hängt vor allem von der nächstmöglichen Verfügbarkeit
              eines Notartermins sowie der Vollständigkeit der uns vorliegenden
              Unterlagen ab. Der gesamte Prozess kann in der Regel innerhalb von
              wenigen Werktagen abgeschlossen werden. Falls Sie eine
              Vorratsgesellschaft dringend benötigen, sprechen Sie uns bitte
              darauf an.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Welche Dokumente benötige ich für den Erwerb einer
                Vorratsgesellschaft?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Nachdem Sie sich für eine Vorratsgesellschaft entschieden haben,
              übersenden wir Ihnen eine Checkliste, welche alle Informationen
              abfragt, die für die Beurkundung durch den Notar sowie der
              Handelsregisteranmeldung benötigt werden. Neben der vollständig
              ausgefüllten Checkliste benötigen wir einen gültigen
              Personalausweis oder Reisepass sowie je nach Staatsangehörigkeit,
              Informationen und Nachweise zu Ihrem Aufenthaltsstatus.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Bieten Sie Unterstützung nach dem Erwerb der Gesellschaft an?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ja, unser Team steht Ihnen auch nach dem Erwerb der Gesellschaft
              für alle Fragen und Unterstützung zur Verfügung.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}
