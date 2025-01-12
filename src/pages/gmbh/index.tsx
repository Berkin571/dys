import {
  CardComponent,
  ContainerComponent,
  FullWidthImage,
  TextComponent,
  Title,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';

export function GmbH() {
  return (
    <>
      <FullWidthImage src={lectureCompanies} alt='GmbH' yOffset='50%' />
      <ContainerComponent>
        <Title label='GmbH' />
        <TextComponent>
          Die Gesellschaft mit beschränkter Haftung (GmbH) ist eine der
          beliebtesten Unternehmensformen in Deutschland. Ein zentraler Vorteil
          der GmbH ist die persönliche Haftungsbeschränkung der Gesellschafter
          nach ordnungsgemäßer Gründung und Handelsregistereintragung. Das
          bedeutet, dass die Gesellschafter nicht mit ihren persönlichen
          Vermögenswerten haften sondern die Haftung auf das
          Gesellschaftsvermögen begrenzt ist. Die GmbH eignet sich für nahezu
          alle Branchen und Unternehmensgrößen und genießt in Deutschland sowie
          international hohes Ansehen. Das Mindeststammkapital für eine GmbH
          beträgt 25.000 Euro und die Gründung ist komplexer und zeitaufwendiger
          als bei anderen Rechtsformen, insbesondere als bei
          Personengesellschaften. Als Kapitalgesellschaft bestehen für die GmbH
          Bilanzierungs- und Publikationspflichten.
        </TextComponent>
        <CardComponent
          title='GmbH'
          description='inkl. 25.000 Euro eingezahltes Kapital'
          price={
            <>
              Kaufpreis <strong>27.900 Euro</strong>
            </>
          }
        />
      </ContainerComponent>
    </>
  );
}
