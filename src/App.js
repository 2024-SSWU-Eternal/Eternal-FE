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
import Sponsor from './components/ETC/Sponsor'
import Making from './components/ETC/Making'
import Loading from './components/Loading/Loading'
import FoodInfo from './components/FoodInfo/FoodInfo'
import Reservation from './components/ETC/Reservation'
import Booth from './components/Booth/Booth'
import Stamp from './components/Stamp/Stamp'
import StampLogin from './components/Stamp/StampLogin'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/announce/:manager' element={<Announe />} />
                <Route path='/announce/:detail/:manager' element={<AnnonceDetail />} />
                <Route path='/announce/write' element={<AnnonceWrite />} />
                <Route path='/announce/write/:modify' element={<AnnonceWrite />} />

                <Route path='/foodinfo' element={<FoodInfo />} />

                <Route path='/map' element={<Map />} />

                <Route path='/program' element={<Program />} />

                <Route path='/test' element={<Test />} />
                <Route path='/testing' element={<Testing />} />
                <Route path='/testresult/:ending' element={<TestEnding />} />

                <Route path='/timetable' element={<Timetable />} />

                <Route path='/manager' element={<Manger />} />
                <Route path='/join' element={<Join />} />
                <Route path='/login' element={<Login />} />

                <Route path='/sponsor' element={<Sponsor />} />
                <Route path='/making' element={<Making />} />
                <Route path='/reservation' element={<Reservation />} />
                
                <Route path='/loading' element={<Loading />} />
                <Route path='/booth' element={<Booth />} />

                <Route path="/stamp/:stampNum" element={<Stamp />} />
                <Route path="/stamp" element={<Stamp />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App