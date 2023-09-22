import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Header />
      <h1>Welcome to Turn Tracker</h1>
      <p>
        This app will allow you to easily maintain your characters and monsters
        turns in an RPG (Role Playing Game) setting.
      </p>
      <p>
        Simply click the start button below add your characters and monsters and
        press play!
      </p>
      <Link to="/tracker">
        <button type="button">To Set Up</button>
      </Link>
    </>
  );
};

export default Homepage;
