import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./components/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
