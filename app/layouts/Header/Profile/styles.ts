/* StyleX */
import * as stylex from '@stylexjs/stylex';

/* Color */
import { bgColors } from '../../../theme/colors.stylex';

const styles = stylex.create({
  menuList: {
    backgroundColor: bgColors.thirdlyBgColor,
  },
  menuItem: {
    backgroundColor: bgColors.thirdlyBgColor,
  },
});

/* Header Styles */
export const createProfileStyles = () => {
  return {
    menuList: stylex.props(styles.menuList),
    menuItem: stylex.props(styles.menuItem),
  };
};
