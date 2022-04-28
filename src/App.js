import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollectionForm from './pages/CollectionForm';
import ReviewForm from './pages/ReviewForm';
import ForgotPassword from './pages/ForgotPassword'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import PasswordConfirm from './pages/confirmation/PasswordConfirm';
import SignupConfirm from './pages/confirmation/SignupConfirm';
import Analytics from './pages/Analytics';
import LoginConfirm from './pages/confirmation/LoginConfirm';
import Dash from './pages/Dash';
import AdminRoute from './pages/routes/AdminRoute';
import IsAdminRoute from './pages/routes/IsAdminRoute';
import CollectorRoute from './pages/routes/CollectorRoute';
import AlreadyLoggedin from './pages/confirmation/AlreadyLoggedin';
import LogoutConfirm from './pages/confirmation/LogoutConfirm';
import Home from './pages/Home';
import ReportWaste from './ReportWaste/pages/ReportWaste';
import About from './ReportWaste/pages/About';
import Blog from './ReportWaste/pages/Blog';
import Blog1 from './ReportWaste/pages/Blog1';
import Foucet from './ReportWaste/pages/Foucet';
import Rewards from './ReportWaste/pages/Rewards';
import MakeComplain from './ReportWaste/pages/MakeComplain';
import TrackComplain from './ReportWaste/pages/TrackComplain';
import PrivacyPolicy from './ReportWaste/pages/PrivacyPolicy';
import WhatWeDo from './ReportWaste/pages/WhatWeDo';
import Statistic from './ReportWaste/pages/Statistic';
import RwLogin from './ReportWaste/admin/RwLogin';
import Admin from './ReportWaste/admin/Admin';
import Complains from './ReportWaste/admin/Complains';
import Redeemed from './ReportWaste/admin/Redeemed';
import Customers from './ReportWaste/admin/Customers';



function App() {

  return (
      <div>
        
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dash" exact component={Dash} />
            <CollectorRoute path="/collectionform" exact component={CollectionForm} />
            <AdminRoute path="/reviewform" component={ReviewForm} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/passwordconfirm" exact component={PasswordConfirm} />
            <Route path="/signupconfirm" exact component={SignupConfirm} />
            <Route path="/loginconfirm" exact component={LoginConfirm} />
            <Route path="/alreadyloggedin" exact component={AlreadyLoggedin} />
            <Route path="/login" exact component={Login} />
            <Route path="/analytics" exact component={Analytics} />
            <Route path="/logoutconfirm" exact component={LogoutConfirm} />
            <Route path="/ReportWaste" exact component={ReportWaste} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog1" exact component={Blog1} />
            <Route path="/foucet" exact component={Foucet} />
            <Route path="/rewards" exact component={Rewards} />
            <Route path="/makec" exact component={MakeComplain} />
            <Route path="/trackc" exact component={TrackComplain} />
            <Route path="/privacyp" exact component={PrivacyPolicy} />
            <Route path="/statistic" exact component={Statistic} />
            <Route path="/whatwedo" exact component={WhatWeDo} />
            <Route path="/rwlogin" exact component={RwLogin} />
            <IsAdminRoute path="/admin" component={Admin} />
            <IsAdminRoute path="/redeemed" component={Redeemed} />
            <IsAdminRoute path="/complains" component={Complains} />
            <IsAdminRoute path="/customers" component={Customers} />
          </Switch>
        </Router>

        {/* <Footer /> */}
      </div>
  );
}

export default App;
