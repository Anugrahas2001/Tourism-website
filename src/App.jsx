import React, { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Details from './Components/Details'
import './App.css'



function App() {

let [state,setState]=useState([]);
function getFavImages(imgSrc){
  setState([...state,imgSrc])

}
console.log(state)

const favImages =state.map((image, index) => {
  return(
   <div className='favorites'>
    <i className="fa-regular fa-circle-xmark icon" onClick={()=>{
      removeImages(image)
    }}></i>
  <img className='pic' key={index} src={image} />
   </div>
  )
});

function removeImages(imageSrc)
{
  setState([...state].filter((currentImg)=>{
    return currentImg!=imageSrc;
  }))
}


 let Bodydetails=Details.map((detail,index)=>{
  return(
    <Body
    key={`${index}`}
    contents={{
      img:detail.imgSrc,
      head:detail.heading,
      para:detail.paragraph
    }}
    getFavImages={getFavImages}
    removeImages={removeImages}
    />
  )
 })


console.log(Bodydetails)
  return (
    <div>
<Header/>


       <div className='root'>
        <div className='root1'>
          <h1>Tourist Places</h1>
          <div className='headings'>
          {Bodydetails}
          </div>
        </div>

        <div className='root2'>
          <h1>Favorites</h1>
          {favImages}
        </div>

       </div>

    </div>
  )
}

export default App


// class App extends Component{
// constructor(){
//   super()
// this.state={
//   count:0
// }
// this.countNumber=this.countNumber.bind(this);
// }

//   countNumber(){
//     this.setState((prevState)=>{
//       return {
//         count:prevState.count+1
//       }
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.countNumber}>Counter</button>
//       </div>
//     )
//   }
// }


