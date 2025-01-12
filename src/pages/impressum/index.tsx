import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Divider,
  Stack,
  Icon,
  HStack,
  Link,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { Title } from '../../components';

export function Impressum() {
  return (
    <Container maxW='container.md' py={5}>
      <VStack spacing={1} align='left'>
        <Title label='Impressum' />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Angaben gemäß § 5 TMG
          </Heading>
          <Text fontSize='md' lineHeight='tall'>
            EKP Corporations GmbH <br />
            Musterstraße 12 <br />
            12345 Musterstadt
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Kontakt
          </Heading>
          <Stack spacing={3}>
            <HStack>
              <Icon as={PhoneIcon} color='var(--primary)' />
              <Text fontSize='md'>
                <Link
                  href='tel:+491234567890'
                  color='var(--primary)'
                  _hover={{ textDecoration: 'underline' }}
                >
                  +49 (0)123 456 7890
                </Link>
              </Text>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} color='var(--primary)' />
              <Text fontSize='md'>
                <Link
                  href='mailto:info@ekp-corporations.de'
                  color='var(--primary)'
                  _hover={{ textDecoration: 'underline' }}
                >
                  info@ekp-corporations.de
                </Link>
              </Text>
            </HStack>
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </Heading>
          <Text fontSize='md' lineHeight='tall'>
            Max Mustermann <br />
            EKP Corporations GmbH <br />
            Musterstraße 12 <br />
            12345 Musterstadt
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Haftung für Inhalte
          </Heading>
          <Text fontSize='md' lineHeight='tall'>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Haftung für Links
          </Heading>
          <Text fontSize='md' lineHeight='tall'>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as='h3' size='md' mb={2} color='var(--primary)'>
            Urheberrecht
          </Heading>
          <Text fontSize='md' lineHeight='tall'>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
