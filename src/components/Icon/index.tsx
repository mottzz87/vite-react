/*
 * @Author: Vane
 * @Date: 2021-07-09 02:26:13
 * @LastEditTime: 2021-07-09 02:32:57
 * @LastEditors: Vane
 * @Description:
 * @FilePath: \vite-react\src\components\Icon\index.tsx
 */
import { createFromIconfontCN } from '@ant-design/icons';

interface IconProps {
  type: string;
  title?: string;
  // scriptUrl?: any;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Icon: React.FC<IconProps> = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

export default Icon;
