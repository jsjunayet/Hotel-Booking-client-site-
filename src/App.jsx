import { Outlet } from "react-router-dom"
import MainLayout from "./component/Layout/MainLayout"


function App() {


  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </>
  )
}

export default App
