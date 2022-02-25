import React, {useEffect} from 'react';
import axios from "axios";

function Users(){

    const url = "http://localhost:8080/api/users"
    const [userlist , setUsersList ] = React.useState([])


    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setUsersList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const allUsersListing = userlist.map( (user) => {
        return <div className='users-listing__listing' key={user.id}>
                    <div>{user.firstname} {user.surname}</div>
                    <div>{user.email}</div>
                    <div>{user.telephone}</div>
                    <div>{user.gender}</div>
                    <div>{user.dob}</div>
                    <div>{user.comments}</div>
                </div>
    })
    
    return(
        <div className="user-form-wrap users-listing">
            <div className='users-listing__row heading'>
                <div>User</div>
                <div>Email</div>
                <div>Telephone</div>
                <div>Gender</div>
                <div>DOB</div>
                <div>Comments</div>
            </div>
            {allUsersListing}
        </div>
    )
}

export default Users