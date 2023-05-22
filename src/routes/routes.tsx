import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../components/ErrorPage/ErrorPage"
import SearchResult from "../components/SearchResult/SearchResult"
import Reg from "../components/Auth/Reg/Reg"
import Login from "../components/Auth/Login/Login"
import Auth from "../components/Auth/Auth"
import Logout from "../components/Auth/Logout/Logout"
import FetchUsers from "../components/FetchUsers/FetchUsers"
import Chat from "../components/Chat/Chat"
import MainPage from "../components/MainPage/Main"

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
    element: <App />,
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
    ],
  },
]

const router = createBrowserRouter(routes.map((r) => r))

export default router
