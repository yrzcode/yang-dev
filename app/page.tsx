/* Styles */
import { createHomePageStyles } from './styles';

export const Home = () => {
  /* CSS */
  const homePageStyles = createHomePageStyles();
  return <main {...homePageStyles.base}>Home</main>;
};

export default Home;
