/* StyleX */
import * as stylex from '@stylexjs/stylex';

/* Header Styles */
const drawerMenuStyles = stylex.create({
  openSideDrawerBtn: {
    width: 200,
    height: 50,
    opacity: 0,
  },
});

export const createDrawerStyles = () => {
  return {
    openSideDrawerBtn: stylex.props(drawerMenuStyles.openSideDrawerBtn),
  };
};
