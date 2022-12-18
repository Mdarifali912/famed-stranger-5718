import React from 'react'
import {Divider,ButtonGroup,Image,Button,Box,StackDivider,Text,Stack,Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Home() {
  return (
    <div>

        

<Card maxW='sm'>
  <CardBody>
    
    <Image
      src='https://apollo-singapore.akamaized.net/v1/files/z0n1bk6qkd4r-IN/image;s=300x600;q=60'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        4,50,000
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

export default Home