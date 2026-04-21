import { RouterProvider } from "react-router-dom";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { router } from "./routes";

function App() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default App;
