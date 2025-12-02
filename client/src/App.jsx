import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import MyListings from './pages/MyListings'
import Marketplace from './pages/Marketplace'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'
import NavBar from './components/NavBar'

const App = () => {

  const {pathname} = useLocation();  // location nikalne ke liye (react-router-dom)

  return (
    <div>

      {/* admin page/path pr navbar hidden rhega baki pr dikhega */}
      {!pathname.includes('admin') && <NavBar />}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/marketplace' element={<Marketplace />}/>
        <Route path='/my-listings' element={<MyListings />}/>
        <Route path='/listing/:listingId' element={<ListingDetails />}/>
        <Route path='/create-listing' element={<ManageListing />}/>
        <Route path='/edit-listing/:id' element={<ManageListing />}/>
        <Route path='/messages' element={<Messages />}/>
        <Route path='/my-orders' element={<MyOrders />}/>
        <Route path='/loading' element={<Loading />}/>
      </Routes>
    </div>
  )
}

export default App