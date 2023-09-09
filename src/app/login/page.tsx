"use client"
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import { Box,  FormControl, FormLabel, Link, Input, VStack } from '@chakra-ui/react';
import Button from '../components/atoms/Button';
import {useRouter} from 'next/navigation';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter()

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can handle the login logic here, e.g., sending data to a server.
    console.log('Form data:', formData);
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
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
          <Button type="submit" onClick={() => router.push("/notebook/new")}>
            Log In
          </Button>
          <Link onClick={() => router.push("/register")}>No account? Register</Link>
        </VStack>
      </form>
    </Box>
  );
}

export default LoginForm;