import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/client",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home/>,
        },
      ],
    },
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout/mainLayout.component"))
);

const Landing = Loadable(
  lazy(() => import("../pages/landing/landing.component"))
);
const Home = Loadable(lazy(() => import("../pages/home/home.componsnt")));
