import React, { useState , useEffect ,useContext} from 'react'
import { Box, FormControl, styled, Button, InputBase, TextareaAutosize } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useLocation,useNavigate } from 'react-router-dom';

import { DataContext } from '../../Context/DataProvider';
import { AxiosInstance } from '../../service/Api.js'



const Container = styled(Box)`
    margin:70px 100px
`

const Image = styled('img')({
    width:"100%",
    height:"50vh",
    objectFit:'cover',
})

const Form = styled(FormControl)`
    
    display:flex;
    flex-direction:row;
`

const Text = styled(InputBase)`
    flex:1;
`

const TextArea = styled(TextareaAutosize)`
    width:100%;
    margin-top:10px;
    font-size:18px;
    color:black;
    
    border:none;
    &:focus-visible{
        outline:none;
    }

`

const initialPost = {
    title: '',
    description: '',
    FullName: '',
    categories: '',
    createdData: new Date(),
}




const CreatePost = () => {

    const [Post, setPost] = useState(initialPost);
    const [file,setFile]=useState('');

    const {account}=useContext(DataContext);

    const location =useLocation();
    const Navigate=useNavigate();

    useEffect(()=>{
        
            
        
        Post.categories=location.search?.split("=")[1] || "All";
        Post.FullName=account.FullName;

    },[file])

    const handleChange=(e)=>{
        setPost({...Post,[e.target.name]:e.target.value});
    }


    const SavePost=async()=>{
        try{
            
            let res=await AxiosInstance.post('/create',Post);
            if(res.isSuccess===true){
                Navigate('/');
            }
        }catch(err){
            console.log(err);
        }
        
    }

    const url='https://i.pinimg.com/originals/01/5a/17/015a1757e67f766a12621af543b3a5fd.jpg';

    return (
        <Container>
            <Image src={url} alt="" />
            <Form>
                <label htmlFor="fileInput"><AddPhotoAlternateIcon fontSize='large' color='action' /></label>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
                <Text placeholder="Title" name="title" onChange={(e) => handleChange(e)} />
                <Button variant="contained" onClick={()=>SavePost()}>Publish</Button>
            </Form>

            <TextArea
                placeholder='Add your Story Here..'
                onChange={(e) => handleChange(e)}
                name='description'
            ></TextArea>

        </Container>
    )
}

export default CreatePost
