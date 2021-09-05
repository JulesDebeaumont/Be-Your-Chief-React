import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';

export function BoardingPage()
{
    return(
        <>
            <h1>Welcome to Be Your Chef</h1>
            <h3>Do you have account?</h3>
            <Link to={"/login"}><Button>Sign-In</Button></Link>
            <h3>Do you want to have account!?</h3>
            <Button>Yes I Love too</Button>
            
        </>
    );
}
export default BoardingPage;