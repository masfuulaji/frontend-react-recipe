import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Offcanvas from "./Components/Offcanvas";
import Footer from "./Components/Footer";
import Home from "./Views/Home/Home";
import Recipe from "./Views/Recipe/Recipe";
import RecipeDetail from "./Views/Recipe/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Offcanvas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:slug" element={<RecipeDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
        <HelmetProvider>
          <Helmet>
            <script src="/assets/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/js/slideToggle.min.js"></script>
            <script src="/assets/js/internet-status.js"></script>
            <script src="/assets/js/tiny-slider.js"></script>
            <script src="/assets/js/baguetteBox.min.js"></script>
            <script src="/assets/js/countdown.js"></script>
            <script src="/assets/js/rangeslider.min.js"></script>
            <script src="/assets/js/vanilla-dataTables.min.js"></script>
            <script src="/assets/js/index.js"></script>
            <script src="/assets/js/magic-grid.min.js"></script>
            <script src="/assets/js/dark-rtl.js"></script>
            <script src="/assets/js/active.js"></script>
          </Helmet>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
