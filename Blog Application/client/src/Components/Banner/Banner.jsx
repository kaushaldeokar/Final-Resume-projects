import React from 'react'
import { Box, styled, Typography } from '@mui/material'

// const Image = styled('img')({
//     width:'60%',
//     height:'10%'
// })

const Img=styled(Box)`
    
    height:30vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    & > p {
        font-size:70px;
        color:Black;
        font-family: "Times New Roman", Times, serif;
    }

`

const Banner = () => {
    return (
        <Img>
            <Typography>Welcome to Blog</Typography>
        </Img>
            
        
    )
}

export default Banner
