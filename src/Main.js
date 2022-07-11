import { Route, Routes } from 'react-router-dom'
import Instructions from './pages/Freestyle/Instructions'
import TestAviad from './TestAviad'
export default function Main() {

    return <>

        <Routes>

                        
            <Route path='signup' />
            <Route path='login' />
            <Route path='teacher' />
            <Route path='forgot' />

            <Route path='/' element={<TestAviad/>}/>
            <Route path='settings' />

            <Route path='tr'>
                
            </Route>

            <Route path='tf'>
                
            </Route>

            <Route path='/freestyle/*' element={<Instructions/>}>

            </Route>

            <Route path='ass'>
                
            </Route>
        </Routes>

    </>

}
