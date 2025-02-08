import sizes from "./sizes";

const styles = {
  navBtns: {
    marginRight: "1rem",
  },
  button: {
    margin: "0 0.5rem",
    textDecoration: "none",
    [sizes.down("xs")]: {
      marginRight: "0.5rem",
    },
  },
  [sizes.down("xs")]: {
    margin: "0 0.2rem",
    padding: "0.3rem",
  },
};

export default styles;
