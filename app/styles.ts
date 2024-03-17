/* StyleX */
import * as stylex from '@stylexjs/stylex';

/* Colors */
import { bgColors } from './theme/colors.stylex';

/* Layouts Styles */
const appLayoutsStyles = stylex.create({
  base: {
    height: '100vh',
  },
});

export const createAppLayoutsStyles = () => {
  return {
    base: stylex.props(appLayoutsStyles.base),
  };
};

/* Home Page Styles */
const homePageStyles = stylex.create({
  base: {
    width: '100%',
    height: '100%',
    background: bgColors.primaryBgColor,
  },
});

export const createHomePageStyles = () => {
  return {
    base: stylex.props(homePageStyles.base),
  };
};
