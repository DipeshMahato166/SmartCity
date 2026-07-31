import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './redux/store'

import HomeLayout from './components/layouts/HomeLayout'
import AdminLayout from './components/layouts/AdminLayout'
import UserDashboardLayout from './components/layouts/UserDashboardLayout'
import ComingSoon from './components/common/ComingSoon'

import Herosec from './pages/Herosec'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

import AdminHomePage from './pages/admin/AdminHomePage'

import UserDashboardHome from './pages/user/UserDashboardHome'
import MyComplaints from './pages/user/MyComplaints'


import ComplaintPage from './pages/ComplaintPage'
import ComplaintDetailPage from './pages/user/ComplaintDetailPage'
import DepartmentLayout from './components/layouts/DepartmentLayout'
import DepartmentHomePage from './pages/department/DepartmentHomePage'
import DepartmentLogin from './pages/auth/DepartmentLogin'
import DepartmentComplaints from './pages/department/DepartmentComplaints'
import LocationTracking from './pages/department/LocationTracking'
import DepartmentProtectedRoute from './components/common/DepartmentProtectedRoute'
import AuthProtectedRoute from './components/common/AuthProtectedRoute'
import UserManagementPage from './pages/admin/UserManagementPage'
import ComplaintsPage from './pages/admin/ComplaintsPage'
import UserSettings from './components/user/UserSettings'
import EmergencyPage from './pages/EmergencyPage'
import NoticePage from './pages/NoticePage'
import NoticeDetailsPage from './pages/user/NoticeDetailsPage'
import PublicRoute from './components/common/PublicRoute'
import DepartmentPublicRoute from './components/common/DepartmentPublicRoute'
import NotFound from './pages/NotFound'
import DepartmentNoticePage from './pages/department/DepartmentNoticePage'
import AdminNoticePage from './pages/admin/AdminNoticePage'
import AdminDepartmentPage from './pages/admin/AdminDepartmentPage'
import NotificationPage from './pages/user/NotificationPage'
import ServicePage from './pages/ServicePage'
import GovernmentPage from './pages/GovernmentPage'
import InstallPWAButton from './components/common/InstallPWAButton'




const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            {/* Public Routes */}
            <Route index element={<Herosec />} />

            {/* Guest Only */}
            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>

            <Route path="emergency" element={<EmergencyPage />} />
            <Route path="notices" element={<NoticePage />} />
            <Route path="notices/:id" element={<NoticeDetailsPage />} />
            <Route path='services' element={<ServicePage />} />
            <Route path='government' element={<GovernmentPage />} />


            {/* Protected Route */}
            <Route element={<AuthProtectedRoute allowedRoles={["user"]} />}>
              <Route path="complaint" element={<ComplaintPage />} />
            </Route>
          </Route>

          {/* Citizen (user) Dashboard */}
          <Route element={<AuthProtectedRoute allowedRoles={["user"]} />}>
            <Route path='/user' element={<UserDashboardLayout />}>
              <Route index element={<UserDashboardHome />} />
              <Route path='complaints' element={<MyComplaints />} />
              <Route path='notifications' element={<NotificationPage />} />
              <Route path='settings' element={<UserSettings />} />
              <Route path='complaints/:complaintId' element={<ComplaintDetailPage />} />
            </Route>
          </Route>

          {/* Admin Dashboard */}
          <Route element={<AuthProtectedRoute allowedRoles={["admin"]} />}>
            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<AdminHomePage />} />
              <Route path='users' element={<UserManagementPage />} />
              <Route path='departments' element={<AdminDepartmentPage />} />
              <Route path='notices' element={<AdminNoticePage />} />
              <Route path='events' element={<ComingSoon title="Events" />} />
              <Route path='complaints' element={<ComplaintsPage />} />
            </Route>
          </Route>

          {/* Department Login */}
          <Route element={<DepartmentPublicRoute />}>
            <Route path="department/login" element={<DepartmentLogin />} />
          </Route>

          {/* Department Dashboard */}
          <Route element={<DepartmentProtectedRoute />}>
            <Route path='/department' element={<DepartmentLayout />}>
              <Route index element={<DepartmentHomePage />} />
              <Route path='complaints' element={<DepartmentComplaints />} />
              <Route path='location' element={<LocationTracking />} />
              <Route path='notices' element={<DepartmentNoticePage />} />
            </Route>
          </Route>

          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* PWA Web App */}
        <InstallPWAButton />

      </BrowserRouter>
    </Provider >
  )
}

export default App
