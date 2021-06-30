import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import SignUp from "./components/auth/signUp/index";
import AddActivities from "./components/Activities/addActivities";
import AddTravelPlans from "./components/travel_Plans/index";
import AddPerferences from "./components/preferences/addPreferences";
import Activities from "./components/Activities/getActivities";
import Navigation from "./components/navigation";
import GetAllTravel from "./components/travel_Plans/getAllTravel";
import ContactUs from './components/contactUs'
import GetTravelById from "./components/travel_Plans/getTravelById"

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/login" render={() => <Login />} />
	  <Route exact path="/register" render={() => <SignUp />} />
    <Route exact path="/contactUs" render={()=><ContactUs/>}/>
    <Route exact path="/plans" component={GetAllTravel}/>
    <Route exact path="/travelPlans/:id" component={GetTravelById} />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <AddActivities/> */}
      {/* <AddTravelPlans /> */}
      {/* <AddPerferences /> */}
      {/* <Activities /> */}
    </div>
  );
};

export default App;
