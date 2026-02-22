import Navbar from "./Components/navbar";
import Footer  from "./Components/footer";
import AboutPage from "./Pages/aboutpage";
import ContactPage from "./Pages/contactpage";
import { Routes , Route } from "react-router-dom";
import HomePage from "./Pages/homepage";
import PageNotFound from "./Pages/pagenotfound";

function App() {
  return (
    <>
{/* <BrowserRouter > */}
 <Navbar />
<Routes>
  <Route path="/"  element={<HomePage/>}></Route>
  <Route path="/about"  element={<AboutPage/>}></Route>
  <Route path="/contact"  element={<ContactPage/>}></Route>
  <Route path="*"  element={<PageNotFound/>}></Route>
</Routes>
 {/* <Footer/> */}
    {/* <Navbar />
    <HomePage/>
    <AboutPage />
    <ContactPage/>
    <Footer/> */}
    {/* </BrowserRouter > */}
  
    
    </>
  )
}

export default App
