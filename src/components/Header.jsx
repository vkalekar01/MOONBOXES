import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  return (
    <div className="header flex justify-between pb-5 bg-amber-400">
      <div className="logo text-slate-950 text-xl font-bold">
        <span className="text-white">MOON</span>BOXES
      </div>
      <div>
        <CloseIcon className="text-neutral-950" fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
