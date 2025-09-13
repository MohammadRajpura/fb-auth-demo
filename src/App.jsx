import { RouterProvider } from "react-router-dom";
import { routes } from "./@core/routing/routing";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
