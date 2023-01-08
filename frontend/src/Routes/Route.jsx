
import {Route,Routes}from "react-router-dom"
import { Homepage } from "../Pages/Homepage"
import { UserDetail } from "../Pages/Userdetailpage"


export const AllRoute = () => {

return(
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/userdetail" element={<UserDetail/>}/>
        </Routes>
    </div>
)


}