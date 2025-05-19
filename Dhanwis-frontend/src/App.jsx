import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'
import DelayedSuspense from './components/DelayedSuspense'

const Layout = lazy(() => import('./layout/Layout'))
const OurWork = lazy(() => import('./pages/OurWork'))
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Careers = lazy(() => import('./pages/Careers'))
const Blogs = lazy(() => import('./pages/Blogs'))

const AdminLayout = lazy(() => import('./layout/Admin/AdminLayout'))
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'))
const AddPortfolio = lazy(() => import('./pages/Admin/AddPortfolio'))
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'))
const PrivateRoute = lazy(() => import('./components/Admin/ProtectRoute'))
const PortfolioTable = lazy(() => import('./components/Admin/PortfolioTable'))

import { AuthProvider } from './context/AminContext/AuthContext'
import { PortfolioProvider } from './context/AminContext/PortfolioContext'
import AddCareer from './pages/Admin/AddCareer'
import CareerTable from './components/Admin/Careertable'
import EditCareer from './pages/Admin/EditCareer'
import EditPortfolio from './pages/Admin/EditPortfolio'
function App() {
  return (
    <div>
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
  <DelayedSuspense fallback={<Loader />} delay={1000}>
        <PortfolioProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="ourworks" element={<OurWork />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
              <Route path="careers" element={<Careers />} />
              <Route path="blog" element={<Blogs />} />
            </Route>
          </Routes>
        </PortfolioProvider>

        <PortfolioProvider>
          <AuthProvider>
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route element={<PrivateRoute />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="viewportfolio" element={<PortfolioTable />} />
                  <Route path="addportfolio" element={<AddPortfolio />} />
                  <Route path="addcareer" element={<AddCareer />} />
                  <Route path="viewcareer" element={<CareerTable />} />
                  <Route path="editcareer/:id" element={<EditCareer />} />
                  <Route path="editportfolio/:id" element={<EditPortfolio />} />

                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </PortfolioProvider>
       </DelayedSuspense>
</Suspense>
    </div>
  )
}

export default App
