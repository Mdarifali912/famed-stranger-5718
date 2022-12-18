import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  export default function Login() {
    const [check,setcheck]=useState({Email:"",Password:""});
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("")
    
    const navigate=useNavigate()


    const handlesignin=()=>{
        fetch("http://localhost:8080/cred").then((res)=>res.json()).then((res)=>{
            setcheck(res)
        });
        if(email && password){
            if(check.Email===email && check.Password===password){
                alert("Login Successfully")
                navigate("/")
            }else{
                alert("wrong details")
            }
        }else{
            alert("fill details")
        }

       
    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handlesignin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }