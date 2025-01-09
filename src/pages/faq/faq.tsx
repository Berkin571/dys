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
              Eine Vorratsgesellschaft ist eine vorgegründete, aber bisher nicht
              operative Gesellschaft, die dazu dient, den Gründungsprozess zu
              verkürzen und Ihnen eine schnelle Handlungsfähigkeit zu
              ermöglichen.
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
              Wir haben uns auf die Gründung und Vertrieb von UGs und GmbHs
              spezialisiert.
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
              Verbindlichkeiten und haben keine Geschäftstätigkeit aufgenommen.
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
