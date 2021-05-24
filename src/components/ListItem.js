import React from 'react';

const ListItem = ({todo, id}) => {
    const Click = () =>{
        console.log(id)
    }

    return ( 
        <>
        <li onClick={Click}>{todo}</li>

        </>
    )
}



export default ListItem
