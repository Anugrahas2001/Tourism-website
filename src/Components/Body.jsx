import React, { useState } from 'react'

function Body(props) {
console.log(props)
let [Btn,setBtn]=useState("Add To Fav");


    const addToFav=(imgSrc)=>{
        setBtn((prevBtn)=>{
            if(prevBtn==="Add To Fav")
            {
              props.getFavImages(imgSrc);
            return "Added To Fav";
            }else{
              props.removeImages(imgSrc)
             return "Add To Fav";
            }
        })
    }



  return (
    <div>
       
        <img src={props.contents.img}/>
        <div className='details'>
        <h1>{props.contents.head}</h1>
        <p>{props.contents.para}</p>
        <button className='fav-btn' onClick={()=>{
          addToFav(props.contents.img)
        }}>{Btn}</button>
        </div>
       
{/* 
        <div className='container'>
        <img src={props.contents.imgSrc}/>
        <div className='details'>
        <h1>WaterFalls</h1>
        <p>endi nemo nihil minus oam reiciendis q quos iste facilis!</p>
        <button className='fav-btn'>Added To Fav</button>
        </div>
        </div> */}

        {/* <div className='container'>
        <img src='https://images.unsplash.com/photo-1560925444-359894551eae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='details'>
        <h1>WaterFalls</h1>
        <p>endi nemo nihil minus oam reiciendis uos iste facilis!</p>
        <button className='fav-btn'>Added To Fav</button>
        </div>
        </div> */}

    
    </div>
  )
}

export default Body
