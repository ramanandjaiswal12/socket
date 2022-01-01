import io from 'socket.io-client'
import React, { useEffect, useState } from "react";
function Socket() {

    useEffect(() => {
        io.connect()
        // fetch("/", (req, res) => {
        //     console.log(res.data)

        // })

    }, []);

    return (

        <div className="main-login" >
            <div>Socket Page</div>

        </div>
    )
}
export default Socket