import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AuthProvider from "./context/AuthContext";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
