import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './Pages/SignUp/index.jsx';
import App from './App.jsx';
import PageError404 from './Pages/PageError404/index.jsx';

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route path='/sign' element={<SignUp />} />
                <Route path='*' element={<PageError404/>} />
            </Routes>
        </Router>
    )
}


export default AppRoutes
