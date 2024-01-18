import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Button } from '../components/Buttons/Button.js';

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-around h-96 text-center px-4">
        <h1 className="text-4xl font-bold">Welcome to Turn Tracker</h1>
        <p className="font-semibold">
          This app will allow you to easily maintain your characters and
          monsters turns in an RPG (Role Playing Game) setting.
        </p>
        <p className="font-semibold">
          Simply click the start button below add your characters and monsters
          and press play!
        </p>
        <Link to="/tracker">
          <Button>Setup</Button>
        </Link>
      </main>
    </>
  );
};

export default Homepage;
