import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import AddCountry from "./AddCountry";

function Routes() {


    return (
        <Switch>
            <Route path="/" exact render={()=><Home />} />
            <Route path="/country" render={()=><AddCountry />} />
        </Switch>
    )
}

export default Routes;