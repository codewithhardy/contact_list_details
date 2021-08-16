import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <IconButton>
        All <ExpandMoreIcon className="home__icon" />
      </IconButton>
      <IconButton>
        <SearchIcon className="home__icon" />
      </IconButton>
    </div>
  );
}

export default Home;
