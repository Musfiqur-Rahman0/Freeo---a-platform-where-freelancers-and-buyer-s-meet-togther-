import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AuthProvider from "./context/AuthContext";
import GlobalProvider from "./context/GlobalContext";
import { ThemeProvider } from "./Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <GlobalProvider>
          <RouterProvider router={router} />
        </GlobalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
