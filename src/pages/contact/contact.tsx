import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
  Textarea,
  SimpleGrid,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import OfficePicture from '../../assets/office.jpg';
import './contact.scss';

interface FormData {
  [key: string]: string;
  anrede: string;
  titel: string;
  firstName: string;
  lastName: string;
  kanzleiFirma: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    anrede: '',
    titel: '',
    firstName: '',
    lastName: '',
    kanzleiFirma: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      anrede: formData.anrede,
      titel: formData.titel,
      firstName: formData.firstName,
      lastName: formData.lastName,
      kanzleiFirma: formData.kanzleiFirma,
      email: formData.email,
      message: formData.message,
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

  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.700', 'gray.200');

  return (
    <>
      <Box className='image-container'>
        <img src={OfficePicture} alt='Office' className='full-width-image' />
      </Box>
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
        <Box as='form' onSubmit={handleSubmit}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl id='anrede'>
              <Select
                name='anrede'
                placeholder='Anrede'
                value={formData.anrede}
                onChange={handleChange}
              >
                <option value=''>Anrede</option>
                <option value='Herr'>Herr</option>
                <option value='Frau'>Frau</option>
                <option value='Dr.'>Dr.</option>
              </Select>
            </FormControl>
            <FormControl id='titel'>
              <Input
                placeholder='Titel'
                type='text'
                name='titel'
                value={formData.titel}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id='firstName'>
              <Input
                placeholder='Vorname'
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id='lastName'>
              <Input
                placeholder='Nachname'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              id='kanzleiFirma'
              gridColumn={{ base: 'span 1', md: 'span 2' }}
            >
              <Input
                placeholder='Kanzlei / Firma'
                type='text'
                name='kanzleiFirma'
                value={formData.kanzleiFirma}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl
              id='email'
              gridColumn={{ base: 'span 1', md: 'span 2' }}
            >
              <Input
                placeholder='E-Mail Adresse*'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>
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
          <Button type='submit' colorScheme='blue' w='full' mt={4}>
            Absenden
          </Button>
        </Box>
      </Box>
      <br />
    </>
  );
}
