import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import NoProfileIcon from "../assets/images/no-profile.png";
import KafuIcon from "../assets/images/kafu.jpg";

const Chat = (props) => {
  // 質問なのかどうかを判定
  const isQuestion = props.type === "question";
  // 質問であれば前者、そうでなければ後者
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={KafuIcon} />
        ) : (
          <Avatar alt="icon" src={NoProfileIcon} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
