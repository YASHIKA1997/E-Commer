import {
    createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import React, { useState } from "react";
import styled from 'styled-components';
import { firebaseAuth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate();
    const [formValues,setFormValues] = useState({
        email:"",
        password:"",
    });
    

    const handleSignIn = async()=>{
        try{
            const {email,password}=formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);

        }catch(error){
            console.log(error)
        }
        
    };
    onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
        if(CurrentUser ) navigate("/");
    })
    return(
        <Container showPassword={showPassword}>
            
            <div className="content">
            
                <div className="body flex column a-center j-center">
                   <div className="text flex column">
                      <h1>Lowest Price Best Quality</h1>
                      <h4>Synthia</h4>
                      <h6>
                        Feel Synthia Now
                      </h6>

                    </div>
                    <div className="form">
                       <input type="email" placeholder="Email address" name="email"
                         value={formValues.email} onChange={(e) =>setFormValues({...formValues,[e.target.name]:e.target.value})}
                       
                       ></input>
                       {
                           showPassword && (<input type="password" placeholder="Password" name="password"
                           value={formValues.password} onChange={(e) =>setFormValues({...formValues,[e.target.name]:e.target.value})}
                           
                           ></input>)
                       }
                    
                       {!showPassword && (
                       <button onClick={() => setShowPassword(true)}>Get started</button>)}
                    </div>
                     <button onClick={handleSignIn} className="btn">Sign Up</button>
                </div>
            
            </div>
        </Container>
    )

};
      
const Container=styled.div`
  .content{
    
    top:0;
    left:0;
    background-color:white;
    height:100vh;
    width:100vw;
    margin-top:100px;
    .body{
        gap:1rem;
        .text{
            gap:1rem;
            text-align:center;
            font-size:2rem;
            h1{
                padding:0 25rem;
            }
        }
        .form{
            margin-left:600px;
            
            
            

            input{
                color:black;
                border:none;
                padding:1.5rem;
                font-size:1.2rem;
                border:1px solid black;
                &:focus{
                    outline:none;
                }
            }
           
        }
        .btn{
            padding:0.5rem 1rem;
            background-color:#8490ff;
            boder:none;
            cursor:pointer;
            color:white;
            font-weight:bolder;
            font-size:1,05rem;
            margin-left:600px;
            margin-top:5px;
            
        }
        button{
            padding:0.5rem 1rem;
            background-color:#8490ff;
            boder:none;
            cursor:pointer;
            color:white;
            border-radius:0.2rem;
            font-weight:bolder;
            font-size:1,05rem;
            margin-left:5px;
              
            
        }
    }
  }

`;