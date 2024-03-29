import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'

import * as Yup from 'yup'

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Container,
  Flex,
  Heading,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs'

import { useState } from 'react'
import ModelUI from './Model'
import { toast } from 'react-toastify'

const schema = Yup.object({
  name: Yup.string().required('enter your name'),
  surname: Yup.string().required('enter your surame'),
  email: Yup.string().email().required('email required'),
  age: Yup.number().positive().integer().min(16).required('enter your age'),
  password: Yup.string().min(6).max(10).required('password required'),
})

export const Form = () => {
  const [submitting, setSubmitting] = useState(false)
  const [modal, setModal] = useState<any>(true)
  const color = useColorModeValue('orange.400', '#1A2036')

  const Submit = (event: any) => {
    event.preventDefault()
    setSubmitting(true)
    emailjs

      .sendForm(
        'service_9l68yag',
        'template_bmfoy27',
        event.target,
        'wcEzEMeePpQMJBII6',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          toast.error('Message Not Send :-(', {
            position: toast.POSITION.TOP_RIGHT,
          })
        },
      )

    toast.success('Message Send :-)', {
      position: toast.POSITION.TOP_RIGHT,
    })

    setTimeout(() => {
      setSubmitting(false)
    }, 1750)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      age: 6,
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    onOpen()
    setModal(data)
    console.log('check this daaataa', data)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div onSubmit={Submit}>
        <div>
          <ModelUI isOpen={isOpen} onClose={onClose} data={modal} />
        </div>

        <Container maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box
              bg={color}
              color="white"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}
            >
              <Box p={6}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Button
                            size="sm"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            +27-789941731
                          </Button>
                          <Button
                            size="sm"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            donaldmzima8@gmail.com
                          </Button>
                          <Button
                            size="sm"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={
                              <MdLocationOn color="#1970F1" size="20px" />
                            }
                          >
                            Vanderbijlpark,South Africa
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <a href="https://github.com/DonaldMzima">
                          <IconButton
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: '#0D74FF' }}
                            icon={<BsGithub size="28px" />}
                          />
                        </a>

                        <a href="https://www.linkedin.com/in/donald-mzima-8557a3231/">
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: '#0D74FF' }}
                            icon={<BsLinkedin size="28px" />}
                          />
                        </a>
                      </HStack>
                    </Box>
                  </WrapItem>

                  <WrapItem>
                    <Box bg="#F5F5F5" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <Center>
                            {submitting && <div>Submtting Form...</div>}
                          </Center>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset>
                              <FormControl>
                                <Box>
                                  <Center>
                                    <FormLabel>
                                      <p>Name:</p>
                                      <Input
                                        borderColor={useColorModeValue(
                                          'orange.400',
                                          'orange.4s00',
                                        )}
                                        type="text"
                                        placeholder="name..."
                                        {...register('name')}
                                      />
                                      <Text color="red">
                                        <p>{errors.name?.message}</p>
                                      </Text>
                                    </FormLabel>
                                  </Center>

                                  <Center>
                                    <FormLabel>
                                      <p>Surname:</p>
                                      <Input
                                        borderColor={useColorModeValue(
                                          'orange.400',
                                          'orange.4s00',
                                        )}
                                        type="text"
                                        placeholder="surname..."
                                        {...register('surname')}
                                      />
                                      <Text color="red">
                                        <p>{errors.surname?.message}</p>
                                      </Text>
                                    </FormLabel>
                                  </Center>

                                  <Center>
                                    <FormLabel>
                                      <p>Email:</p>
                                      <Input
                                        borderColor={useColorModeValue(
                                          'orange.400',
                                          'orange.4s00',
                                        )}
                                        type="text"
                                        placeholder="email..."
                                        {...register('email')}
                                      />
                                      <Text color="red">
                                        <p>{errors.email?.message}</p>
                                      </Text>
                                    </FormLabel>
                                  </Center>

                                  <Center>
                                    <FormLabel>
                                      <p>Age:</p>
                                      <Input
                                        borderColor={useColorModeValue(
                                          'orange.400',
                                          'orange.4s00',
                                        )}
                                        type="number"
                                        placeholder="age..."
                                        {...register('age')}
                                      />

                                      <Text color="red">
                                        <p>{errors.age?.message}</p>
                                      </Text>
                                    </FormLabel>
                                  </Center>

                                  <Center>
                                    <FormLabel>
                                      <p>Password:</p>
                                      <Input
                                        borderColor={useColorModeValue(
                                          'orange.400',
                                          'orange.4s00',
                                        )}
                                        type="text"
                                        placeholder="enter password..."
                                        {...register('password')}
                                      />
                                      <Text color="red">
                                        <p>{errors.age?.message}</p>
                                      </Text>
                                    </FormLabel>
                                  </Center>
                                </Box>
                              </FormControl>
                            </fieldset>
                            <div>
                              <Center>
                                <Button colorScheme="orange" type="submit">
                                  Submit
                                </Button>
                              </Center>
                            </div>
                          </form>
                        </VStack>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  )
}
