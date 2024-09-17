import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Section/Main';
import Announe from './components/Announce/Announe';
import Map from './components/Map/Map';
import Program from './components/Program/Program';
import Test from './components/Test/Test';
import Timetable from './components/TimeTable/Timetable';
import Login from './components/Login/Login';
import Join from './components/User/Join/Join';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/announce/:manager' element={<Announe />} />
                <Route path='/map' element={<Map />} />
                <Route path='/program' element={<Program />} />
                <Route path='/test' element={<Test />} />
                <Route path='/timetable' element={<Timetable />} />
                <Route path='/join' element={<Join />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;