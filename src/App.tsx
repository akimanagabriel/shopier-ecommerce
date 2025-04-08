import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import ShopScreen from "./screens/ShopScreen";
import PageHeader from "./components/partials/PageHeader";
import Footer from "./components/partials/PageFooter"; // Assuming you have the footer component

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <PageHeader />

      {/* Main Content Container */}
      <main className="min-h-[70vh]">
        <Routes>
          <Route
            index
            element={<Homescreen />}
          />
          <Route
            path="/cart"
            element={<Cartscreen />}
          />
          <Route
            path="/shop"
            element={<ShopScreen />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
