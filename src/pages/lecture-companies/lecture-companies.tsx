import {
  VStack,
  HStack,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
} from '@chakra-ui/react';
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import {
  CardCarousel,
  ContainerComponent,
  FullWidthImage,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';
import './lecture-comanies.scss';

export function LectureCompanies() {
  const cardData = [
    {
      title: 'GmbH',
      price: 'Kaufpreis <strong>27.900 Euro</strong>',
      description: 'inkl. 25.000 Euro eingezahltes Kapital',
    },
    {
      title: 'UG',
      price: 'Kaufpreis <strong>2.900 Euro</strong>',
      description: 'inkl. 500 Euro eingezahltes Kapital',
    },
  ];

  // const accentColor = 'var(--primary)';
  const iconColor = 'var(--icon-check)';

  const listItems = [
    'wurden ordnungsgemäß gegründet',
    'sind im Handelsregister eingetragen',
    'haben bislang keine Geschäftstätigkeit ausgeübt',
    'satzungsmäßiges Stammkapital ist zum Zeitpunkt der Veräußerung voll eingezahlt',
    'verfügt über ein übernahmefähiges Bankkonto',
    'frei von Lasten und Verbindlichkeiten',
  ];

  return (
    <>
      <FullWidthImage src={lectureCompanies} alt='Ablauf' yOffset='50%' />
      <ContainerComponent className='lectureCompanie'>
        <h2 className='second-title'>
          Unser Leistungsversprechen bei allen unseren Vorratsgesellschaften:
        </h2>

        <VStack spacing={4} align='start' mt={6} mb={8}>
          {listItems.map((item, index) => (
            <HStack key={index} spacing={4} align='center'>
              <Icon as={CheckCircleIcon} boxSize={6} color={iconColor} />
              <Text fontSize='lg' lineHeight='tall'>
                {item}
              </Text>
            </HStack>
          ))}
        </VStack>

        <VStack spacing={6} align='start' mt={6} mb={8}>
          <Text fontSize='2xl' fontWeight='bold'>
            Warum Vorratsgesellschaft erwerben statt selber gründen?
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
                        Sofortige Handlungsfähigkeit
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
                    <Text fontSize='md' lineHeight='tall'>
                      Ein entscheidender Vorteil des Erwerbs einer
                      Vorratsgesellschaft ist die{' '}
                      <strong>sofortige Handlungsfähigkeit</strong>. Die
                      eigenständige Gründung einer GmbH oder UG kann bis zu 6
                      Wochen dauern. Wenn es aber schnell gehen muss,
                      beispielsweise aufgrund eines Immobilienkaufs, einer
                      M&A-Transaktion oder wenn Sie kurzfristig Verträge
                      abschließen möchten, kann die Gründungsdauer von bis zu 6
                      Wochen zu lang sein und sich unvorteilhaft auf Ihr
                      Vorhaben auswirken. Für diese Fälle kann der Erwerb einer
                      Vorratsgesellschaft die Lösung sein. Dadurch, dass unsere
                      Vorratsgesellschaften ordnungsgemäß gegründet wurden und
                      im Handelsregister eingetragen sind, sind Sie nach
                      Abschluss des notariellen Kaufvertrags sofort
                      handlungsfähig. Bei Verfügbarkeit eines Notartermins und
                      Vorliegen aller sonstiger Voraussetzungen kann der gesamte
                      Prozess bei dringenden Fällen innerhalb eines Tages
                      abgeschlossen werden, sodass Sie bereits innerhalb von 24
                      Stunden mit Ihrer neuen GmbH oder UG handlungsfähig sind.
                    </Text>
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
                        Sofortige Haftungsbeschränkung
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
                    <Text fontSize='md' lineHeight='tall'>
                      Ein zweiter Vorteil, der ebenfalls außerordentlich wichtig
                      sein kann, ist die{' '}
                      <strong>sofortige Haftungsbeschränkung</strong> bei Erwerb
                      einer Vorratsgesellschaft. Wenn Sie nämlich eine GmbH oder
                      UG eigenständig gründen möchten, entsteht nach der
                      notariellen Beurkundung bis zum Zeitpunkt der
                      Handelsregistereintragung eine „GmbH in Gründung“/“GmbH
                      i.Gr.“ bzw. „UG in Gründung“/“UG i.Gr.“. Diese wird auch
                      Vorgesellschaft genannt. Während der Zeit, in der sich die
                      Gesellschaft in dieser Phase befindet, haften die
                      Gesellschafter persönlich und unbeschränkt mit ihrem
                      Privatvermögen für den Ausgleich von Verbindlichkeiten der
                      GmbH i.Gr. bzw. UG i.Gr. gegenüber ihren Gläubigern. Das
                      heißt, wenn die Gesellschaft in dieser Phase bereits
                      unternehmerisch aktiv wird, entsteht für die
                      Gesellschafter ein Risiko der persönlichen Haftung. Der
                      Erwerb einer Vorratsgesellschaft kann in diesen Fällen die
                      Lösung sein, um dieses Risiko zu umgehen und unter
                      Ausschluss der persönlichen Haftung sofort handlungsfähig
                      zu werden.
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </VStack>

        <CardCarousel cards={cardData} />
      </ContainerComponent>
    </>
  );
}
