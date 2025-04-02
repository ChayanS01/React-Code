import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{     // this is a default method in react for context API
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>     
        {children}      
        </UserContext.Provider> /* this is a default method in react for context API */
        /* {children} this is acting like a prop helping other components to be passed as prop to the provider to render inside it */
    )
}
export default UserContextProvider;