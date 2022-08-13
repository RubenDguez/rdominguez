import { TSkill } from '../../types';
import { ProgressBarWithLabel } from './ProgressBarWithLabel';

export interface ISkillsWithProgressBar {
  skills: TSkill[];
}

export const SkillsWithProgressBar = ({ skills }: ISkillsWithProgressBar) => {
  return (
    <>
      {skills.map((m, i) => (
        <ProgressBarWithLabel
          key={i}
          label={m.skill}
          value={m.percentage || 0}
        />
      ))}
    </>
  );
};
