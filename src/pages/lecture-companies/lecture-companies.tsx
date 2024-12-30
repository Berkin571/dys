import { Container, Heading, Text } from '@chakra-ui/react';
import { CardCarousel } from '../../components';

export function LectureCompanies() {
  const cardData = [
    {
      title: 'UG',
      price: 'Kaufpreis <strong>2.900 Euro</strong>',
      description: 'inkl. 500 Euro eingezahltes Kapital',
    },
    {
      title: 'GmbH',
      price: 'Kaufpreis <strong>27.900 Euro</strong>',
      description: 'inkl. 25.000 Euro eingezahltes Kapital',
    },
  ];

  return (
    <Container maxW='container.lg' py={10}>
      <Heading as='h2' size='xl' mb={6}>
        Vorratsgesellschaften im Überblick
      </Heading>

      <Text mb={8} fontSize='lg' lineHeight='tall'>
        Alle unsere Vorratsgesellschaften wurden ordnungsgemäß gegründet, sind
        im Handelsregister eingetragen und haben keine Geschäftstätigkeit
        aufgenommen. Das jeweilige satzungsmäßige Stammkapital jeder
        Gesellschaft ist zum Zeitpunkt der Veräußerung voll eingezahlt. Jede
        Gesellschaft verfügt über ein übernahmefähiges Bankkonto, das nach
        erfolgreicher Umschreibung auf die neue Geschäftsführung uneingeschränkt
        als Geschäftskonto genutzt werden kann.
      </Text>

      <CardCarousel cards={cardData} />
    </Container>
  );
}
