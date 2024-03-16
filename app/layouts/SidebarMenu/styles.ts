/* StyleX */
import * as stylex from '@stylexjs/stylex';

/* Colors */
import { bgColors } from '@/app/theme/colors.stylex';

/* Sidebar menu Styles */
const styles = stylex.create({
  base: {
    width: '100%',
    height: '100%',
    background: bgColors.secondaryBgColor,
  },
});

export const createSidebarStyles = () => {
  return {
    base: stylex.props(styles.base),
  };
};
