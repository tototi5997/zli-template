import { Tooltip } from "antd"
import Icon from "../icon"
import c from "classnames"
import s from "./index.module.less"

interface IIconButton {
  name: string
  iconSize?: number
  type?: "block" | "single"
  title?: string
}

const IconButton: React.FC<IIconButton> = (props) => {
  const { type = "single", name, iconSize, title } = props

  return (
    <div className={c(s.icon_button, s[`button_${type}`], "cursor-pointer trans")}>
      <Tooltip title={title}>
        <Icon name={name} size={iconSize} />
      </Tooltip>
    </div>
  )
}

export default IconButton
