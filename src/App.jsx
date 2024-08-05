import Login from './pages/Login'
import {Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Users from './pages/Users'
import Trash from './pages/Trash'
import TaskDeatils from './pages/TaskDetails'
import { Toaster } from 'sonner'
import {  useSelector } from "react-redux";
import Sidebar from './components/Sidebar'
import ThreeDMenagment from './pages/ThreeDMenagment'

function Layout() {
  const { user } = useSelector((state) => state.auth);
    const location = useLocation()

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar/>
      </div>
      {/*<Mobile Sidebar/>*/}
       <div className='flex-1 overflow-y-auto'>
        {/*<Navbar/>*/}
        <div className='p-4 2xl:px-20'>

        <Outlet />
        </div>
        </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} />
  )
}

function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/to-do/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDeatils />} />
          <Route path='/3d-menagment' element={<ThreeDMenagment />} />
        </Route>
        <Route path='/log-in' element={<Login />} />
        
      </Routes>
      <Toaster richColors={true} />
    </main>
  )

}
export default App
