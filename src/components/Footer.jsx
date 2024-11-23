import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex justify-center mt-[6rem]">
      <button className="text-amber-400">Tier</button>
      <button className="active bg-amber-400 text-slate-900">
        Moonshot Balance
      </button>
      <button className="text-amber-400">Total NFTs</button>
    </div>
  );
};

export default Footer;
