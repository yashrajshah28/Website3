import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const Logout = () => {

    // promises

    const history = useHistory();

    useEffect(() => {
        fetch('/logout', {
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)  => {
            history.push('/login', {replace: true});
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

  return (
    <>
      <h1>Logout Page</h1>
    </>
  )
}

export default Logout
