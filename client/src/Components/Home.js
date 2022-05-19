import React, { useEffect, useState } from 'react';
import { Container , Box, Input, Button, IconButton , Stack, Heading, Text, Image, InputGroup, InputRightAddon, InputLeftElement, InputRightElement, CircularProgress } from '@chakra-ui/react';
import { ArrowRightIcon, BellIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons';
import '../Styles/styles.css'
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../Redux/Action';
import Navbar from './Navbar';

const Home = () => {

  const posts = useSelector((state) => state.posts);

  console.log("this"+ posts)

  const search = () => {

  }

  return (
    <Container minWidth={"100%"} margin={"0"} className='main_container' p={0}>
        <Navbar />
        {
          posts?
          posts.map((post , i) => 
            <>
            <Post key={i} post={post}/>
            {
              console.log(post)
            }
            </>
          )
          :
          <Stack  mt='20%' >
            <CircularProgress width={100}margin={'auto'} isIndeterminate color='green.300' />       
          </Stack>
        }
    </Container>
  )
}

export default Home