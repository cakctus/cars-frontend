import { useEffect } from "react"
import { useAppDispatch } from "./redux/store/store"
import { refreshSLice } from "./redux/slices/auth/authSlice"
import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refreshSLice())
    }
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
