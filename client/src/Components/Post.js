import React, { useState , useEffect } from 'react'
import { Container , Box, Input, Button, IconButton , Stack, Heading, Text, Image, InputGroup, InputRightAddon, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { ArrowRightIcon, BellIcon, CheckIcon, SearchIcon } from '@chakra-ui/icons';
import messenger from '../icons/messenger.svg'
import profile from '../icons/profile.png'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../Redux/Action';
import LikeIcon from '../icons/like.svg'
import CommentIcon from '../icons/comment.svg'
import ShareIcon from '../icons/share.svg'
import moment from 'moment'

const Post = (post) => {

  const [ viewComments ,setViewComments] = useState(false);

  const [ comment , setComment ] = useState([]);
  const getComments = () => {
    // fetch('https://dummyfacebook.herokuapp.com/post/comment')
    //   .then((response) => {
    //     return response.json();
    //   }).then((data) => {
    //     setComment(data)
    //     return
    //   })
  }
  getComments()

  var min = 1;
  var max = 100;
  var randomnumber =  min + Math.round(Math.random() * (max-min));

    const dispatch = useDispatch();

    const handleComment = (id) => {
      // console.log(comment)
      // dispatch(updatePost(id , comment));
    }

    // console.log(cmt+""+String(1))

    // console.log(post.post.comment ? post.post.comment.mssm : '')

  return (
    <Container mt={5} >
          <Box shadow='md' borderWidth='1px' maxWidth={800} margin={"auto"}  className='post_container'>
            <Stack p={3} mt={2} mb={2}>
              <Stack direction='row' mt={-2}>
              <img className='profile_img' color='black' src={post.post.profileImage? post.post.profileImage: profile} alt=''/>
                <Stack spacing={-0.5}>
                  <Text>{post.post.creator}</Text>
                  <Text fontSize='12px'>{moment(post.post.createdAt).fromNow()}</Text>
                </Stack>
              </Stack>
            </Stack>
            <Text pl={3} mt={-2}>{post.post.title}</Text>
            <Image mt={2} boxSize='100%' src={post.post.selectedFile} alt='Dan Abramov' />
            <Stack direction='row' justifyContent={'space-between'} p={3}>
              <Stack direction='row'>
                <img src={LikeIcon} alt='like'/>
                <Text fontSize='sm' p={1}>{post.post.likeCount} Others Liked this</Text>
              </Stack>
              <Stack direction='row' p={1}>
                <Text fontSize='sm'display={window.innerWidth < 600? 'none': 'block'}>{post.post.comment? '1' : '0'} Comments</Text>
                <Text fontSize='sm'>{randomnumber} Shares</Text>
              </Stack>
            </Stack>
            <Stack mt={2} mb={2} spacing={0} direction='row' className='optional_box'>
            <Button colorScheme={'none'} width='100%' leftIcon={<img src={LikeIcon} alt='like'/>} color='black' variant='solid' onClick={() => dispatch(likePost(post.post._id))}>
              Like
            </Button>
            <Button width='100%' if leftIcon={<img src={CommentIcon} alt='comment' />} colorScheme='white'  color='black'  variant='solid' onClick={() => setViewComments(true)}>
              Comment
            </Button>
            <Button  width='100%' leftIcon={<img src={ShareIcon} alt='comment' />} colorScheme='white' color='black' variant='solid'>
              Share
            </Button>
            </Stack>
            {
                viewComments?
                <Stack p={3}>
                    <Stack direction='row' mb={2}>
                        <img className='profile_img' color='black' src={post.post.profileImage? post.post.profileImage: profile} alt='' borderRadius='50%' />
                        <InputGroup  mt={4} p={1}>
                        <Input className='comments' wordBreak={true} borderRadius={20} placeholder='Write a comment...' value={comment.message} onChange={(e) => setComment({...comment , message: e.target.value})}/>
                        <InputRightElement cursor={'pointer'} mt={1} children={<CheckIcon color='green.500' />} onClick={() => handleComment(post.post._id)} />

                        </InputGroup>
                    </Stack>
                    {
                      console.log("dattaaa"+post.post.createdAt)
                    }
                   {
                    post.post.comment ? 
                    <Stack direction='row' mt={2}>
                      <img className='profile_img' color='black' src={post.post.comment.cmt.profileImage} alt='' borderRadius='50%' />
                      <Box className='comments' mt={4} p={1} pl={4}>
                        <Text fontSize='md' as='b'>{post.post.comment.cmt.profileName}</Text>
                      <Text fontSize='sm' >{post.post.comment.cmt.message}</Text>
                      </Box>
                  </Stack>
                  :
                  <></>
                  }
                    <Text cursor={'pointer'} onClick=''>View more comments</Text>
                </Stack>
                :
                <></>
                
            }
          </Box>
        </Container>
        
  )
}

export default Post