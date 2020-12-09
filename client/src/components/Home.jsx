import React,{useState,useEffect} from 'react'
import Button from "@material-ui/core/Button"
import "./Home.css" 
import ModalContainer from './ModalContainer'
import axios from "axios"
import HomeItem from './HomeItem'

//home component
const Home = () => {

    const [data,setData] = useState([])
    const [fileImage,setFileImage] = useState(null)
    const [isModalOpen,setIsModalOpen] = useState(false)
   const [groupData,setGroupData] = useState({
       fileImage:null,
       name:"Group Name",
       description:"This is a demo group description",
       selectedUser:{"Doug Hermann": true,"User2":true}
   })
    useEffect(()=>{
        const fetchData = async()=>{
            const data =await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            data.data.sort(function (a, b) {
               return ('' + a.name).localeCompare(b.name)
                
             })
            console.log(data.data)
            setData(data.data)
        }
         fetchData()
    },[])


    const closeModal = (ans) =>{
         setIsModalOpen(ans)
    }
    return (
        <div className="container_home">
            {/* group card */}
            <HomeItem modalChange={setIsModalOpen} groupData={groupData} />
            {/* edit modal */}
            <ModalContainer  modalChange={setIsModalOpen} groupData={groupData} changeGroupData={setGroupData} 
            changeUserData={setData} fileImage={fileImage} changeImage={setFileImage} modalStatus={isModalOpen} userData = {data} closeModal={closeModal}/>
            <img src={fileImage} alt=""/>
        </div>
    )
}

export default Home
