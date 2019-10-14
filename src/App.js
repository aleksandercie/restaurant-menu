import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Title from './Components/Title/Title';
import AboutView from './Components/AboutView/AboutView';
import ContactView from './Components/ContactView/ContactView';
import Navigation from './Components/Navigation/Navigation';
import AppetizersListWrapper from './Components/AppetizersListWrapper/AppetizersListWrapper';
import EntreesListWrapper from './Components/EntreesListWrapper/EntreesListWrapper';
import DessertsListWrapper from './Components/DessertsListWrapper/DessertsListWrapper';


const App = () => {
  return (
      <BrowserRouter>
        <>
          <Title />
          <Navigation/>
          <Switch>
            <Route exact path="http://aleksandercie.github.io/restaurant-menu/" component={AboutView}/>
            <Route path="http://aleksandercie.github.io/restaurant-menu/appetizers" component={AppetizersListWrapper}/>
            <Route path="http://aleksandercie.github.io/restaurant-menu/entrees" component={EntreesListWrapper}/>
            <Route path="http://aleksandercie.github.io/restaurant-menu/desserts" component={DessertsListWrapper}/>
            <Route path="http://aleksandercie.github.io/restaurant-menu/contact" component={ContactView}/>
          </Switch>
        </>
      </BrowserRouter>
  )
}


export default App;
