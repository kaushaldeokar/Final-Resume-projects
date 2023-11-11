
import { AppBar,Toolbar,styled } from '@mui/material'
import {Link} from 'react-router-dom'

const Cmp=styled(AppBar)`
    background:#191919;
    color:#000;
    
`

const Container=styled(Toolbar)`
    justify-content:center;
    & > a {
      padding :20px;
      color:white;
      text-decoration:none;
    }
`

const Header = () => {
  return (
    <Cmp>
        <Container>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Logout</Link>
            
        </Container>
    </Cmp>
  )
}

export default Header
