import {useState} from "react";
import logo from "../../../resources/Tlogo.png";

export default function Home() {

    return (
        <>
        <img className='logo' src={logo} alt="logo"/>
        <h1>Home</h1>
        </>
    )
}