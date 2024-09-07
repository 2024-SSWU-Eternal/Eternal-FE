import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Announe from './components/Announce/Announe'
import Map from './components/Map/Map'
import Program from './components/Program/Program'
import Test from './components/Test/Test'
import Timetable from './components/TimeTable/Timetable'
import Join from './components/User/Join/Join'
import AnnonceDetail from './components/Announce/AnnonceDetail'
import Manger from './components/Manager/Manger'
import AnnonceWrite from './components/Announce/AnnonceWrite'
import Testing from './components/Test/Testing'
import TestEnding from './components/Test/TestEnding'
import Login from './components/Login/Login'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/announce/:manager' element={<Announe />} />
                <Route path='/announce/:detail/:manager' element={<AnnonceDetail />} />
                <Route path='/announce/write' element={<AnnonceWrite />} />
                <Route path='/announce/write/:modify' element={<AnnonceWrite />} />

                <Route path='/map' element={<Map />} />

                <Route path='/program' element={<Program />} />

                <Route path='/test' element={<Test />} />
                <Route path='/testing' element={<Testing />} />
                <Route path='/testresult/:ending' element={<TestEnding />} />

                <Route path='/timetable' element={<Timetable />} />

                <Route path='/join' element={<Join />} />

                <Route path='/manager' element={<Manger />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App