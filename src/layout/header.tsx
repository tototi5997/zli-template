import { Badge } from "antd";
import UserPopover from "@/pages/userPopover";
import IconButton from "@/components/iconButton";
import Icon from "@/components/icon";
import User from "@/components/User";
import useModal from "@/hooks/useModal";
import useI18n from "@/hooks/useI18n";
import useTheme from "@/hooks/useTheme";
import c from "classnames";
import s from "./index.module.less";

const Header = () => {
  const { t, changeLang } = useI18n();

  const modal = useModal();

  const { toggleTheme } = useTheme();

  const handleEdit = () => modal?.show("demo_modal");

  return (
    <div className={c(s.header, "h-50 w-full flex items-center p-20")}>
      <Icon name="favicon" />
      <div className="fs16 pl28">{t("platformName")}</div>

      <section className={c(s.header_right, "flex gap-20")}>
        <IconButton name="theme-switch" onClick={toggleTheme} />
        <IconButton name="lang" onClick={changeLang} />
        <Badge count={10} dot size="small">
          <IconButton name="alarm" title="Infomation" />
        </Badge>
        <IconButton name="setting" title="Setting" onClick={handleEdit} />
        <User className={c(s.user_icon)} popContent={UserPopover} />
      </section>
    </div>
  );
};

export default Header;
