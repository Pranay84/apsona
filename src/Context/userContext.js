import React from "react";

const UserContext = React.createContext({
    emails: undefined,
    getEmails: () => {},
})

export default UserContext