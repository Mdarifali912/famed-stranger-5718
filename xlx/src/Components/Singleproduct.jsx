import React from 'react'
import {Divider,ButtonGroup,Image,Button,Box,StackDivider,Text,Stack,Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
 } from '@chakra-ui/react'
function Singleproduct() {

   return(
      <div>
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
      <Button variant='solid' colorScheme='blue'>
         
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
 
      </div>
   )
}
    
export default Singleproduct