import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Profile from './Components/Pages/profile';
import SideBar from './Components/Globals/SideBar';
import Message from './Components/Pages/message';
import Header from './Components/Globals/Header';
import MainArea from './Components/Pages/MainArea';
import Events from './Components/Pages/events';

function App() {
return (
<div className="App">

<div className="container-fluid">
<div className="col-lg-9">
<Header/>
<Switch>
<Route path="/" component={MainArea} exact />
<Route path="/profile" component={Profile} exact />
<Route path="/message" component={Message} exact />
<Route path="/events" component={Events} exact />
</Switch>
</div>

<div className="col-lg-3">
<SideBar/>
</div>

</div>




</div>
);
}

export default App;
