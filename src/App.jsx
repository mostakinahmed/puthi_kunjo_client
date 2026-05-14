import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import ViewAll from './page/ViewAllPage'

import Navbar from './component/Navbar'
import Footer from "./component/Footer";
import ScrollTop from './component/ScrollTop'
import ProductDetails from './page/ProductDetailsPage'
import OrderPage from './page/OrderPage'

function App() {

  return (
    <BrowserRouter>

      {/* Always open page from top */}
      <ScrollTop />

      <div className="md:bg-gray-200/60 bg-gray-100 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-all" element={<ViewAll />} />
             <Route path="/view-all/details" element={<ProductDetails />} />
              <Route path="/place-order" element={<OrderPage />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App