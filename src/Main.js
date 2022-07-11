import { Route, Routes } from "react-router-dom";
import Exercise from "./pages/TrainReading/Level/Exercise";
import ExerciseClock from "./pages/TrainReading/Level/ExerciseClock";
import ExerciseRate from "./pages/TrainReading/Level/ExerciseRate";
import ExerciseQuestion from "./pages/TrainReading/Level/ExerciseQuestion";
import ExerciseResult from "./pages/TrainReading/Level/ExerciseResult";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="signup" />
        <Route path="login" />
        <Route path="teacher" />
        <Route path="forgot" />

        <Route path="/" />
        <Route path="settings" />

        <Route path="tr">
          <Route path="exercise" element={<Exercise />} />
          <Route path="exercise_clock" element={<ExerciseClock />} />
          <Route path="rate" element={<ExerciseRate />} />
          <Route path="question" element={<ExerciseQuestion />} />
          <Route path="result" element={<ExerciseResult />} />
        </Route>

        <Route path="tf"></Route>

        <Route path="freestyle"></Route>

        <Route path="ass"></Route>
      </Routes>
    </>
  );
}
