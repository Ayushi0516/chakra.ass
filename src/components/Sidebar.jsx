import { Box,Flex } from '@chakra-ui/react'
 import {StarIcon}from "@chakra-ui/icons"
import { SettingsIcon ,TimeIcon,CopyIcon } from '@chakra-ui/icons'
import { DeleteIcon } from '@chakra-ui/icons'


const Sidebar=()=>{

    return (
        <Box width="20%"  height="800px" border="0.5px solid blue" bgColor="beige">
            <h2 className="h2">LOGO</h2>
            <Flex mt="50px" flexDirection="column" lineHeight="60px">
            <p><CopyIcon/>Home </p>
            <p><DeleteIcon/>trending</p>
            <p> <TimeIcon/>explore</p>
            <p> <StarIcon/>favourites </p>
            <p> <SettingsIcon/>Setting</p>

            </Flex>
          
        </Box>
    )

}
export default Sidebar
