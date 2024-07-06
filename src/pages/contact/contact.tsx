import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  SimpleGrid,
} from "@chakra-ui/react";

interface FormData {
  [key: string]: string;
  anrede: string;
  titel: string;
  firstName: string;
  lastName: string;
  kanzleiFirma: string;
  email: string;
  birthDate: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    anrede: "",
    titel: "",
    firstName: "",
    lastName: "",
    kanzleiFirma: "",
    email: "",
    birthDate: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        process.env.EMAIL_SERVICE!,
        process.env.EMAIL_TEMPLATE!,
        templateParams,
        process.env.EMAIL_USERID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("E-Mail erfolgreich versendet!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Fehler beim Versenden der E-Mail.");
        }
      );

    console.log(formData, "###");
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxW={{ base: "full", md: "container.md" }}
      mx="auto"
      p="4"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormControl id="anrede">
          <FormLabel>Anrede</FormLabel>
          <Select name="anrede" value={formData.anrede} onChange={handleChange}>
            <option value="">Anrede</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
            <option value="Dr.">Dr.</option>
          </Select>
        </FormControl>
        <FormControl id="titel">
          <FormLabel>Titel</FormLabel>
          <Input
            placeholder="Titel"
            type="text"
            name="titel"
            value={formData.titel}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="firstName">
          <FormLabel>Vorname</FormLabel>
          <Input
            placeholder="Vorname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Nachname</FormLabel>
          <Input
            placeholder="Nachname"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          id="kanzleiFirma"
          gridColumn={{ base: "span 1", md: "span 2" }}
        >
          <FormLabel>Kanzlei / Firma</FormLabel>
          <Input
            placeholder="Kanzlei / Firma"
            type="text"
            name="kanzleiFirma"
            value={formData.kanzleiFirma}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" gridColumn={{ base: "span 1", md: "span 2" }}>
          <FormLabel>E-Mail Adresse*</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="E-Mail Adresse*"
          />
        </FormControl>
        <FormControl id="message" gridColumn={{ base: "span 1", md: "span 2" }}>
          <FormLabel>Nachricht</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <Button type="submit" colorScheme="brand" w="full" mt={4}>
        Absenden
      </Button>
    </Box>
  );
}
