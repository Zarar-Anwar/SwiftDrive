import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Themes from "./Pages/Themes";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Profile from "./Pages/user/Profile";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/themes' element={<Base><Themes/></Base>} />
          <Route path='/about-us' element={<Base><About/></Base>} />
          <Route path='/contact-us' element={<Base><Contact/></Base>} />

          {/* User Routes */}
          <Route path='/login' element={<Base><Login/></Base>} />
          <Route path='/registration' element={<Base><Registration/></Base>} />
          <Route path='/user-profile' element={<Base><Profile/></Base>} />

          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
