import { Routes, Route, Link } from "react-router-dom";
import Header from "../src/components/header/index.js";
import Main from "../src/components/main/index.js"
import Footer from "../src/components/footer/index.js";
import { publicRoutes } from "./router/router.js";
function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          {
            publicRoutes.map((routes, index)=>{
              const Page = routes.component
              return (
                <Route key={index} path={routes.path} element={<Page />}/>
              )
            })
          }
        </ Routes>
        <Footer />
      </div>
      )
}

export default App;
