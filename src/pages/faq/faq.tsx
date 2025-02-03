import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import { FullWidthImage, ContainerComponent, Title } from '../../components';
import faq from '../../assets/faq.jpg';
import './faq.scss';
import { Link } from 'react-router-dom';

export function FAQ() {
  return (
    <>
      <FullWidthImage src={faq} alt='FAQ' yOffset='45%' />
      <ContainerComponent className='faq'>
        <Title label='Antworten auf Ihre Fragen' />

        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Was ist eine Vorratsgesellschaft?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Eine Vorratsgesellschaft ist eine vollständig gegründete und in
              das Handelsregister eingetragene Gesellschaft, die bisher operativ
              nicht tätig gewesen ist. Eine Vorratsgesellschaft kann vom
              Erwerber sofort übernommen werden und ermöglicht eine sofortige
              Handlungsfähigkeit unter Ausschluss der persönlichen Haftung.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Was sind die Vorteile des Erwerbs einer Vorratsgesellschaft?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ein entscheidender Vorteil des Erwerbs einer Vorratsgesellschaft
              ist die sofortige Handlungsfähigkeit. Die eigenständige Gründung
              einer GmbH oder UG kann bis zu 6 Wochen dauern. Wenn es aber
              schnell gehen muss, beispielsweise aufgrund eines Immobilienkaufs,
              einer M&A-Transaktion oder wenn Sie kurzfristig Verträge
              abschließen möchten, kann die Gründungsdauer von bis zu 6 Wochen
              zu lang sein und sich unvorteilhaft auf Ihr Vorhaben auswirken.
              Für diese Fälle kann der Erwerb einer Vorratsgesellschaft die
              Lösung sein. <br />
              <br />
              Ein weiterer essenzieller Vorteil, ist die sofortige
              Haftungsbeschränkung bei Erwerb einer Vorratsgesellschaft. Wenn
              Sie nämlich eine GmbH oder UG eigenständig gründen möchten,
              entsteht nach der notariellen Beurkundung bis zum Zeitpunkt der
              Handelsregistereintragung eine „GmbH in Gründung“/“GmbH i.Gr.“
              bzw. „UG in Gründung“/“UG i.Gr.“. Beim Erwerb einer
              Vorratsgesellschaft erwerben Sie eine fertig gegründete
              Gesellschaft ohne dem Zusatz „in Gründung“/“i.Gr.“ und genießen ab
              der Übernahme eine persönliche Haftungsbeschränkung.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Welche Arten von Vorratsgesellschaften bieten Sie an?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Wir haben uns auf die Gründung und Vertrieb von GmbHs und UGs
              spezialisiert.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Was beinhaltet der Kaufpreis für eine Vorratsgesellschaft?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Der Kaufpreis beinhaltet alle bereits angefallenen
              Gründungskosten, wie Notar- und Gerichtskosten. Zudem ist das
              satzungsmäßige Stammkapital im Kaufpreis enthalten, das auf dem
              Bankkonto der Gesellschaft voll eingezahlt ist und vom Käufer mit
              übernommen wird. Von unserer Seite fallen zusätzlichen zum
              Kaufpreis keine weiteren Kosten an.
              <br />
              <br /> Für die notarielle Beurkundung des Erwerbs der
              Vorratsgesellschaft sowie für die Handelsregistereintragung fallen
              zusätzlich Notar- und Gerichtskosten an, die vom Käufer direkt an
              den Notar bzw. dem Amtsgericht zu zahlen sind.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Sind Ihre Vorratsgesellschaften schuldenfrei?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ja, alle unsere Vorratsgesellschaften sind frei von
              Verbindlichkeiten und Lasten und haben vorher keine
              Geschäftstätigkeit aufgenommen.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Verfügen die Vorratsgesellschaften über ein Bankkonto?
              </Text>
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
              <Text flex='1' textAlign='left'>
                Wie lange dauert der Erwerb einer Vorratsgesellschaft?
              </Text>
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
              <Text flex='1' textAlign='left'>
                Welche Dokumente benötige ich für den Erwerb einer
                Vorratsgesellschaft?
              </Text>
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
              <Text flex='1' textAlign='left'>
                Bieten Sie Unterstützung nach dem Erwerb der Gesellschaft an?
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Ja, unser Team steht Ihnen auch nach dem Erwerb der Gesellschaft
              für alle Fragen und Unterstützung zur Verfügung.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Text flex='1' textAlign='left'>
                Sonstige
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Link to={'/contact'}>
                Senden Sie uns eine Nachricht. Wir beantworten gerne all Ihre
                Fragen.
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ContainerComponent>
    </>
  );
}
