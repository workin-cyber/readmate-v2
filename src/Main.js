import { Route, Routes } from 'react-router-dom'

import TestAviad from './TestAviad'
import Popup from './components/Common/Popup'

import Instructions from './pages/Freestyle/Instructions'
import BookInfo from './pages/BookInfo'
import PushUpInstructions from './pages/TrainReading/Pushup/Instructions'
import Questions from './pages/Questions'
import Training from './pages/Freestyle/Training/Training'
import PushUpTimer2 from './pages/TrainReading/Pushup/Timer'
import Exercise from "./pages/TrainReading/Level/Exercise";
import ExerciseClock from "./pages/TrainReading/Level/ExerciseClock";
import ExerciseRate from "./pages/TrainReading/Level/ExerciseRate";
import ExerciseQuestion from "./pages/TrainReading/Level/ExerciseQuestion";
import ExerciseResult from "./pages/TrainReading/Level/ExerciseResult";
// import Page1 from './pages/Assessments-ta/Page1'
// import Page3 from './pages/Assessments-ta/Page3'
// import Page4 from './pages/Assessments-ta/Page4'
// import Page5 from './pages/Assessments-ta/Page5'


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

            <Route path="/tr">
                <Route path="exercise" element={<Exercise />} />
                <Route path="exercise_clock" element={<ExerciseClock />} />
                <Route path="rate" element={<ExerciseRate />} />
                <Route path="question" element={<ExerciseQuestion />} />
                <Route path="result" element={<ExerciseResult />} />
            </Route>

            <Route path='/tf'>



            </Route>

            <Route path='freestyle' element={<Instructions />}>

            </Route>

            <Route path='/freestyle-instructions' element={<Instructions />}></Route>
            <Route path='/freestyle-training' element={<Training />}></Route>
            <Route path='ass'>

            </Route>

            <Route path="ass">
                {/* <Route path="page1" element={<Page1 />} />
                <Route path="page3" element={<Page3 />} />
                <Route path="page4" element={<Page4 />} />
                <Route path="page5" element={<Page5 />} /> */}
            </Route>
        </Routes>


    </>
}