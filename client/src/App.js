import {
  Landing,
  Shows,
  About,
  Contact,
  Register,
  ProtectedRoute,
  UserProtectedRoute,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Profile,
  CreateShow,
  AllShows,
  MyTickets,
  Overview,
  SharedLayout,
  EditShow,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="all-shows" element={<AllShows />} />
          <Route path="create-show" element={<CreateShow />} />
          <Route path="edit-show" element={<EditShow />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <UserProtectedRoute>
              <SharedLayout />
            </UserProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-tickets" element={<MyTickets />} />
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
