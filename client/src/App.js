import {
  Landing,
  Shows,
  About,
  Contact,
  Register,
  ProtectedRoute,
  UserProtectedRoute,
  Artist,
  Error,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Profile,
  CreateShow,
  AllShows,
  Favorites,
  Overview,
  SharedLayout,
  EditShow,
  UserOverview,
  Upcoming,
} from "./pages/dashboard";
import { useAppContext } from "./context/appContext";

function App() {
  const { show } = useAppContext();
  const id = show._id;

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
          <Route index element={<UserOverview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path={`/artist/${id}`} element={<Artist />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
