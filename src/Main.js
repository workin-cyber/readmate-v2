import { Route, Routes } from 'react-router-dom'
import Instructions from './pages/Freestyle/Instructions'
import Training from './pages/Freestyle/Training/Training'
export default function Main() {

    return <>

        <Routes>

                        
            <Route path='signup' />
            <Route path='login' />
            <Route path='teacher' />
            <Route path='forgot' />

            <Route path='/' />
            <Route path='settings' />

            <Route path='tr'>
                
            </Route>

            <Route path='tf'>
                
            </Route>

            <Route path='/freestyle-instructions' element={<Instructions/>}></Route>
            <Route path='/freestyle-training' element={<Training/>}></Route>
            <Route path='ass'>
                
            </Route>
        </Routes>

    </>

}
