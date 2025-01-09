import {
  CardCarousel,
  ContainerComponent,
  FullWidthImage,
  TextComponent,
  Title,
} from '../../components';
import lectureCompanies from '../../assets/vorratsgesellschaften.jpg';
import './lecture-comanies.scss';
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
    <>
      <FullWidthImage src={lectureCompanies} alt='Ablauf' yOffset='60%' />
      <ContainerComponent className='lectureCompanie'>
        <Title label='Vorratsgesellschaften im Überblick' />

        <TextComponent>
          Alle unsere Vorratsgesellschaften wurden ordnungsgemäß gegründet, sind
          im Handelsregister eingetragen und haben keine Geschäftstätigkeit
          aufgenommen. Das jeweilige satzungsmäßige Stammkapital jeder
          Gesellschaft ist zum Zeitpunkt der Veräußerung voll eingezahlt. Jede
          Gesellschaft verfügt über ein übernahmefähiges Bankkonto, das nach
          erfolgreicher Umschreibung auf die neue Geschäftsführung
          uneingeschränkt als Geschäftskonto genutzt werden kann.
        </TextComponent>

        <CardCarousel cards={cardData} />
      </ContainerComponent>
    </>
  );
}
