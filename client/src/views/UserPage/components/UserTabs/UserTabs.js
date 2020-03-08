import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import './UserTabs.css'
import Dashboard from '../Dashboard/Dashboard'
import DogProfile from '../DogProfile/DogProfile'
import UserProfile from '../UserProfile/UserProfile'
import DogMatches from '../DogMatches/DogMatches'



function UserTabs() {
  return (
    <div className="component">
      <Tabs className="dashboardTabs" defaultActiveKey="dogMatches" id="uncontrolled-tabs">
        <Tab eventKey="dogMatches" title="Dog Matches">
          <DogMatches />
        </Tab>

        <Tab eventKey="dashboard" title="Dashboard">
          <div>
            <Dashboard />
          </div>
        </Tab>

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