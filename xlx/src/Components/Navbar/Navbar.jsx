

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,Image,Select
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box  >
            
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          
          <Flex gap={8} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Box boxSize='sm'>
  <Image mt="10px" ml="50px"  h={50} w={125} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvZ4LqmbekgZhBQh6a4rMN4JNWn2NIdFuGA&usqp=CAU' alt='Dan Abramov' />
</Box>

            </Text>
            <Select fontSize={23} h={20} w={254} placeholder='Mumbai'>
  <option value='option1'>Kerala</option>
  <option value='option2'>Punjab</option>
  <option value='option3'>Kolkata</option>
  <option value='option2'>Mumbai</option>
  <option value='option3'>Delhi</option>
</Select>


            {/* <Input w={-3} marginStart={-0}  placeholder='Basic usage' /> */}

  
            <Flex gap={8} display={{ base: 'none', md: 'flex' }} ml={10}>
            <Input fontSize={23} h={20} w={553} marginStart={-10}  placeholder='Find Cars,Mobiles phones and More' />
            <Button borderColor={0} fontSize={23} h={20} w={143} colorScheme='grey-300' variant='outline'>
    search
  </Button>
            <Select fontSize={23} border={0} h={20} w={-54}>
  <option value='option1'>Hindi</option>
  <option value='option1'>English</option>
  
  
</Select>
              {/* <DesktopNav /> */}

            <Stack
            mt={4}
            ml={12}
            gap={6}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            
            <Button 
               borderRadius="40px"
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'lg'}
              fontWeight={600}
              color={'white'}
              bg={'teal.400'}
              href={'#'}
              _hover={{
                bg: 'teal.300',
              }}>
              Log In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'lg'}
              fontWeight={600}
              color={'white'}
              bg={'teal.400'}
              href={'#'}
              _hover={{
                bg: 'teal.300',
              }}>
              + Sell
            </Button>
          </Stack>
              
            </Flex>
           
          </Flex>
  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
      
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    // {
    //   label: 'Inspiration',
    //   children: [
        // {
        //   label: 'Explore Design Work',
        //   subLabel: 'Trending Design to inspire you',
        //   href: '#',
        // },
        // {
        //   label: 'New & Noteworthy',
        //   subLabel: 'Up-and-coming Designers',
        //   href: '#',
        // },
    //   ],
    // },
    // {
    //   label: 'Find Work',
    //   children: [
    //     {
    //       label: 'Job Board',
    //       subLabel: 'Find your dream design job',
    //       href: '#',
    //     },
    //     {
    //       label: 'Freelance Projects',
    //       subLabel: 'An exclusive list for contract work',
    //       href: '#',
    //     },
    //   ],
    // },
    // {
    //   label: 'Learn Design',
    //   href: '#',
    // },
    // {
    //   label: 'Hire Designers',
    //   href: '#',
    // },
  ];