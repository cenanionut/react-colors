import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

import { DRAWER_WIDTH } from "./constants";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function PaletteFormNav(props) {
  const [formShowing, setFormShowing] = React.useState(false);

  const showForm = () => {
    setFormShowing(true);
  };

  const hideForm = () => {
    setFormShowing(false);
  };

  const { open, handleDrawerOpen, handleSubmit } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <LibraryAddIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
        <div style={styles.navBtns}>
          <Button variant="contained" onClick={showForm} style={styles.button}>
            Save
          </Button>
          <Link to="/">
            <Button variant="contained" color="secondary" style={styles.button}>
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={props.palettes}
          hideForm={hideForm}
          handleSubmit={handleSubmit}
        />
      )}
    </Box>
  );
}
