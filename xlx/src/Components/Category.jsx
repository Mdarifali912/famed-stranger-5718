import React from 'react'

import { Flex } from '@chakra-ui/react'

function Category() {
  return (
    // <Box bg='white' w='100vh' p={4} color='white'>
        
//   All category
       <Flex mt={-270} marginBottom={8} fontSize={20} style={{color:"black"}} gap={16}>
            <p>All category</p>
            <p>Cars</p>
            <p>Motorcycles</p>
            <p>Mobile Phones</p>
            <p>For sale: Houses & Apartments</p>
            <p>XLX Renew(mobile) </p>
            <p>Scooters</p>
            <p>Commercial & Other Vehicles</p>
            <p>For Rent: Houses & Apartments</p>
        </Flex>
// </Box>



  )
}

export default Category