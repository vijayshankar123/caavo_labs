import React from 'react'
import "./UserItems.scss"
import CheckIcon from '@material-ui/icons/Check';

const UserItems = ({item,inde,markSelectBox,selectedUser}) => {
    const checkBox=()=>{
        markSelectBox(item.name)
    }
    return (
        <div className="col mb-3">
            
             <img className="user_images" src={item.Image} alt="alt" onClick={checkBox}/>
             {selectedUser[item.name]&&<CheckIcon className="checked_icon"/>}
             <p className="name_header" style={styles.name}>{item.name}</p>
        </div>
    )
}

export default UserItems

const styles={
    name:{position:"absolute",padding:"5px",color:"white", bottom:-17,width:143,background:"#3570f5"
    ,textAlign:"center",borderBottomLeftRadius:10,borderBottomRightRadius:10}
}