import React, { useState,useContext } from 'react'
import { Box, TextField, Button, Typography, styled } from '@mui/material'
import { AxiosInstance } from '../../service/Api.js'
import { DataContext } from '../../Context/DataProvider.jsx'
import { useNavigate } from 'react-router-dom'


const Component = styled(Box)`
    width :458px;
    margin:auto;
    box-shadow:10px,
      
    
`
const Img = styled('img')({
    width: 350,

    margin: 'auto',
    display: 'flex',
    paddingTop: '10px'
    // flexDirection:'column',
})

const Wrapper = styled(Box)`
    padding :2px 65px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div ,& >button{
        margin-top:20px
    }
`

const Loginbtn = styled(Button)`
    background:#66B2B2;
`
const Alreadybtn = styled(Button)`
    color:black;
`

const InitialSignup = {
    FullName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
}

const InitialLogin = {
    Email: "",
    Password: "",
}



const NotifyError = styled(Typography)`
        font-size:10px;
        color:#ff6161;
        margin-top:10px;
        font-weight:600;
`




const Login = ({isUserAuthenticated}) => {

    // used to toggle between signup and login page
    const [account, setAccount] = useState('login');

    const [signUp, setSignup] = useState(InitialSignup);
    const [Login, setLogin] = useState(InitialLogin);
    const [Error, setError] = useState('');
    const navigate = useNavigate();

    const {setAcc}=useContext(DataContext);

    const InputChange = (e) => {
        //event is passed here
        setSignup({ ...signUp, [e.target.name]: e.target.value });
        // console.log(e.target.name, e.target.value);
    }

    const onValChange = (e) => {
        // Login state must fill with input Values//
        //event is passed here
        setLogin({ ...Login, [e.target.name]: e.target.value });
    }



    //api call for signup//
    const SignupUser = async () => {

        // console.log("clicked signup");
        //    let response= await AxiosInstance.post('/signup',JSON.stringify(signUp))
        //      initially cors error- browser security feature//
        //quki backend chal rha kisi aur post pr and front end kisi aur port pr simultaneously 2 request generated on 2 server//
        
        
        try {
            let response = await AxiosInstance.post('/auth/signup', signUp);
            if (response.isSuccess === true) {
                console.log(response);
                setSignup(InitialSignup);
                setAccount('login');
                setError('')
            
            
            }
        } catch (err) {
            setError('Something went Wrong ...')
        }

        //    let response= await AxiosInstance.post('/signup',signUp);
        //     if(response.isSuccess===true){
        //         console.log(response);
        //         setSignup(InitialSignup);
        //         setAccount('login');
        //     }else{
        //         setError('Something went Wrong ...')
        //     }


    }

    const LoginUser=async()=>{
        //api call will be done using post method sending jwt_token and /login
        
        try {
            let response = await AxiosInstance.post('/auth/login', Login);
            
            if (response.isSuccess === true) {
                console.log('response',response);
                setLogin(InitialLogin);
                
                setError('');
                navigate('/');
                //this is callback function that changes state in parent Component
                isUserAuthenticated(true);
                
                 //storing values globally//
                 console.log(response.data.User.FullName);
                 setAcc({FullName:response.data.User.FullName,Email:response.data.User.Email})
            }
        } catch (err) {
            setError('Something went Wrong ...')
        }
        
    }   



    let image = 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png';
    return (
        <Component>
            <Box>
                <Img src={image} alt="/" />
            </Box>

            {
                account === 'login' ?
                    <Wrapper>
                        
                        <TextField id="standard-basic" label="Email" name="Email" onChange={(e) => onValChange(e)} variant="standard" autoComplete="off" />
                        <TextField id="standard-basic" label="Password" name="Password" onChange={(e) => onValChange(e)} variant="standard" autoComplete="off" />
                        {
                            Error && <NotifyError>{Error}</NotifyError>
                        }
                        <Loginbtn variant="contained" onClick={()=>LoginUser()} >Login</Loginbtn>
                        <Typography style={{ textAlign: "center", padding: '10px' }}>Forgotten Pasword?</Typography>
                        <Box sx={{ borderBottom: 1 }} />
                        {/* //on onClick event toggle to signup and login  */}
                        <Alreadybtn variant="text" onClick={() => setAccount('signup')}>Create An Account</Alreadybtn>

                    </Wrapper>
                    :
                    <Wrapper>

                        <TextField id="standard-basic" label="Full Name" name="FullName" onChange={(e) => InputChange(e)} variant="standard" />
                        <TextField id="standard-basic" label="Email" name="Email" onChange={(e) => InputChange(e)} variant="standard" />
                        <TextField id="standard-basic" label="Password" name="Password" onChange={(e) => InputChange(e)} variant="standard" />
                        <TextField id="standard-basic" label=" Confirm Password" onChange={(e) => InputChange(e)} name="ConfirmPassword" variant="standard" />

                        {
                            Error && <NotifyError>{Error}</NotifyError>
                        }

                        <Loginbtn variant="contained" onClick={() => { SignupUser() }}>SignUp</Loginbtn>
                        <Box sx={{ borderBottom: 1 }} />
                        {/* //on onClick event toggle to signup and login  */}
                        <Alreadybtn variant="text" onClick={() => setAccount('login')}>Already have An Account?</Alreadybtn>
                    </Wrapper>

            }



        </Component>
    )
}

export default Login
