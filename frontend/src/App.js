import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Login from "./components/auth/login/index";
import SignUp from "./components/auth/signUp/index";
import AddActivities from "./components/Activities/addActivities";
import AddTravelPlans from "./components/travel_Plans/index";
import AddPerferences from "./components/preferences/addPreferences";
import GetAllActivities from "./components/Activities/getAllActivities";
import GetAllTravel from "./components/travel_Plans/getAllTravel";
import ContactUs from "./components/contactUs";
import GetTravelById from "./components/travel_Plans/getTravelById";
import Footer from "./components/footer";
import GetActivityById from "./components/Activities/getActivityById";
import Profile from "./components/profile";
import CountryList from "./components/Api/CountryList";
import Album from "./components/Album/Album";
import ImageGrid from "./components/Album/showAlbum";
import Modal from "./components/Album/Modal";
import Matching from "./components/preferences/matching";
import ProfileActivities from "./components/profile/profileActivities";
import ProfilePlans from "./components/profile/profilePlans";
import GetMyPreferences from "./components/preferences/ShowPreference";
import ProfileUserActivities from "./components/usersProfile/userActivitiesProF";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./components/usersProfile/userProfile";
import ProfileUserPlans from "./components/usersProfile/userPlansProf";
import GetUserPreferences from "./components/preferences/showUserPreference";
import ImageUserGrid from "./components/Album/showUserAlbum";
import './App.css'
import EditMyProfile from "./components/profile/editProfile";
import Home from "./Pages";
import ShowFriends from "./components/profile/showFriend";
import Chat from "./components/chat/user";

const App = () => {
  const history = useHistory()
  const state = useSelector((state) => {
    return {
      photo: state.photo.photo
    };
  });
 
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home/>}/>
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <SignUp />} />
      <Route exact path="/contactUs" render={() => <ContactUs />} />
      <Route exact path="/plans" component={GetAllTravel} />
      <Route exact path="/travelPlans/:id" component={GetTravelById} />
      <Route exact path="/activities" component={GetAllActivities} />
      <Route exact path="/addActivity" render={() => <AddActivities />} />
      <Route exact path="/addTravel" render={() => <AddTravelPlans />} />
      <Route exact path="/preferences" render={() => <AddPerferences />} />
      <Route exact path="/profile/activities" render={() => <ProfileActivities />} />
      <Route exact path="/profile/plans" render={() => <ProfilePlans />} />
      <Route exact path="/profile/preferences" render={() => <GetMyPreferences />} />
      <Route exact path="/users/user/:id" render={() => <UserProfile />} />
      <Route exact path="/ProfileUsers/activities/:id" render={() => <ProfileUserActivities />} />
      <Route exact path="/ProfileUsers/plans/:id" render={() => <ProfileUserPlans />} />
      <Route exact path="/profileUser/preferences/:id" render={() => <GetUserPreferences />} />
      <Route exact path="/photoAlbum" render={() => <ImageGrid />} />
      <Route exact path="/userphotoAlbum/:id" render={() => <ImageUserGrid />} />
      <Route exact path="/profile/showFriend" render={() => <ShowFriends />} />
      <Route exact path="/match" render={() => <Matching /> } />
      <Route exact path="/chat/:id" render={()=><Chat/>} />
     
      <Route
        exact
        path="/activities/activity/:id"
        component={GetActivityById}
      />
      <Route exact path="/profile" render={() => <Profile />} />
      <Route exact path="/profile/info" render={() => <EditMyProfile />} />

      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <AddActivities/> */}
      {/* <AddTravelPlans /> */}
      {/* <AddPerferences /> */}
      {/* <Activities /> */}
      {/* <GetAllTravel /> */}
      {/* <CountryList /> */}
      {/* <Album /> */}
      {/* <ImageGrid /> */}
      {state.photo && <Modal />}
      {/* <Footer /> */}
      {/* <Chat/> */}
    </div>

  );
};

export default App;
