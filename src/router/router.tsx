import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "../router/routes/appRoute";

interface IRoutes {
  id?: string;
  path?: string;
  // Change the type of component prop to React.ElementType
  component?: React.ElementType;
  meta: {
    appLayout: boolean;
    privateRoute?: boolean;
  };
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use Route component with 'element' prop instead of 'component' */}
        {AppRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;