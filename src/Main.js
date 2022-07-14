import { Route, Routes } from "react-router-dom";
import Instructions from "./pages/Freestyle/Instructions";
import TestAviad from "./TestAviad";
import Page1 from './pages/Assessments-ta/Page1'
import Page3 from './pages/Assessments-ta/Page3'
import Page4 from './pages/Assessments-ta/Page4'
import Page5 from './pages/Assessments-ta/Page5'

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="signup" />
        <Route path="login" />
        <Route path="teacher" />
        <Route path="forgot" />

        <Route path="/" element={<TestAviad />} />
        <Route path="settings" />

        <Route path="tr"></Route>

        <Route path="tf"></Route>

        <Route path="/freestyle/*" element={<Instructions />}></Route>

        <Route path="ass">
          <Route path="page1" element={<Page1 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
        </Route>
      </Routes>
    </>
  );
}
