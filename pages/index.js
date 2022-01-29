import Link from 'next/link';
import Profile from '../components/Profile';
import Login from '../components/Login';
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
          <Profile></Profile>
          <Login></Login>
      </ul>
    </div>
  );
}

export default HomePage;