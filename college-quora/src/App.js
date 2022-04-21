import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from './MyComponents/Login';
import { SignUp } from "./MyComponents/SignUp";
import Home from './MyComponents/Home';
import Profile from './MyComponents/Profile';
import FullPost from './MyComponents/FullPost';
import FullPostPage from './MyComponents/FullPostPage';
import MyProfile from './MyComponents/MyProfile';
import { toast } from "react-toastify";


import 'react-toastify/dist/ReactToastify.css';
import NewPost from './MyComponents/NewPost';
import Followings from './MyComponents/Followings';
import MyFollowings from './MyComponents/MyFollowings';
import MyFollowers from './MyComponents/MyFollowers';

function AppLoad(){
    localStorage.setItem("url","http://localhost:5000/");
}
toast.configure()
function App() {

  AppLoad();


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />}/>
      <Route path="newpost" element={<NewPost />}/>
      <Route path="myprofile" element={<MyProfile />}/>
      <Route path="MyFollowings" element={<MyFollowings />}/>
      <Route path="MyFollowers" element={<MyFollowers />}/>
    </Routes>
    </>
  );
}

export default App;
