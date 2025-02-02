import React from "react";

interface IIcon {
  name: string; // icon 名称
  size?: number; // ionc 大小，默认宽高一致， 宽高不一致不应该使用该组件
  fill?: string; // 填充色
  [key: string]: unknown; // 其他参数
}

const Icon: React.FC<IIcon> = (props) => {
  const { name, size = 20, fill, ...rest } = props;

  return (
    <svg width={size} height={size} fill={fill} style={{ color: fill }} {...rest} aria-hidden={true}>
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;
