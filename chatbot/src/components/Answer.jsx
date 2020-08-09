import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      borderColor: "mediumaquamarine",
      color: "white",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "coral",
        color: "white",
      },
    },
  })
);

const Answer = (props) => {
  // useStylesの返り値を定数classesとする → buttonタグの中で使う
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => {
        props.select(props.content, props.nextId);
      }}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
