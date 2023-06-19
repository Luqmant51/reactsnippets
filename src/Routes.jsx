import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomeFour from "./components/pages/HomeFour";
import AboutOne from "./components/pages/AboutOne";
import PricingOne from "./components/pages/PricingOne";
import SpeakersOne from "./components/pages/SpeakersOne";
import ScheduleOne from "./components/pages/ScheduleOne";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ComingSoon from "./components/pages/ComingSoon";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Sponsor from "./components/pages/Sponsor";

// Conditionally render Navigation
const renderNavigation = () => {
    if (!(window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/coming-soon' || window.location.pathname === '/error-404')){
        return <Navigation />;
    }
}

const AppRouter = () => {
    return (
        <Router>
            {renderNavigation()}
            <Switch>
                <Route path="/" exact component={HomeFour} />
                <Route path="/about" exact component={AboutOne} />
                <Route path="/pricing" exact component={PricingOne} />
                <Route path="/speakers" exact component={SpeakersOne} />
                <Route path="/schedule" exact component={ScheduleOne} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/coming-soon" exact component={ComingSoon} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/sponsors" exact component={Sponsor} />
                <Route path="/error-404" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;