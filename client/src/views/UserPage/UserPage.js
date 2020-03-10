import React from 'react'
import './UserPage.css'

import UserTabs from './components/UserTabs/UserTabs.js'
import Header from '../../components/Header/Header'
function UserPage() {

  return (
    <main className="component">
      {/* <Header /> */}
      <UserTabs />

    </main>
  );

}



export default UserPage