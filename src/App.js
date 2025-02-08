import React from "react";
import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

function App() {
  const [palettes, setPalettes] = React.useState(
    JSON.parse(window.localStorage.getItem("palettes")) || seedColors
  );

  const findPalette = (id) => palettes.find((palette) => palette.id === id);

  const PaletteWrapper = () => {
    const { id } = useParams();

    const palette = generatePalette(findPalette(id));

    return <Palette palette={palette} />;
  };

  const SingleColorPaletteWrapper = () => {
    const { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));
    return <SingleColorPalette palette={palette} colorId={colorId} />;
  };

  const savePalette = (newPalette) => {
    setPalettes((prevPalettes) => {
      const updatedPalettes = [...prevPalettes, newPalette];
      window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes));
      return updatedPalettes;
    });
  };

  const deletePalette = (id) => {
    setPalettes((prevPalettes) => {
      const updatedPalettes = prevPalettes.filter(
        (palette) => palette.id !== id
      );
      window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes)); // Sincronizare localStorage
      return updatedPalettes;
    });
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PaletteList palettes={palettes} deletePalette={deletePalette} />
        }
      />
      <Route exact path="/palette/:id" element={<PaletteWrapper />} />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPaletteWrapper />}
      />
      <Route
        exact
        path="/palette/new"
        element={
          <NewPaletteForm savePalette={savePalette} palettes={palettes} />
        }
      />
    </Routes>
  );
}

export default App;
