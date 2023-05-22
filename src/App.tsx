import { useEffect } from "react"
import MainPage from "./pages/MainPage/MainPage"
import { useAppDispatch, useAppSelector } from "./redux/store/store"
import { refreshSLice } from "./redux/slices/auth/authSlice"
import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refreshSLice())
    }
  }, [])

  return (
    <>
      <h1>
        Hello: {localStorage.getItem("token") ? user.user.email : "anonim"}
      </h1>
      <Header />
      {/* <MainPage /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
