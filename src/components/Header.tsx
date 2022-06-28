import { useState } from 'react';

import Drawer from './NavigationDrawer';
import SettingsMenu from './SettingsMenu';

const AppHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      <nav className={`h-12 w-full bg-blue-400 flex flex-row items-center`}>
        <button className={'px-2'} onClick={toggleDrawer}>
          button
        </button>
        <p className={`text-xl uppercase text-white font-bold flex-1`}>
          Recipe Notebook
        </p>
        <button className={'px-2'} onClick={toggleSettings}>
          Settings button
        </button>
      </nav>
      {isDrawerOpen ? <Drawer setOpenStatus={toggleDrawer} /> : null}
      {isSettingsOpen ? <SettingsMenu setOpenStatus={toggleSettings} /> : null}
    </>
  );
};

export default AppHeader;
