import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './Pages/SignUp/index.jsx';
import App from './App.jsx';

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route exact path='/sign' element={<SignUp />} />
            </Routes>
        </Router>
    )
}


export default AppRoutes
