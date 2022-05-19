import { Button, Container, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';import FileBase from 'react-file-base64';
import { createPost } from '../Redux/Action';

const AddPost = () => {

    const dispatch = useDispatch();

    const [ post , setPost ] = useState({
        creator: '',title: '', selectedFile: ''
    })

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      dispatch(createPost(post));

    };

  return (
    <Container>
        <Stack spacing={2}>
            <Input variant='outline' placeholder='title' value={post.title} onChange={(e) => setPost({...post , title: e.target.value})} />
            <Input variant='outline' placeholder='creator' value={post.creator} onChange={(e) => setPost({...post , creator: e.target.value})} />
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })} />
            <Button
              variant='contained'
              onClick={(e) => handleSubmit(e)}
              >Submit</Button>
        </Stack>
    </Container>
  )
}

export default AddPost