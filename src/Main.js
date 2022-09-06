import { Link, Route, Routes } from 'react-router-dom'

import { AssessmentStart, CameraFace, Comprehension, ComprehensionTest } from './pages/Assessments'
import { Dashboard, Instructions, Result } from './pages/commonPages'
import { Setting } from './pages/Settings'
import { CalibrateCam, Exercise, StartFocus } from './pages/TrainFocus'

// import Instructions from './pages/Freestyle/Instructions'
// import BookInfo from './pages/BookInfo'
// import PushUpInstructions from './pages/TrainReading/Pushup/Instructions'
// import PushUpTimer2 from './pages/TrainReading/Pushup/Timer'
// import Exercise from "./pages/TrainReading/Level/Exercise";

import { BookInfo, PushUpInstructions } from './pages/TrainReading'
import ExerciseResult from "./pages/TrainReading/Level/ExerciseResult";
import PushUpTimer2 from './pages/PushUpTimer2'
import Questions from './pages/Questions'
import LevelExercise from './pages/TrainReading/Level/Exercise'
import ExerciseClock from './pages/TrainReading/Level/ExerciseClock'
import ExerciseRate from './pages/TrainReading/Level/ExerciseRate'
import ExerciseQuestion from './pages/TrainReading/Level/ExerciseQuestion'

// import Training from './pages/Freestyle/Training/Training'
// import ExerciseClock from "./pages/TrainReading/Level/ExerciseClock";
// import ExerciseRate from "./pages/TrainReading/Level/ExerciseRate";
// import ExerciseQuestion from "./pages/TrainReading/Level/ExerciseQuestion";
// import FourQues from './pages/Questions'

export default function Main() {

    return <>

        <Routes>

            {/* dashboard - yosef */}
            <Route index element={
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Link to={"/assessments"}>assessments</Link>
                    <Link to={"/train-focus"}>train focus</Link>
                    <Link to={"/train-reading"}>train-reading</Link>
                    <Dashboard />
                </div>
            } />

            {/* assesment roll - yosef */}
            <Route path="assessments">
                <Route index element={<AssessmentStart />} />
                <Route path='instructions' element={<Instructions navigateTo="/assessments/camera-face" />} />
                <Route path='camera-face' element={< CameraFace />} />
                <Route path='comprehension' element={< Comprehension />} />
                <Route path='comprehension-Test' element={< ComprehensionTest />} />
                <Route path='result' element={< Result />} />
            </Route>

            {/* train-focus roll - yosef */}
            <Route path="train-focus">
                <Route index element={< CalibrateCam />} />
                <Route path='start-focus' element={< StartFocus />} />
                <Route path='exercise' element={< Exercise />} />
                <Route path='result' element={< Result />} />
            </Route>


            {/* train-reading roll - yosef */}
            <Route path='/train-reading'>
                <Route index element={<BookInfo />} />
                <Route path="instructions" element={<Instructions navigateTo="/train-reading/pushup" />} />
                <Route path="pushup" element={<PushUpInstructions />} />
                <Route path="timer" element={<PushUpTimer2 />} />
                <Route path="questions" element={<Questions />} />
                <Route path="level-exercise" element={<LevelExercise />} />
                <Route path="exercise-clock" element={<ExerciseClock />} />
                <Route path="rate" element={<ExerciseRate />} />
                <Route path="question" element={<ExerciseQuestion />} />
                <Route path="result" element={<ExerciseResult />} />
            </Route>

            <Route path='settings' >
                <Route index element={<Setting />} />

            </Route>

            {/* <Route path='instructions' element={<Instructions navigateTo="/train-reading/popup" />} /> */}
            {/* <Route path="train-reading">
                <Route index element={< BookInfo />} />
                <Route path='instructions' element={<PushUpInstructions />} />
                <Route path="timer" element={<PushUpTimer2 />} />
                <Route path='popup' element={<PopUp />} />
                <Route path="questions" element={<FourQues />} />

            </Route> */}
            {/* <Route path="exercise" element={<Exercise />} />
                <Route path="exercise_clock" element={<ExerciseClock />} />
                <Route path="rate" element={<ExerciseRate />} />
                <Route path="question" element={<ExerciseQuestion />} /> */}
            {/* <Route index element={<PopUp />} />
                <Route  path="book-info" element={<BookInfo />} /> */}

            {/* <Route path='freestyle' element={<Instructions />}>

        </Route>

        <Route path='/freestyle-instructions' element={<Instructions />}></Route>
        <Route path='/freestyle-training' element={<Training />}></Route>
        <Route path='ass'>
        
        </Route>  */}


        </Routes>


    </>
}