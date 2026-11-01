import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Exercises from './pages/Exercises';
import Programs from './pages/Programs';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import { AppRoute } from './const/const';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Welcome />} />
        <Route path={AppRoute.LOGIN} element={<Login />} />
        <Route element={<Layout />}>
          <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
          <Route path={AppRoute.EXERCISES} element={<Exercises />} />
          <Route path={AppRoute.PROGRAMS} element={<Programs />} />
          <Route path={`${AppRoute.PROGRAMS}/:programId`} element={<Programs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
