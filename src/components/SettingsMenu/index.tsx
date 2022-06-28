interface SettingsMenuProps {
  setOpenStatus: () => void;
}

const SettingsMenu = ({ setOpenStatus }: SettingsMenuProps) => {
  return (
    <div
      className={`absolute top-0 right-0 z-20 bg-slate-100`}
      onClick={setOpenStatus}
    >
      Something here
    </div>
  );
};

export default SettingsMenu;
