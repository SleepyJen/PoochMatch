import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import './UserTabs.css'
import Dashboard from '../Dashboard/Dashboard'
import DogProfile from '../DogProfile/DogProfile'
import UserProfile from '../UserProfile/UserProfile'




function UserTabs() {
  return (
    <div className="component">
      <Tabs className="dashboardTabs" defaultActiveKey="dashboard" id="uncontrolled-tabs">
        <Tab eventKey="dashboard" title="Dashboard">
          <div>
            <Dashboard />
          </div>
        </Tab>
        {/* <Tab eventKey="messages" title="Messages">
          <div>
            <Messages />
          </div>
        </Tab> */}
        <Tab eventKey="userSettings" title="Account Settings">
          <UserProfile />
        </Tab>
        <Tab eventKey="petInformation" title="Pet Information">
          <DogProfile />
        </Tab>
      </Tabs>
    </div>
  );
}



export default UserTabs