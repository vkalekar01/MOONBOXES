import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SideMenu from "./SideMenu";
import "./Sidebar.css";

const menuItems = [
  { name: "Tokenomics", link: "#" },
  { name: "MoonSea", link: "#" },
  { name: "Moonshot", link: "#" },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 right-0 h-screen w-12 hidden md:block flex flex-col items-center justify-start border-l border-slate-900">
      {/* Wallet Icon Button */}
      <button
        aria-label="Open Wallet"
        className="bg-yellow-600 w-full p-2 flex items-center justify-center mb-4 hover:text-white"
      >
        <AccountBalanceWalletIcon fontSize="large" />
      </button>

      {/* Side Menu */}
      <SideMenu />
    </aside>
  );
};

export default Sidebar;
