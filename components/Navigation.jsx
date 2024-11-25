// import style from "./Navigation.module.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import RestoreIcon from "@mui/icons-material/Restore";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { Tooltip, IconButton } from "@mui/material";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="mainMenu bg-slate text-center">
      <ul className="inline-flex flex-row items-center justify-center mx-auto bg-amber-400 p-5 gap-3">
        <li>
          <Tooltip title="Back">
            <IconButton>
              <ArrowCircleLeftOutlinedIcon sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Recent, live and upcoming NFT drops.">
            <IconButton>
              <WorkspacesIcon sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="This is your wallet inventory.">
            <IconButton>
              <RestoreIcon sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="This is your history.">
            <IconButton>
              <FolderIcon sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="This is information.">
            <IconButton>
              <InfoIcon sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
