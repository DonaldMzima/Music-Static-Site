import { Stack } from '@chakra-ui/react'
import React from 'react'
import ArticleList from '../components/BlogSection'
import NavBar from '../components/NavBar'
import Footer from '../components/footer/Footer'

const Blog = () => {
  return (
    <>
      <NavBar />
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <div>
          <ArticleList />
        </div>
      </Stack>
      <Footer />
    </>
  )
}

export default Blog
