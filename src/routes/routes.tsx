import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"

const App = lazy(() => import("../App"))
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"))
const SearchResult = lazy(
  () => import("../components/SearchResult/SearchResult")
)
const Auth = lazy(() => import("../components/Auth/Auth"))
const Logout = lazy(() => import("../components/Auth/Logout/Logout"))
const FetchUsers = lazy(() => import("../components/FetchUsers/FetchUsers"))
const Chat = lazy(() => import("../components/Chat/Chat"))
const MainPage = lazy(() => import("../components/MainPage/Main"))
const Profile = lazy(() => import("../components/Profile/Profile"))
const Car = lazy(
  () => import("../components/CrudAd/create/transport/ads/Car/Car")
)
const Bus = lazy(
  () => import("../components/CrudAd/create/transport/ads/Bus/Bus")
)
const Truck = lazy(
  () => import("../components/CrudAd/create/transport/ads/Truck/Truck")
)
const Moto = lazy(
  () => import("../components/CrudAd/create/transport/ads/Moto/Moto")
)
const Agriculture = lazy(
  () =>
    import("../components/CrudAd/create/transport/ads/Agrigulture/Agriculture")
)
const Trailer = lazy(
  () => import("../components/CrudAd/create/transport/ads/Trailer/Trailer")
)
const Construction = lazy(
  () =>
    import(
      "../components/CrudAd/create/transport/ads/Construction/Construction"
    )
)

interface RouteObject {
  path?: string
  index?: boolean
  children?: any[]
  caseSensitive?: boolean
  id?: string
  element?: React.ReactNode | null
  errorElement?: React.ReactNode | null
  Component?: React.ComponentType | null
  ErrorBoundary?: React.ComponentType | null
}

const routes = [
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <SearchResult />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Auth />,
        errorElement: <ErrorPage />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      //   errorElement: <ErrorPage />,
      // },
      {
        path: "/logout",
        element: <Logout />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users",
        element: <FetchUsers />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/chat",
        element: <Chat />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/car",
        element: <Car />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/bus",
        element: <Bus />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/truck",
        element: <Truck />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/moto",
        element: <Moto />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/tractor",
        element: <Agriculture />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/trailer",
        element: <Trailer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create/construction",
        element: <Construction />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]

const router = createBrowserRouter(routes.map((r) => r))

export default router
