import { Route, Routes } from 'react-router-dom'
import Instructions from './pages/Freestyle/Instructions'
import BookInfo from './pages/BookInfo'
import PushUpInstructions from './pages/PushUpInstructions'
import Questions from './pages/Questions'
import TestAviad from './TestAviad'
import Popup from './components/Common/Popup'
import PushUpTimer2 from './pages/PushUpTimer2'
export default function Main() {


    return <>

        <Routes>


            <Route path='signup' />
            <Route path='login' />
            <Route path='teacher' />
            <Route path='forgot' />

            <Route path='/' element={<TestAviad />} />
            <Route path='settings' />

            <Route path='/tr'>
                <Route index element={<Popup />} />
                <Route path="book-info" element={<BookInfo />} />
                <Route path="instructions" element={<PushUpInstructions />} />
                <Route path="timer" element={<PushUpTimer2 />} />
                <Route path="Questions" element={<Questions />} />

            </Route>

            <Route path='/tf'>



            </Route>

            <Route path='freestyle' element={<Instructions />}>

            </Route>

            <Route path='ass'>

            </Route>
        </Routes>


    </>

}
