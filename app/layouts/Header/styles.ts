/* StyleX */
import * as stylex from '@stylexjs/stylex';

/* Color */
import { bgColors } from '../../theme/colors.stylex';

const styles = stylex.create({
  headerBase: {
    width: '100%',
    height: '100%',
    backgroundColor: bgColors.headerPrimaryBgColor,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: '0px 10px',
    paddingLeft: '20px',
    background: 'none !important',
  },
  iconArea: {
    display: 'flex',
    color: 'white',
    padding: '0px 10px',
  },
});

/* Header Styles */
export const createHeaderStyles = () => {
  return {
    headerBase: stylex.props(styles.headerBase),
    logoButton: stylex.props(styles.logoButton),
    iconArea: stylex.props(styles.iconArea),
  };
};
