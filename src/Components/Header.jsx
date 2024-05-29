import React from 'react'

function Header() {
  // console.log(props.Fav.state)
  // const favImages = props.Fav.state.map((image, index) => (
  //   <img key={index} src={image} />
  // ));

  return (
    <div className='main-container'>
      <nav className='Logo'>
        <ul className='orderedList'>
            <li>Home</li>
            <li>Wishlist</li>
            <li>Places</li>
        </ul>
      </nav>
      <img src='https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      {/* <div className='header'>
        <div className='head'>Tourist Places</div>
        <div className='head'>
        <h3>Favorites</h3>
        {favImages}
        </div>
      </div> */}
    </div>
  )
}

export default Header
