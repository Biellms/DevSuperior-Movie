import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import Form from "pages/form/Form";
import Listing from "pages/listing/Listing";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    
    <section>
      <Navbar />

        <Routes>

          <Route path="/" element={<Listing />}/>

          <Route path="/form">
            <Route path=":movieId" element={<Form />}/>
          </Route>

        </Routes>

      <Footer />
      </section>
    </BrowserRouter>
    
  );
}

export default App;
