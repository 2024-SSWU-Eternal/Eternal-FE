import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import RouteTransition from './RouteTransition.tsx';
import Main from './components/Section/Main';
import Announe from './components/Announce/Announe';
import Map from './components/Map/Map';
import Program from './components/Program/Program';
import Test from './components/Test/Test';
import Timetable from './components/TimeTable/Timetable';
import Login from './components/Login/Login';
import Join from './components/User/Join/Join';

const App = () => {
    const location = useLocation();

    return (
        <RouteTransition location={location}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Main location={location} />} />
                <Route path='/announce/:manager' element={<Announe location={location} />} />
                <Route path='/map' element={<Map location={location} />} />
                <Route path='/program' element={<Program location={location} />} />
                <Route path='/test' element={<Test location={location} />} />
                <Route path='/timetable' element={<Timetable location={location} />} />
                <Route path='/join' element={<Join location={location} />} />
                <Route path='/login' element={<Login location={location} />} />
            </Routes>
        </RouteTransition>
    );
};

export default App;