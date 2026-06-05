import React,{useContext, useEffect} from 'react'
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children
}) => {

    const token=localStorage.getItem('token')

    const navigate=useNavigate()

    useEffect(()=>{
        if(!token){
        navigate('/login')
    }

 axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }).then(response =>{
        if(response.status === 200){
            setCaptain(response.data.user)
            setIsLoading(false); 
        }
    }).catch(err =>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
    })

    },[token])

     if(isLoading){
        return (
            <div>Loading...</div>
        )
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper