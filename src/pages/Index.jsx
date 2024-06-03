import React, { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, FormErrorMessage, useToast, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === "user@example.com" && password === "password") {
        toast({
          title: "Login successful.",
          description: "You have successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login failed.",
          description: "Invalid email or password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement>
              <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={() => setShowPassword(!showPassword)} size="sm" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button colorScheme="teal" width="100%" onClick={handleLogin} isLoading={isLoading}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
