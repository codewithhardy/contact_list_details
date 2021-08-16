import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users ");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((curElem) => {
        //map(), calls this code once for each record inside the prodlist array
        const { avatar_url, id, login, url } = curElem;
        return (
          //generate a dynamic route for individual contact image the user clicks on
          <Link key={id} to={`/contact/${curElem.id}`}>
            <div className="image">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={avatar_url} />
                  </ListItemAvatar>
                  <ListItemText
                    className="list__item"
                    primary={login}
                    secondary={url}
                  />
                </ListItem>
              </List>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Contact;
