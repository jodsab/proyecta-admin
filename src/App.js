/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./presentation/pages/Rtl";
import Tables from "./presentation/pages/Tables";
import Billing from "./presentation/pages/Billing";
import Rtl from "./presentation/pages/Rtl";
import Profile from "./presentation/pages/Profile";
import SignUp from "./presentation/pages/SignUp";
import SignIn from "./presentation/pages/SignIn";
import Main from "./presentation/components/layout/Main";
import MultiInsertPage from "./presentation/pages/MultiInsert";
import WhatsappPage from "./presentation/pages/Whatsapp";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Routes from "./presentation/shared/Routes";

function App() {
  const {
    dashboard,
    tables,
    billing,
    rtl,
    timesheet,
    tasks,
    repositories,
    organization,
    rolesAndPermissions,
    payment,
    integrations,
    multiInsert,
    whatsapp,
    profile,
    signUp,
    signIn,
    error,
  } = Routes;
  return (
    <div className="App">
      <Switch>
        <Route path={signUp.home} exact component={SignUp} />
        <Route path={signIn.home} exact component={SignIn} />
        <Main>
          <Route exact path={dashboard.home} component={Home} />
          <Route exact path={tables.home} component={Tables} />
          <Route exact path={billing.home} component={Billing} />
          <Route exact path={rtl.home} component={Rtl} />
          <Route exact path={profile.home} component={Profile} />
          <Route exact path={multiInsert.home} component={MultiInsertPage} />
          <Route exact path={whatsapp.home} component={WhatsappPage} />
          {/* <Redirect to={error.home} /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
