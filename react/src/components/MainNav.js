import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#3F6ABF",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "White" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "White" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "White" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "White" }}
        label="Netflix"
        icon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABDUlEQVRIie2Rz0rCQRSFv9M/y2hbIAiS0LJNO6lN0CowX8AndBtulHRRuPAJIiGKIKJFIG2K7LZwoGuoP6S79MDAPXOZ892ZgaUypHlNM6sC28l+AG1Jw9S7ASqpdy3pZFrGSsYAdVfngAPnK64+nhWQBTgHNpwvmdlqxpmFAFvAofPrQDESAFBj8q/K0YB9oOD8rpntRAIATqdAQwFnQP4P4CsSsAYcOb8JXEUCAC4Ac74bDSgAT84/As+RAIA7V38Dl6EASS/A0G31mXy2/wGSBq5+B3rRgHtg5HwrFCDpE3hwWwPgLQLgQ28ZfzKMb9OcOdC8RDPrpOAO0JT06np5YC+toqTGAsMu9asfL1I519kObpkAAAAASUVORK5CYII="></img>}
      />
      <BottomNavigationAction
        style={{ color: "White" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
