import { BellIcon, SearchIcon } from '@chakra-ui/icons'
import { IconButton, Input, Stack , Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import profile from '../icons/profile.png'
import messenger from '../icons/messenger.svg'
import * as api from '../api/index.js'

const Navbar = () => {

    const [user, setUser] = useState([]);

    const getUser = () => {
      fetch('https://dummyfacebook.herokuapp.com/post/user')
        .then((response) => {
          return response.json();
        }).then((data) => {
          setUser(data)
          return
        })
    }
    getUser()
    

  return (
    <Stack direction='row' className='navbar' mt={1} p={1} justifyContent={'space-between'}>
        <Stack spacing={1} direction='row' ml={4}>
        
        <Input placeholder='Search' value='' maxWidth={300}  borderRadius={50}/>
        <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<SearchIcon />}
            />
        </Stack>
        <Stack spacing={1} direction='row' me={10}>
        <img className='profile_img_main' color='black' src={user[0] ? user[0].profile : profile} alt='' borderRadius='50%' />
        <Text size='xl' value='' display={window.innerWidth < 600? 'none': 'block'} p={2}>{user[0] ? user[0].name : 'Auto Loging...'}</Text>
        <IconButton 
        
        aria-label='Search database' 
        icon={<img color='black' src={messenger} alt='' />}  
        isRound={true}
        />
        <IconButton 
        aria-label='Search database' 
        icon={<BellIcon />}  
        isRound={true}
        />
        </Stack>
    </Stack>
  )
}

export default Navbar