import React,{useContext} from 'react'
import MenuContext from './utils/MenuContext'




const Contact = () => {
  const menu=useContext(MenuContext)
  const {setMenuName}=useContext(MenuContext)

   setMenuName("hadhi")
  
  return (
    <div>
      
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
      <h1>{menu.menuName}</h1>
      
    </div>
  )
}

export default Contact
