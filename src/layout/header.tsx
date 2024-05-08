import { Badge } from "antd";
import UserPopover from "@/pages/userPopover";
import IconButton from "@/components/iconButton";
import Icon from "@/components/icon";
import User from "@/components/User";
import c from "classnames";
import s from "./index.module.less";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import useModal from "@/hooks/useModal";

enum LangeType {
  ZN = "zh-CN",
  EN = "en",
}

const Header = () => {
  const { t, i18n } = useTranslation();

  const modal = useModal();

  const curLang = i18n.language;

  const handleChangeLang = useCallback(() => i18n.changeLanguage(curLang === LangeType.ZN ? LangeType.EN : LangeType.ZN), [curLang, i18n]);

  const handleEdit = () => modal?.show("demo_modal");

  return (
    <div className={c(s.header, "h-50 w-full flex items-center p-20")}>
      <Icon name="favicon" />
      <div className="fs16 pl28">{t("platformName")}</div>

      <section className={c(s.header_right, "flex gap-20")}>
        <IconButton name="lang" onClick={handleChangeLang} />
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
