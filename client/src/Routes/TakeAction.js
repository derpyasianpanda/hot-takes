import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleTake from "../Components/SingleTake";
import Errors from "./Errors";
import TakeCreator from "../Components/TakeCreator";
import TakeEditor from "../Components/TakeEditor";

const TakeAction = ({ match }) => {
    return (
        <Switch>
            <Route path="/takes/view/:id" component={SingleTake} />
            <Route path="/takes/edit/:id" component={TakeEditor} />
            <Route path="/takes/create" component={TakeCreator} />
            <Route component={Errors} />
        </Switch>
    );
};

export default TakeAction;
