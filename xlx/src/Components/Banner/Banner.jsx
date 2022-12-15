import React from 'react'
import { Image,Box } from '@chakra-ui/react'

function Banner() {
  return (
    <div>

<Box display={"flex"} h={5} boxSize='lg'>
  <Image h={300} src='https://statics.olx.in/olxin/autos/landingPage/v1/common/banner_mobile.png' alt='Dan Abramov' />
  <Image h={300} src='https://statics.olx.in/olxin/autos/landingPage/v1/common/banner_mobile.png' alt='Dan Abramov' />
  <Image h={300} src='https://statics.olx.in/olxin/autos/landingPage/v1/common/banner_mobile.png' alt='Dan Abramov' />
  <Image h={300} src='https://statics.olx.in/olxin/autos/landingPage/v1/common/banner_mobile.png' alt='Dan Abramov' />
</Box>
    </div>
  )
}

export default Banner