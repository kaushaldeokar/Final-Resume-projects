import React ,{useEffect, useState}from 'react'
import { AxiosInstance } from '../../service/Api.js'
import { RecipeReviewCard } from './Card.jsx';
import { Link, useSearchParams } from 'react-router-dom'
import {Grid,styled} from '@mui/material'




const Posts = () => {

    const [Posts,SetPosts]=useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    

    useEffect(()=>{

        const fetchData=async()=>{
            try{
                let res=await AxiosInstance.get('/getpost',{category:category||''});
                if(res.isSuccess){
                    SetPosts(res.data);
                }
            }catch(err){
                console.log('Error',err);
            }
            

        }
        fetchData();

    },[category])

  return (
    <>
      {
      (Posts && Posts.length>0) ?
        Posts.map((e)=>{
            return(
                
                <RecipeReviewCard FullName={e.FullName} title={e.title}  description={e.description}   categories={e.categories}  createdData={e.createdData}/>
                
            )
        })
        
        :
        
        <>
        No Posts Yet...:(
        </>

      }
    </>
  )
}

export default Posts
