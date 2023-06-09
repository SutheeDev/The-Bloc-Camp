import { Landing, Shows, About, Contact, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Profile,
  AddShow,
  AllShows,
  MyTickets,
  Overview,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-dashboard" element={<SharedLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="allshows" element={<AllShows />} />
          <Route path="addshow" element={<AddShow />} />
        </Route>
        <Route path="/dashboard" element={<SharedLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mytickets" element={<MyTickets />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
