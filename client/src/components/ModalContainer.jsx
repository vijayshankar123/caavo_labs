import React,{useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import "./ModalContainer.css"
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import user from "../img/user_avatar1.jpg"
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { TextField } from '@material-ui/core';
import UserItems from "./UserItems"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  //edit group modal component
const ModalContainer = ({modalChange, changeGroupData,groupData,changeUserData,modalStatus,closeModal,userData,fileImage,changeImage}) => {
  const [sortParams,setSortParams] = useState({
    ascending:true,
    descending:false
  })

  const markSelectedBox = (ind)=>{
    console.log(ind)
    if(groupData.selectedUser[ind]){
      const allUser={...groupData.selectedUser}
      delete allUser[ind]
      changeGroupData({...groupData,["selectedUser"]:{...allUser}})
    }else{
      changeGroupData({...groupData,["selectedUser"]:{...groupData.selectedUser,[ind]:true}})
    }
  }
  
   const sortChangeHandler = (e) =>{
     
            let duplicateUsersData = [...userData]
            duplicateUsersData.sort(function (a, b) {
             let param =  e.target.name==="ascending"?('' + a.name).localeCompare(b.name):('' + b.name).localeCompare(a.name)
             return param
          })
          setSortParams({ascending:!sortParams.ascending,descending:!sortParams.descending})
          changeUserData(duplicateUsersData)
   }

    const imageChangeHandler = (event) =>{
      changeGroupData({...groupData,["fileImage"]:URL.createObjectURL(event.target.files[0])})
     console.log(URL.createObjectURL(event.target.files[0]))
    }
    const inputChangeHandler = (e) =>{
         changeGroupData({...groupData,[e.target.name]:e.target.value})
    }

    const updateHandler = () =>{
      modalChange(false)
       toast.success("Successfully Updated ")
    }
    return (
        <div>
           <Dialog
           open={modalStatus}
           onClose={()=>closeModal(false)}
           maxWidth={"900px"}
           TransitionComponent={Transition}
           >
            <div className="modal_container" style={styles.modalContainer}>
               <span onClick={()=>closeModal(false)} className="close_icon"><CloseIcon /></span>
                <div className="header_container">
                    <h3>Edit Group</h3>
                </div>
                <div className="row">
                   <div className="col-md-6 left_section_main">
                       <div className="left_section">      
                         <img className="user_image" src={!groupData.fileImage?user:groupData.fileImage} alt="alt"/>
                        
                         <label style={styles.fileContent}>
                         <input  type="file"  accept="image/*" hidden onChange={imageChangeHandler} />
                           <CameraAltIcon style={{fontSize:19}} /> Group Logo
                           </label>
                          
                         </div>
                          <div style={{marginLeft:20}}> 
                            <form >
                            <TextField style={{marginBottom:20,display:"block"}} id="standard-basic" name="name" value={groupData["name"]} label="Name" onChange={inputChangeHandler} />
                            <TextField id="standard-basic-desc" name="description" value={groupData["description"]} label="Description" onChange={inputChangeHandler} />
                            </form>
                          </div>
                    </div>
                    <div className="col-md-6 center">
                        <div className="new-font" >
                          Sort By Name :
                        </div>
                        <div style={{marginTop:"20px"}}>
                          <span style={{display:"block"}}> 
                            <input type="radio" name="ascending"  onChange={sortChangeHandler} checked={sortParams["ascending"]} id="asc"/>
                            <label className="sort_atr" htmlFor="asc">Ascending</label>
                          </span>
                         <span>
                            <input type="radio" name="descending" onChange={sortChangeHandler} checked={sortParams["descending"]} id="desc"/>
                            <label className="sort_atr" htmlFor="desc">Descending</label>
                         </span>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-5 users_list_container">
                {userData&&userData.map((item,index)=>
                     <UserItems key={index} item={item} inde={index} selectedUser={groupData.selectedUser} markSelectBox={(ind)=>markSelectedBox(ind)} />
                    )}
                </div>
                <div className="footer">
                    <button className="footer_button" onClick={()=>updateHandler()} style={{background:"rgb(31 66 146)",color:"white"}}>Update</button>
                </div>
            </div>
           </Dialog>
        </div>
    )
}

export default ModalContainer

const styles={
    modalContainer:{
        height:"98vh",
        width:"900px",
        background:"#111111",
        position:"relative"
    },
    fileContent:{
        margin:"4px 0 17px 49px",
        fontSize:14,
        cursor:"pointer"
    }
}