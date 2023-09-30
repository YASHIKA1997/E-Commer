import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
 

const ImageUpload = () => {
    const [image,setImage]=useState('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])

    }
    function handleAPI(){
       const formData= new FormData()
        formData.append('image',image)
        axios.post('url', formData).then((res)=>{
           console.log(res)
        })
    }
  return(
    <Wrapper>
             <input type='file' name='file' onChange={handleImage}/>
             <button className='btn' >Upload</button>
        <div className='img'>
            <div className="container">
              <div className="contact-form">
                 <form className="contact-inputs">
                       <input type="text" name="Product Name" placeholder="Product Name"required autoComplete="off" ></input>
                       <input type="number" name="₹" placeholder="₹Price" required autoComplete="off" ></input>
                        <textarea name="Message"  placeholder="Enter Your Product Details" cols='30' rows='10' required autoComplete="off"></textarea>
                         <input type="submit" value='send'></input>
                </form>
             </div>
          </div>
      </div>
  </Wrapper>
  )
   
}

const Wrapper = styled.header`
  height: 100rem;
  width:100rem;
  margin-left:600px;
  
  justify-content: center;
  align-items: center;
  position: relative;
.img{
    height:100rem;
    width:100rem;
    
}
.btn {
  background-color: ${({ theme }) => theme.color.helper};
    
    cursor: pointer;
    border: none;
    margin-left:5px;
  }
  .container {
    margin-top: 6rem;
    margin-left:-300px;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.color.white};
            border: 1px solid ${({ theme }) => theme.color.btn};
            color: ${({ theme }) => theme.color.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  
`;

 

export  default ImageUpload;