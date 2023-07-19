import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ErrorPage from "./ErrorPage";

/** 레이아웃 라우트
 *
 * @return {JSX.Element}
 */
const LayoutRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LayoutRoute;
