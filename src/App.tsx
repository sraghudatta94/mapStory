import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";

// page inner components
import HomeSider from "./components/home-sider";
import LocationSider from "./components/location-sider";

// css and styles
import "./App.css";

// mapbox styles for marker and popups
import "mapbox-gl/dist/mapbox-gl.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomeSider />} />
          <Route path="trip/:tripId" element={<LocationSider />} />
          <Route path="trip/:tripId/:locationId" element={<LocationSider />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
