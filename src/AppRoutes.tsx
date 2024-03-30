import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'
import ManageRestaurant from './pages/ManageRestaurant'
import SearchPage from './pages/SearchPage'
import DetailsPage from './pages/DetailsPage'
import OrderStatusPage from './pages/OrderStatusPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
        <Route path='/search/:city' element={<Layout showHero={false}><SearchPage/></Layout> }/>
        <Route path='/detail/:restaurantId' element={<Layout showHero={false}><DetailsPage/></Layout> }/>
        <Route path="/" element={<Layout showHero={true}><HomePage/></Layout>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/order-status" element={<Layout><OrderStatusPage/></Layout>}/>
        <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>}/>
        <Route path="/manage-restaurant" element={<Layout><ManageRestaurant/></Layout>}/>
        </Route>
        <Route path="*" element={<Navigate to={"/"}/>}/>
    </Routes>
  )
}

export default AppRoutes
