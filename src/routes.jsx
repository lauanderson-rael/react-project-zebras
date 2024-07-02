import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Login from './Pages/Login/index.jsx';
import { SignUp } from './Pages/SignUp/index.jsx';
import PageError404 from './Pages/PageError404/index.jsx';
import RulesPage from './Pages/Rules/index.jsx';

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign' element={<SignUp />} />
                <Route path='/rules' element={<RulesPage/>} />
                <Route path='*' element={<PageError404/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
