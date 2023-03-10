import React from "react";
import { GoalItem } from "./GoalItem";

const GoalList = ({ data }) => {
  const goals = data.map((goal) => (
    <GoalItem key={goal.id} title={goal.title} content={goal.content} />
  ));
  return <div>{goals}</div>;
};

export default GoalList;
