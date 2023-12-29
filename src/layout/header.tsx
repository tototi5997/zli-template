import Icon from "@/components/icon"
import c from "classnames"
import s from "./index.module.less"

const Header = () => {
  return (
    <div className={c(s.header, "h-50 w-full flex items-center pl-10")}>
      <Icon name="favicon" size={24}/>
      <div className="fs16 pl8">平台名称</div>
    </div>
  )
}

export default Header
