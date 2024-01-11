import UserPopover from "@/pages/userPopover"
import Icon from "@/components/icon"
import User from "@/components/User"
import c from "classnames"
import s from "./index.module.less"

const Header = () => {
  return (
    <div className={c(s.header, "h-50 w-full flex items-center p-10")}>
      <Icon name="favicon" />
      <div className="fs16 pl8">Platfrom Name</div>
      <Icon name="alarm" />
      <Icon name="setting" />
      <User className={c(s.user_icon)} popContent={UserPopover} />
    </div>
  )
}

export default Header
