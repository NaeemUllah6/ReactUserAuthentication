import { Navigate, Outlet } from "react-router-dom"

const Authentication = () => {
    const user = localStorage.getItem('dummyToken')
    if(!user){
        return <Navigate to='/login' replace/>
    }
  return <Outlet/>
}

export default Authentication