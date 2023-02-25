import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {GitHubProvider} from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './component/layout/Alert';
import User from './pages/User';

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/user/:login" element={<User/>}/>
                <Route exact path="/notfound" element={<NotFound/>}/>
                <Route exact path="/*" element={<NotFound/>}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
    
  );
}

export default App;
