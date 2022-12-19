import React from 'react'
import {Divider,ButtonGroup,Image,Button,Box,StackDivider,Text,Stack,Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate=useNavigate()
    
  return (
    <div>

        



<Grid templateColumns='repeat(4, 1fr)' gap={6}>
  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
  <Card maxW='sm'>
  <CardBody>
    
    <Image
      src='https://apollo-singapore.akamaized.net/v1/files/dlxksx4pp1fv2-IN/image;s=300x600;q=60'
      alt='phone'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>I phone 12</Heading>
      <Text>
      I phone 12 white color 2.5 month old
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        90,000
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button 
        onClick={()=>{
          navigate("/singleproduct")
      }} 
         variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  {/* <GridItem w='100%' h='10' bg='blue.500' />
   */}
   <Card maxW='sm'>
  <CardBody>
    
    <Image
      src='https://apollo-singapore.akamaized.net/v1/files/ou19p5fwcs2x1-IN/image;s=300x600;q=60'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>I phone 12 white color </Heading>
      <Text>
      I phone 12 white color 2.5 month old
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        50,000
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button
       onClick={()=>{
        navigate("/singleproduct")
    }} 
      
      variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
  <Card maxW='sm'>
  <CardBody>
    
    <Image
      src='https://apollo-singapore.akamaized.net/v1/files/jjgutu7qwbl42-IN/image;s=300x600;q=60'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Bed</Heading>
      <Text>
        This bed is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        2,50,000
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button 
       onClick={()=>{
        navigate("/singleproduct")
    }} 
      variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
  <Card maxW='sm'>
  <CardBody>
    
    <Image
      src='https://apollo-singapore.akamaized.net/v1/files/31kejolpvpw7-IN/image;s=300x600;q=60'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>X box series s</Heading>
      <Text>
        This X box series s is perfect for modern speaker
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        20,000
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button 
       onClick={()=>{
        navigate("/singleproduct")
    }} 
      
      variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  
</Grid>


    </div>
  )
}

export default Home