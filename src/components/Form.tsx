import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as Yup from 'yup'

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { useState } from 'react'
import ModelUI from './Model'

const schema = Yup.object({
  name: Yup.string().required('enter your name'),
  surname: Yup.string().required('enter your surame'),
  email: Yup.string().email().required('email required'),
  age: Yup.number().positive().integer().min(15).required('enter your age'),
  password: Yup.string().min(6).max(10).required('password required'),
})

export const Form = () => {
  const [submitting, setSubmitting] = useState(false)
  const [modal, setModal] = useState<any>(true)

  const Submit = (event: any) => {
    event.preventDefault()
    setSubmitting(true)

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
    console.log(data)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div onSubmit={Submit}>
        <div>
          <ModelUI isOpen={isOpen} onClose={onClose} data={modal} />
        </div>

        <Text fontSize="1xl">
          <h1>Login</h1>
        </Text>
        {submitting && <div>Submtting Form...</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <FormControl>
              <Center>
                <FormLabel>
                  <p>Name:</p>
                  <Input
                    type="text"
                    placeholder="name..."
                    {...register('name')}
                  />
                </FormLabel>
                <p>{errors.name?.message}</p>
              </Center>
              <Center>
                <FormLabel>
                  <p>Surname:</p>
                  <Input
                    type="text"
                    placeholder="surname..."
                    {...register('surname')}
                  />
                </FormLabel>
                <p>{errors.surname?.message}</p>
              </Center>
              <Center>
                <FormLabel>
                  <p>Email:</p>
                  <Input
                    type="text"
                    placeholder="email..."
                    {...register('email')}
                  />
                </FormLabel>
                <p>{errors.email?.message}</p>
              </Center>
              <Center>
                <FormLabel>
                  <p>Age:</p>
                  <Input
                    type="number"
                    placeholder="age..."
                    {...register('age')}
                  />
                </FormLabel>
                <p>{errors.age?.message}</p>
              </Center>
              <Center>
                <FormLabel>
                  <p>Password:</p>
                  <Input
                    type="text"
                    placeholder="password..."
                    {...register('password')}
                  />
                </FormLabel>
                <p>{errors.age?.message}</p>
              </Center>
            </FormControl>
          </fieldset>
          <div>
            <Button colorScheme="orange" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
