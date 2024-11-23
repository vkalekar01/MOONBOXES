import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Sidebar.css";

const menuItems = [
  { name: "Tokenomics", link: "#" },
  { name: "MoonSea", link: "#" },
  { name: "Moonshot", link: "#" },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 right-0 h-screen w-12 hidden md:block flex flex-col items-center justify-start">
      {/* Wallet Icon Button */}
      <button
        aria-label="Open Wallet"
        className="bg-yellow-600 w-full p-2 flex items-center justify-center mb-4 hover:text-white"
      >
        <AccountBalanceWalletIcon fontSize="large" />
      </button>

      {/* Sidebar Menu */}
      <ul className="sidebarMenu list-none p-0 flex flex-col items-center">
        {menuItems.map((item, index) => (
          <li key={index} className="transform -rotate-90">
            <a
              href={item.link}
              className="text-slate-900 hover:text-white block py-2 px-4 transition-all duration-200 whitespace-nowrap"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
