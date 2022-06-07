import { Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../../theme/Color";

export type TAchievement = {
  achievement: number;
  name: String;
  plus?: boolean;
};

export interface IAchievements {
  achievements: TAchievement[];
}

export const Achievements = ({ achievements }: IAchievements) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {achievements.map((m, i) => (
        <Achievement key={i} achievement={m} />
      ))}
    </Grid>
  );
};

export interface IAchievement {
  achievement: TAchievement;
}

export const Achievement = ({ achievement }: IAchievement) => {
  const color = useContext(ColorContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < achievement.achievement) setCounter((prev) => prev + 1);
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: `${color}`,
          fontSize: "1.45rem",
          fontWeight: "800",
          marginRight: "1rem",
        }}
      >
        {counter}
        {achievement.plus && <span>+</span>}
      </Typography>
      <Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
        {achievement.name}
      </Typography>
    </Grid>
  );
};
