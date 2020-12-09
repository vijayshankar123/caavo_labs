import React from 'react'
import user from "../img/user_avatar1.jpg"
import "./HomeItem.scss"
import EditIcon from '@material-ui/icons/Edit';

//group card component
const HomeItem = ({groupData,modalChange}) => {
    return (
        <div className="div_container">
           
            <div className="item_container" onClick={()=>modalChange(true)}>
                <p className="edit_icon">edit {" "}
                <EditIcon style={{fontSize:"19px"}} />
                </p>
                <img className="img_group" src={groupData.fileImage?groupData.fileImage:user} alt="img"/>
                
                <div className="footer_div">
                    <p className="group_name">{groupData.name.toUpperCase()}</p>
                    <p className="group_description">{groupData.description}</p>
                    <p className="members_group">Members : {Object.keys(groupData.selectedUser).length===0?"None":Object.keys(groupData.selectedUser)
                    .map((item,inde)=>item+(inde===Object.keys(groupData.selectedUser).length-1?"":", "))}</p>
                 </div>
            
            </div>
        </div>
    )
}

export default HomeItem
