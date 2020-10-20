import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Badge } from "@material-ui/core";
import { updateVotesAPI } from "../actions";

import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";

const VoteCard = ({ postId }) => {
  const dispatch = useDispatch();

  const title = useSelector((state) =>
    state.titles.filter((title) => title.id === postId)
  );

  const handleVote = (direction) => {
    dispatch(updateVotesAPI(postId, direction));
  };

  return (
    <>
      <Badge badgeContent={title[0] ? title[0].votes : 0} color="primary">
        <IconButton onClick={() => handleVote("up")}>
          <ThumbUpRoundedIcon fontSize="small" color="primary" />
        </IconButton>
      </Badge>
      <IconButton onClick={() => handleVote("down")}>
        <ThumbDownRoundedIcon fontSize="small" color="secondary" />
      </IconButton>
    </>
  );
};

export default VoteCard;
