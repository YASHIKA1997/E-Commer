import {
    onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import styled from 'styled-components';
import { firebaseAuth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

 const Login=()=>{
   const navigate=useNavigate();
   const [formValues,setFormValues] = useState({
       email:"",
       password:"",
   });
   const handleLogIn= async()=>{
       try{
           const {email,password}=formValues;
           await signInWithEmailAndPassword(firebaseAuth, email, password);

       }catch(error){
           console.log(error)
       }
       
   };
   onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
       if(CurrentUser ) navigate("/");
   })
   return(
       <Container>
           <div className="content">
               
               <div className="form-container flex column a-center j-center">
                   <div className="form flex column a-center j-center">
                       <div className="title">
                           <h3>Login</h3>
                       </div>
                       <div className="container flex column">

                       <input type="email" placeholder="Email address" name="email"
                        value={formValues.email} onChange={(e) =>setFormValues({...formValues,[e.target.name]:e.target.value})}
                      
                      ></input>
                      
                          <input type="password" placeholder="Password" name="password"
                          value={formValues.password} onChange={(e) =>setFormValues({...formValues,[e.target.name]:e.target.value})}
                          
                          ></input>
                      
                       <button onClick={ handleLogIn}>Log In</button>
                       </div>
                   </div>

               </div>
               
           </div>
       </Container>
   )

};
const Container=styled.div`
  .content{
    top:0;
    left:100px;
    background-color:white;
    margin-left:550px;
    margin-top:200px;
}
    .form-container{
        gap:2rem;
        height:100vh;
        .form{
        padding:2rem;
        background-color:#000000b0;
        width:25vw;
        gap:2rem;
        color:white;}
        .container{
            gap:2rem;
            input{
                padding:0.5rem 1rem;
                width:15rem;
            }
            button {
                padding: 0.5rem 1rem;
                background-color: #8490ff;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
                margin-top:5px;
              }
        }

    }
`;
     

 

export default Login;