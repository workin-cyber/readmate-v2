import { Route, Routes } from 'react-router-dom'

import { AssessmentStart, CameraFace, Comprehension, ComprehensionTest } from './pages/Assessments'
import { Dashboard, Instructions, Result } from './pages/commonPages'
import { FSTraining } from './pages/Freestyle'
import { Setting } from './pages/Settings'
import { CalibrateCam, Exercise, StartFocus } from './pages/TrainFocus'


import { BookInfo, PushUpInstructions, ExerciseResult, PushUpTimer2 } from './pages/TrainReading'
import { Questions, LevelExercise, ExerciseClock, ExerciseQuestion, ExerciseRate } from './pages/TrainReading'


export default function Main() {

    return <>

        <Routes>

            {/* dashboard - yosef */}
            <Route index element={<Dashboard />} />

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

            {/* settings roll - yosef */}
            <Route path='settings' >
                <Route index element={<Setting />} />

            </Route>

            {/* freestyle roll - yosef */}
            <Route path='freestyle' >
                <Route index element={<FSTraining />} />
            </Route>


        </Routes>


    </>
}