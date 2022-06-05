import { Box, Typography } from "@mui/material";
import { TSkill } from "../../types";
import DoneIcon from "@mui/icons-material/Done";

export interface ISkills {
  skills: TSkill[];
}

export const Skills = ({ skills }: ISkills) => {
  return (
    <>
      {skills.map((m, i) => (
        <Box key={i}>
          <Typography variant="caption" sx={{ display: "flex" }}>
            <DoneIcon
              sx={{ fontSize: "1rem", color: "magenta", mr: 1, mb: 1 }}
            />
            {m.skill}
          </Typography>
        </Box>
      ))}
    </>
  );
};
