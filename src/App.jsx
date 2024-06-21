import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={'Home'} />
                    <Route path='/about' element={'about'} />
                    <Route path='/characters' element={'characters'} />
                    <Route path='/story' element={'story'} />
                </Routes>
            </Router>

        </main>
    )
}

export default App