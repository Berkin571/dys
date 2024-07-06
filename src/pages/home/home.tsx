import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  StackDivider,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={bgColor} py={10} px={4}>
      <Container maxW="container.lg">
        <VStack
          spacing={6}
          align="start"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Heading as="h1" size="2xl" color={textColor} mb={4}>
            DYS – Ihr Experte für Vorratsgesellschaften
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Mit DYS sicher zur schnellen Handlungsfähigkeit!
          </Text>
          <Text fontSize="md" color={textColor}>
            Der Kauf einer Vorratsgesellschaft ist Vertrauenssache. Bei DYS sind
            Sie in guten Händen. Über 20 Jahre Erfahrung, mehr als 8.000
            verkaufte Gesellschaften und unsere juristische Kompetenz als
            zugelassene Rechtsanwältinnen garantieren Ihnen nicht nur ein
            sicheres Produkt, sondern auch eine schnelle und unkomplizierte
            Abwicklung.
          </Text>
          <Text fontSize="md" color={textColor}>
            Wir sind für Sie da!
          </Text>
          <Text fontSize="md" color={textColor}>
            Weil wir sorgfältig und zuverlässig arbeiten und für unsere
            Geschäftspartner persönlich erreichbar sind, bleiben uns unsere
            Kunden über Jahre treu. Zu unseren Stammkunden zählen Einzelkunden
            und Unternehmen, sowie Anwälte aus den Bereichen Gesellschaftsrecht
            und Immobilien, viele davon aus internationalen Großkanzleien.
          </Text>
          <Text fontSize="md" color={textColor}>
            Wir arbeiten präzise!
          </Text>
          <Text fontSize="md" color={textColor}>
            Um Sie als Käufer oder als beratende Rechtsanwälte zu entlasten,
            garantieren wir eine schnelle und unkomplizierte Abwicklung. Unsere
            Unterlagen sind zweisprachig auf Deutsch und Englisch, konkurrenzlos
            kurz und stets den rechtlichen Entwicklungen angepasst.
          </Text>
          <Heading as="h2" size="lg" mt={6} color={textColor}>
            Vorteile DYS
          </Heading>
          <Text fontSize="md" color={textColor}>
            Ein führender Anbieter, schon über 20 Jahre im Markt
            <br />
            Inhabergeführt von zugelassenen Rechtsanwältinnen
            <br />
            Für unsere Kunden persönlich erreichbar
            <br />
            Optimierte und flexible Abläufe
            <br />
            Über 8.000 verkaufte Vorratsgesellschaften
            <br />
            Viel Erfahrung mit Holdingstrukturen und individuellen Lösungen
            <br />
            Passende Transaktionsvollmachten für Ihre Mandanten
            <br />
            Großes Angebot deutscher Gesellschaftsformen an verschiedenen
            Standorten
          </Text>
          <Heading as="h2" size="lg" mt={6} color={textColor}>
            Antje Borcherdt und Julia Vieth – erfahren und kompetent
          </Heading>
          <Text fontSize="md" color={textColor}>
            DYS wurde im Jahr 2002 von uns, Antje Borcherdt und Julia Vieth,
            gegründet. Wir sind in Berlin zugelassene Rechtsanwältinnen. Bevor
            wir DYS gegründet haben, waren wir in Kanzleien und Unternehmen im
            In- und Ausland tätig und haben Erfahrung im Gesellschafts-,
            Wirtschafts- und Immobilienrecht gesammelt.
          </Text>
          <Text fontSize="md" color={textColor}>
            Seit über 20 Jahren leiten wir DYS als inhabergeführtes Unternehmen.
            Im persönlichen Kontakt mit unseren Kunden finden wir heraus, worauf
            es wirklich ankommt und reagieren flexibel auf die sich stetig
            ändernden Anforderungen. Nur so können wir vorausschauend die besten
            Lösungen für unsere Kunden finden. Das ist unser persönliches
            Anliegen.
          </Text>
          <Text fontSize="md" color={textColor}>
            Auch in der Abstimmung mit den beratenden Anwälten können wir auf
            unsere Erfahrung aus einer Vielzahl von Einzelfällen zurückgreifen.
            Die unkomplizierte und effiziente Zusammenarbeit mit Kollegen macht
            Freude. Wir vertrauen darauf, dass Sie als Anwalt genau wissen, was
            Ihr Mandant braucht und liefern zuverlässig durchdachte Lösungen.
          </Text>
          <Button
            onClick={() => navigate("/kontakt")}
            colorScheme="brand"
            size="lg"
            mt={6}
          >
            Kontakt
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
