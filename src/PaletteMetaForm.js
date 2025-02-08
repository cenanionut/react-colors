import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function PaletteMetaForm(props) {
  const [stage, setStage] = React.useState("form");
  const [newPaletteName, setNewPaletteName] = React.useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
    return () => {
      ValidatorForm.removeValidationRule("isPaletteNameUnique");
    };
  }, [props.palettes]);

  const handleChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = (emoji) => {
    props.handleSubmit({ paletteName: newPaletteName, emoji: emoji.native });
  };

  return (
    <React.Fragment>
      <Dialog open={stage === "emoji"} onClose={props.hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker
          theme="light"
          data={data}
          onEmojiSelect={savePalette}
          title="Pick a Palette Emoji"
        />
      </Dialog>
      <Dialog open={stage === "form"} onClose={props.hideForm}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>

            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </React.Fragment>
  );
}
