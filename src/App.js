import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import Main from './components/Section/Main'
import Announe from './components/Announce/Announe'
import Map from './components/Map/Map'
import Program from './components/Program/Program'
import Test from './components/Test/Test'
import Timetable from './components/TimeTable/Timetable'
import Login from './components/Login/Login'
import Join from './components/User/Join/Join'

const App = () => {
    const location = useLocation();

    return (
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={ <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeInOut"
                            }}
                            >
                                <Main />
                            </motion.div>}
                             />

                        <Route path='/announce/:manager' element={ <Announe /> } />

                        <Route path='/map' element={<Map />} />
                        <Route path='/program' element={<Program />} />

                        <Route path='/test' element={<Test /> } />

                        <Route path='/timetable' element={<Timetable />} />

                        <Route path='/join' element={
                            // 투명도 조절 (로그인 -> 회원가입)
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeInOut"
                            }}
                            >
                                <Join />
                            </motion.div>}
                             />

                        <Route path='/login' element={
                            // 투명도 조절(회원가입 -> 로그인시)
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeInOut"
                            }}
                            >
                                <Login />
                            </motion.div>
                            } />
                </Routes>
            </AnimatePresence>
    )
}

export default App