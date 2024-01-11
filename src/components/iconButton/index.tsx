import c from "classnames"
import s from "./index.module.less"
import Icon from "../icon"

interface IIconButton {
  name: string
  iconSize?: number
  type?: "block" | "single"
  activeFill?: string
}

const IconButton: React.FC<IIconButton> = (props) => {
  const { type = "single", name, iconSize } = props

  return (
    <div className={c(s.icon_button, s[`button_${type}`], "cursor-pointer")}>
      <Icon name={name} size={iconSize} />
    </div>
  )
}

export default IconButton
