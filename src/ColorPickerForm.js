import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import "./styles/ColorPickerForm.css";
import styles from "./styles/ColorPickerFormStyles";

export default function ColorPickerForm(props) {
  const [currentColor, setCurrentColor] = React.useState("teal");
  const [newColorName, setNewColorName] = React.useState("");

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleNameChange = (evt) => {
    setNewColorName(evt.target.value);
  };

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
    };
    props.addNewColor(newColor);
    setNewColorName("");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      props.colors.every(({ color }) => color !== currentColor)
    );

    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      ValidatorForm.removeValidationRule("isColorUnique");
    };
  }, [props.colors, currentColor]);

  const { paletteIsFull } = props;

  return (
    <div style={{ width: "100%" }}>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        onChange={updateCurrentColor}
        className="picker"
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          name="newColorName"
          onChange={handleNameChange}
          style={styles.colorNameInput}
          placeholder="Color Name"
          variant="filled"
          margin="normal"
          label="Color Name"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull ? "grey" : currentColor,
            width: "100%",
            padding: "1rem",
            marginTop: "1rem",
            fontSize: "1rem",
          }}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}
