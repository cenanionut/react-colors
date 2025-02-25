import React, { useState } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { blue, red } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

const PaletteList = ({ palettes, classes, deletePalette }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const navigate = useNavigate();

  const openDialog = (id) => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeletingId("");
  };

  const handleDelete = () => {
    deletePalette(deletingId);
    closeDialog();
  };

  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          <AnimatePresence>
            {palettes.map((palette) => (
              <motion.div
                key={palette.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <MiniPalette
                  {...palette}
                  handleClick={() => goToPalette(palette.id)}
                  openDialog={openDialog}
                  id={palette.id}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={closeDialog}
        >
          <DialogTitle>Delete This Palette?</DialogTitle>
          <List>
            <ListItem>
              <ListItemButton onClick={handleDelete}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[500] }}>
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Delete" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={closeDialog}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: red[100], color: red[500] }}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cancel" />
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
