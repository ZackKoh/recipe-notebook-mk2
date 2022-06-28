import { Link } from 'react-router-dom';

interface DrawerProps {
  setOpenStatus: () => void;
}

const Drawer = ({ setOpenStatus }: DrawerProps) => {
  return (
    <nav
      className={`absolute top-0 left-0 w-60 h-full z-10 bg-slate-100`}
      onClick={setOpenStatus}
    >
      <ul className={`flex flex-col`}>
        <li>
          <Link className={`block py-2 px-8`} to="/sampleroute1">
            Sample 1
          </Link>
        </li>
        <li>
          <Link className={`block py-2 px-8`} to="/sampleroute2">
            Sample 2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
