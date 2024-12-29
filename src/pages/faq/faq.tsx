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
  const accentColor = useColorModeValue('brand.500', 'brand.500');

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
              Wir bieten eine Vielzahl von Gesellschaftsformen an, darunter
              GmbH, UG, AG und viele mehr, um den unterschiedlichen Bedürfnissen
              unserer Kunden gerecht zu werden.
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
                Wie lange dauert der Erwerb einer Vorratsgesellschaft?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Der Erwerb einer Vorratsgesellschaft kann innerhalb weniger
              Stunden abgeschlossen werden, sodass Sie schnell handlungsfähig
              sind.
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
              Sie benötigen grundlegende Dokumente wie einen gültigen
              Personalausweis oder Reisepass sowie eventuell zusätzliche
              Unterlagen, abhängig von der Art der Gesellschaft, die Sie
              erwerben möchten.
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
