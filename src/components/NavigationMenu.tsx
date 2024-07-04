import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import { ListItemIcon } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import styles from "./NavigationMenu.module.css";

export default function NavigationMenu() {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {[
          { name: "Upcoming", icon: <UpcomingIcon />, link: "/" },
          { name: "Trending", icon: <TrendingUpIcon />, link: "/trending" },
          { name: "Popular", icon: <StarIcon />, link: "/popular" },
          {
            name: "Now playing",
            icon: <AccessTimeIcon />,
            link: "/playing",
          },
        ].map(({ name, icon, link }) => (
          <ListItem key={name} disablePadding>
            <Link href={link} className={styles.link}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { name: "Favorite", icon: <FavoriteIcon />, link: "/favorite" },
          { name: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
        ].map(({ name, icon, link }) => (
          <ListItem key={name} disablePadding>
            <Link href={link}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
