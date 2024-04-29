import React,{useEffect} from 'react'
import {Container,Text,Box,Tab,TabPanel,TabPanels,TabList,Tabs} from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import {useHistory} from 'react-router-dom'

const Homepage = () => {
const history =useHistory();

useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"));
     
    if(user){
        history.push("/chats")
    }
},[]);

  return (
    <Container maxW="xl" centerContent>
      <Box d='flex'
       justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="10px 0 15px 0"
      borderRadius="1g"
      borderWidth="1px">
        <Text fontSize='4xl' fontFamily={'work sans'} ml="150px" color={'black'}>Talk-a-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Box>
    </Container>
    
  )
}

export default Homepage