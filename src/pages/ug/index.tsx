import {
  CardComponent,
  ContainerComponent,
  FullWidthImage,
  TextComponent,
  Title,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';

export function UG() {
  return (
    <>
      <FullWidthImage
        src={lectureCompanies}
        alt='UG (haftungsbeschränkt)'
        yOffset='50%'
      />
      <ContainerComponent>
        <Title label='UG (haftungsbeschränkt)' />
        <TextComponent>
          Die Unternehmergesellschaft (haftungsbeschränkt), kurz UG
          (haftungsbeschränkt), ist eine Sonderform der GmbH und in Deutschland
          besonders beliebt bei Gründern, die mit wenig Eigenkapital starten
          möchten. Die UG ist besonders bei Start-ups und Einzelgründern
          beliebt, da sie eine weniger kapitalintensive Alternative zur GmbH
          darstellt. Sie wird oft als “Mini-GmbH” bezeichnet und ist seit ihrer
          Einführung 2008 weit verbreitet. Das Mindeststammkapital beträgt 1
          Euro und die persönliche Haftung der Gesellschafter ist wie bei der
          GmbH auf das Gesellschaftsvermögen begrenzt. 25 % des
          Jahresüberschusses müssen jährlich in eine gesetzliche Rücklage
          fließen, bis das Mindeststammkapital einer GmbH (25.000 Euro) erreicht
          ist. Anschließend kann die UG in eine GmbH umgewandelt werden.
          Alternativ kann das Stammkapital durch eine Kapitalerhöhung durch
          Einlagen erhöht werden, um die Umwandlung der UG in eine GmbH zu
          ermöglichen bzw. zu beschleunigen. Als Kapitalgesellschaft bestehen
          für die UG Bilanzierungs- und Publikationspflichten. hat Kontextmenü
        </TextComponent>
        <CardComponent
          title='UG (haftungsbeschränkt)'
          description='inkl. 500 Euro eingezahltes Kapital'
          price={
            <>
              Kaufpreis <strong>2.900 Euro</strong>
            </>
          }
        />
      </ContainerComponent>
    </>
  );
}
