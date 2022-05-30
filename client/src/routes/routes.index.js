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
      element: <Landing />,
    },
    {
      path: "/client",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "postQuery",
          element: <PostQuery />,
        },
        {
          path: "postFinancialHelp",
          element: <PostFinancialHelp />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path:"news",
          element:<News/>
        },
        {
          path:"queries",
          element:<MyQueries/>
        },
        {
          path:"financialRequests",
          element:<MyFinancialRequests/>
        }
      ],
    },
    {
      path: "/admin",
      element: <MainLayout />,
      children: [
        {
          path: "queries",
          element: <AllQueries />,
        },
        {
          path:"financialRequests",
          element: <AllFinancialRequests/>
        },
        {
          path:"contacts",
          element:<AllContacts/>
        }
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

//pages
const Home = Loadable(lazy(() => import("../pages/home/home.componsnt")));

const PostQuery = Loadable(
  lazy(() => import("../pages/postQuery/postQuery.component"))
);

const PostFinancialHelp = Loadable(
  lazy(() => import("../pages/postFinancialHelp/postFinancialHelp.component"))
);

const Explore = Loadable(
  lazy(() => import("../pages/explore/explore.component"))
);

const News = Loadable(
  lazy(()=> import("../pages/news/news.componsnt"))
);

//admin pages
const AllQueries = Loadable(
  lazy(() => import("../pages/allQueries/allQueries.component"))
);

const AllFinancialRequests = Loadable(
  lazy(() =>
    import("../pages/allFinancialRequests/allFinancialRequests.component")
  )
);

const AllContacts = Loadable(
  lazy(()=> import ("../pages/allContacts/allContacts.component"))
);

const MyQueries = Loadable(
  lazy(()=> import("../pages/myQueries/myQueries.component"))
);

const MyFinancialRequests = Loadable(
  lazy(()=> import("../pages/myFinancialRequests/myFinancialRequests.component"))
)