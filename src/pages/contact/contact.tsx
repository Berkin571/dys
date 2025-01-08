import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  Select,
  Textarea,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import contact from '../../assets/contact.jpeg';
import './contact.scss';

// 1) Interface mit allen Feldern
interface FormData {
  anrede: string;
  titel: string;
  firstName: string;
  lastName: string;
  kanzleiFirma: string;
  email: string;
  phone: string;
  message: string;
  interestUg: boolean;
  interestGmbH: boolean;
  consent: boolean;
}

// 2) Hauptkomponente
export function Contact() {
  // 2.1) State anlegen mit allen Feldern
  const [formData, setFormData] = useState<FormData>({
    anrede: '',
    titel: '',
    firstName: '',
    lastName: '',
    kanzleiFirma: '',
    email: '',
    phone: '',
    message: '',
    interestUg: false,
    interestGmbH: false,
    consent: false,
  });

  // 2.2) handleChange für alle Input-Typen
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // 2.3) handleSubmit mit EmailJS
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      anrede: formData.anrede,
      titel: formData.titel,
      firstName: formData.firstName,
      lastName: formData.lastName,
      kanzleiFirma: formData.kanzleiFirma,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      interestUg: formData.interestUg ? 'UG' : 'Nein',
      interestGmbH: formData.interestGmbH ? 'GmbH' : 'Nein',
      consent: formData.consent ? 'Zugestimmt' : 'Nicht zugestimmt',
      reply_to: formData.email,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE!,
        import.meta.env.VITE_EMAIL_TEMPLATE!,
        templateParams,
        import.meta.env.VITE_EMAIL_USERID!,
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
          alert('E-Mail erfolgreich versendet!');
        },
        err => {
          console.error('FAILED...', err);
          alert('Fehler beim Versenden der E-Mail.');
        },
      );

    console.log(formData, '###');
  };

  // 2.4) Farben für Light / Dark Mode
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');

  // 3) Return mit JSX
  return (
    <>
      {/* Obere Bildsektion */}
      <Box className='image-container'>
        <img src={contact} alt='Office' className='full-width-image' />
      </Box>

      {/* Container für Formular */}
      <Box
        maxW={{ base: 'full', md: 'container.md' }}
        mx='auto'
        borderRadius='md'
        bg={bg}
        color={color}
        p={5}
        boxShadow='lg'
      >
        <Heading as='h1' size='2xl' textAlign='center' mb={6}>
          Senden Sie uns eine Anfrage
        </Heading>
        <Text fontSize='lg' mb={6} textAlign='center'>
          Möchten Sie eine Vorratsgesellschaft kaufen oder haben Sie noch
          Fragen? Füllen Sie das untenstehende Formular aus, um uns eine Anfrage
          zu senden. Unser Team wird sich so schnell wie möglich bei Ihnen
          melden.
        </Text>

        {/* Formularbeginn */}
        <Box as='form' onSubmit={handleSubmit}>
          {/* 3.1) Checkboxen für UG / GmbH */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={4}>
            <Checkbox
              name='interestUg'
              isChecked={formData.interestUg}
              onChange={handleChange}
            >
              Ich interessiere mich für eine UG
            </Checkbox>
            <Checkbox
              name='interestGmbH'
              isChecked={formData.interestGmbH}
              onChange={handleChange}
            >
              Ich interessiere mich für eine GmbH
            </Checkbox>
          </Stack>

          {/* 3.2) Grid-Felder: Anrede, Titel, Vorname, Nachname, Kanzlei / Firma */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {/* Anrede */}
            <FormControl id='anrede'>
              <Select
                name='anrede'
                placeholder='Anrede auswählen'
                value={formData.anrede}
                onChange={handleChange}
              >
                <option value='Frau'>Frau</option>
                <option value='Herr'>Herr</option>
                <option value='Divers'>Divers</option>
                <option value='Firma'>Firma</option>
              </Select>
            </FormControl>

            {/* Titel */}
            <FormControl id='titel'>
              <Select
                name='titel'
                placeholder='Titel (optional)'
                value={formData.titel}
                onChange={handleChange}
              >
                <option value='Dr.'>Dr.</option>
                <option value='Prof.'>Prof.</option>
                <option value='Prof. Dr.'>Prof. Dr.</option>
              </Select>
            </FormControl>

            {/* Vorname */}
            <FormControl id='firstName'>
              <Input
                placeholder='Vorname'
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>

            {/* Nachname */}
            <FormControl id='lastName'>
              <Input
                placeholder='Nachname'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>

            {/* Kanzlei / Firma */}
            <FormControl
              id='kanzleiFirma'
              gridColumn={{ base: 'span 1', md: 'span 2' }}
            >
              <Input
                placeholder='Kanzlei / Firma (optional)'
                type='text'
                name='kanzleiFirma'
                value={formData.kanzleiFirma}
                onChange={handleChange}
              />
            </FormControl>

            {/* E-Mail */}
            <FormControl id='email'>
              <Input
                placeholder='E-Mail Adresse*'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>

            {/* Telefonnummer */}
            <FormControl id='phone'>
              <Input
                placeholder='Telefonnummer (optional)'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>

            {/* Nachricht */}
            <FormControl
              id='message'
              gridColumn={{ base: 'span 1', md: 'span 2' }}
            >
              <Textarea
                placeholder='Ihre Nachricht*'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormControl>
          </SimpleGrid>

          {/* 3.3) Zustimmungserklärung: Checkbox + FormHelperText */}
          <FormControl id='consent' mt={4}>
            <Checkbox
              name='consent'
              isChecked={formData.consent}
              onChange={handleChange}
            >
              Ich stimme zu, dass meine Angaben und Daten zur Bearbeitung meiner
              Anfrage elektronisch erhoben und gespeichert werden. Sie können
              Ihre Einwilligung jederzeit für die Zukunft per E-Mail an{' '}
              <span style={{ color: '#3075b6' }}>info@ekp-corporations.de</span>{' '}
              widerrufen.
            </Checkbox>
            {!formData.consent && (
              <FormHelperText color='red.500'>
                Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung,
                bevor Sie absenden.
              </FormHelperText>
            )}
          </FormControl>

          {/* 3.4) Submit-Button: inaktiv, wenn consent nicht gegeben */}
          <Button
            type='submit'
            colorScheme='blue'
            w='full'
            mt={4}
            isDisabled={!formData.consent}
          >
            Absenden
          </Button>
        </Box>
      </Box>
      <br />
    </>
  );
}
