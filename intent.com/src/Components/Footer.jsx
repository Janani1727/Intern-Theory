import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
   Divider,
    useColorModeValue,
    
  } from '@chakra-ui/react';
  import { React } from 'react';
  

  
  export default function Footer() {

    return (
      <>
 
      <Box
        bg={useColorModeValue("#446478")}
        color={useColorModeValue('white')}>
        <Container as={Stack} maxW={'6xl'} py={6} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={15} >
            <Stack align={'flex-start'} >
            <Link href={'#'}>BY TYPE</Link>
            <Divider color="black"></Divider>

              <Link href={'#'}>Internships In Mumbai</Link>
              <Link href={'#'}>Internships In Delhi</Link>
              <Link href={'#'}>Internships In Bangalore</Link>
              <Link href={'#'}>Internships In  Pune</Link>
              <Link href={'#'}>Internships In Hyderabad</Link>
            </Stack>
            <Stack align={'flex-start'} >
             
              <Link href={'#'}>BY PROFILE</Link>
              <Divider color="black"></Divider>
              <Link href={'#'}>Marketing Internships</Link>
              <Link href={'#'}>Business Development Internships</Link>
              <Link href={'#'}>Content Writing Internships</Link>
              <Link href={'#'}>Graphic Designing Internships</Link>
              <Link href={'#'}>HR Internships</Link>
              <Link href={'#'}>Engineering Internships</Link>

            </Stack>

            <Stack align={'flex-start'}>
             
              <Link href={'#'}>BY TYPE</Link>
              <Divider color="black"></Divider>
              <Link href={'#'}>Full Time Internships</Link>
              <Link href={'#'}>Part Time Internships</Link>
              <Link href={'#'}>Work From Home Internships</Link>
              
            </Stack>
            
          </SimpleGrid>
        </Container>

        <Stack align={'flex-start'} ml={"240px"}>
              <Flex gap={10} >
              <Link href={'#'}>REFUND & CANCELLATION POLICY</Link>
              <Link href={'#'}>COURSES</Link>
              <Link href={'#'}>TERMS AND CONDITIONS</Link>
              <Link href={'#'}>PRIVACY POLICY</Link>
              <Link href={'#'}>CONTACT US</Link>
              <Link href={'#'}>ABOUT US</Link>
              <Link href={'#'}>SITEMAP</Link>
              </Flex>
             

            </Stack>
        <Box py={4}>
          <Flex
            align={'center'}
            
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 4,
              // mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 4,
              // ml: 8,
            }}>
            
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'} >
          © 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.
          </Text>
        </Box>
      </Box>

   


      </>
    );
  }

