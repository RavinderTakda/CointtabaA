
import React from "react"
import { Button, Box } from '@chakra-ui/react'
import axios from "axios"
import { Link } from "react-router-dom"

 export const Homepage = () => {


    const Fetchdata = () => {

console.log("Dfsdfs")
axios.post("https://cointab-v0ke.onrender.com/cointabdata").then((res)=>console.log(res)).catch((err)=>{
    console.log(err)
})

    }







    const DeleteUser = () => {

        console.log("Delte")
        axios.delete("https://cointab-v0ke.onrender.com/deletedata").then((res)=>console.log(res)).catch((err)=>{
            console.log(err)
        })
       
            }



 
    

return(
<Box>
<Button m='4' colorScheme='blue' onClick={Fetchdata}>Fetch Users</Button>
<Button m='4' colorScheme='blue' onClick={DeleteUser}>Delete Users</Button>
<Link to="/userdetail"> <Button m='4' colorScheme='blue'>User Details</Button></Link>


</Box>

)


}