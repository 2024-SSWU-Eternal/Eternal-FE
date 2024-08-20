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

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/announce' element={<Announe />} />
                <Route path='/announce/:detail' element={<AnnonceDetail />} />

                <Route path='/map' element={<Map />} />

                <Route path='/program' element={<Program />} />

                <Route path='/test' element={<Test />} />

                <Route path='/timetable' element={<Timetable />} />

                <Route path='/join' element={<Join />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App