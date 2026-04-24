import { RouterProvider } from "react-router-dom";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { router } from "./routes";

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  );
}

export default App;
