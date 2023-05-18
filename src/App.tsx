import { useEffect } from "react"
import MainPage from "./pages/MainPage/MainPage"
import { useAppDispatch, useAppSelector } from "./redux/store/store"
import { refreshSLice } from "./redux/slices/auth/authSlice"
import "./App.css"

function App() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refreshSLice())
    }
  }, [])

  console.log(user)

  return (
    <>
      <h1>
        Hello: {localStorage.getItem("token") ? user.user.email : "anonim"}
      </h1>
      <MainPage />
    </>
  )
}

export default App
