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

const App = () => {
    const location = useLocation();

    return (
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Main />} />

                        <Route path='/announce/:manager' element={
                            <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ 
                                duration: 0.4,
                                ease: "easeInOut" 
                            }}
                            >
                                <Announe />
                            </motion.div>
                        } />

                        <Route path='/announce/:detail/:manager' element={<AnnonceDetail />} />
                        <Route path='/announce/write' element={<AnnonceWrite />} />
                        <Route path='/announce/write/:modify' element={<AnnonceWrite />} />

                        <Route path='/foodinfo' element={<FoodInfo />} />

                        <Route path='/map' element={<Map />} />
                        <Route path='/program' element={<Program />} />

                        <Route path='/test' element={
                            <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: 0 }}
                            transition={{ 
                                duration: 0.4,
                                ease: "easeInOut" 
                            }}
                            >
                                <Test />
                            </motion.div>
                        } />
                        <Route path='/testing' element={<Testing />} />
                        <Route path='/testresult/:ending' element={<TestEnding />} />

                        <Route path='/timetable' element={
                            <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeInOut"
                            }}
                            >
                                <Timetable />
                            </motion.div>
                            } />

                        <Route path='/manager' element={<Manger />} />
                        <Route path='/join' element={
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ x: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                ease: "easeInOut"
                            }}
                            >
                                <Join />
                            </motion.div>}
                             />
                        <Route path='/login' element={
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: 0 }}
                                transition={{ 
                                    duration: 0.4, 
                                    ease: "easeInOut"
                                }}
                            >
                            <Login />
                            </motion.div>
                            } />

                        <Route path='/sponsor' element={<Sponsor />} />
                        <Route path='/making' element={<Making />} />
                        <Route path='/reservation' element={<Reservation />} />
                        
                        <Route path='/loading' element={<Loading />} />
                </Routes>
            </AnimatePresence>
    )
}

export default App