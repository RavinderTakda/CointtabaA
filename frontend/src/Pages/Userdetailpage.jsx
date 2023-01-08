
import { Box, Select } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react"
import styles from '../Userdetail.module.css';
import { Pagination } from "./pagination";
 export const UserDetail = () => {

    const [data,setdata]=useState()
    const [count,setcount] =useState(0)
    const [gender,setGender]=useState("")
    const [page,setPage]=useState(1)
    const [totalPages,setTotal]=useState(1)

    const userdata = async() => {

if(count==0){

  setcount(prev=>prev+1)

        await  axios.get("http://localhost:4500/").then((res)=>{setdata(res.data) 
          console.log(res.data)}
          ).catch((err)=>{
              console.log(err)
          })
  
  
      }

}
    
        
    userdata()
       
        console.log(data,"data")
           


return(
    <div>
         <Box>
            <Select 
             bg='teal'
             borderColor='none'
             color='black'
             fontSize="20px"
             width="20%"
             margin="20px"
             marginLeft="5%"
             name="" id="" onChange={(e)=>setGender(e.target.value)}>
                <option value="">Filter By Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Select>
         </Box>
        <table>
            <thead>
            <tr>   
            <th>No</th>
            <th>Profile-Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Country</th>
            </tr> 
            </thead>
            <tbody>
            {data&&data.map((ele,index)=>{
              return  <tr key={index}>
                  <td>{index+1}</td>
                  <td><img src={ele.picture.medium} alt="" /></td>
                  <td>{ele.name.title+" "+ele.name.first+" "+ele.name.last}</td>
                  <td>{ele.email}</td>
                  <td>{ele.dob.age}</td>
                  <td>{ele.cell}</td>
                  <td>{ele.location.city}</td>
                  <td>{ele.location.country}</td>
                </tr>
            })}
            </tbody>
        </table>
        <Pagination currentpage={page} handlePage={setPage} totalPages={totalPages}/>
    </div>
)

}