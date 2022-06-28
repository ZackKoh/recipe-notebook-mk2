import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/sampleroute1">Sample 1</Link>
      <Link to="/sampleroute2">Sample 2</Link>
      <Outlet />
    </div>
  );
};

export default App;
