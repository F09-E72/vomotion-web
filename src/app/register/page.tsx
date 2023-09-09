"use client"

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nativeLanguage: string;
  targetLanguage: string;
}

const languageOptions = ['German', 'English', 'Italian', 'Spanish', 'Russian', 'French'];

function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    nativeLanguage: '',
    targetLanguage: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here, e.g., sending data to a server.
    console.log('Form data:', formData);
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // Redirect to the login page
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Native Language</FormLabel>
            <Select
              name="nativeLanguage"
              placeholder="Select your native language"
              value={formData.nativeLanguage}
              onChange={handleInputChange}
            >
              {languageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Target Language</FormLabel>
            <Select
              name="targetLanguage"
              placeholder="Select your target language"
              value={formData.targetLanguage}
              onChange={handleInputChange}
            >
              {languageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
      <ChakraLink mt={4} onClick={handleLoginRedirect}>
        Already have an account? Log in
      </ChakraLink>
    </Box>
  );
}

export default Register;





