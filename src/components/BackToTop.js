import React from 'react'
import { useState , useEffect } from 'react'


export default function BackToTop() {

    const [BackToTopbutton,setBackToTopbutton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 2000){
                setBackToTopbutton(true);
            }
            else{
                setBackToTopbutton(false);
            }
        })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top : '0px',
            behavior:'smooth'
        })
    }
  return (
    <div>
     {BackToTopbutton && ( <button className = "btn btn-danger" onClick={scrollUp} style={{position:'fixed' , bottom : '20px' , right: '20px' , width:'40px',height : '40px' , borderRadius:'100%'}} >^</button> )}
     {/* <button><i class="bi bi-arrow-up"></i></button> */}
    </div>
  )
}
