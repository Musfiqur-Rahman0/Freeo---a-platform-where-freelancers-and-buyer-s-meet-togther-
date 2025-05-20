import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
