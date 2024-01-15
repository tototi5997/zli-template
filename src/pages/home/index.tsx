import { Header } from "@/layout"
import c from "classnames"
import s from "./index.module.less"

const Home = () => {
  return (
    <div className={c(s.home)}>
      <Header />
    </div>
  )
}

export default Home
