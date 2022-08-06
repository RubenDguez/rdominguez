import { Box, Typography } from '@mui/material';
import { TSkill } from '../../types';
import DoneIcon from '@mui/icons-material/Done';
import { useContext } from 'react';
import { ColorContext } from '../../theme/Color';

export interface ISkills {
  skills: TSkill[];
}

export const Skills = ({ skills }: ISkills) => {
  const color = useContext(ColorContext);
  return (
    <>
      {skills.map((m, i) => (
        <Box key={i}>
          <Typography sx={{ display: 'flex' }}>
            <DoneIcon
              sx={{ fontSize: '1rem', color: `${color}`, mr: 1, mb: 1 }}
            />
            {m.skill}
          </Typography>
        </Box>
      ))}
    </>
  );
};
