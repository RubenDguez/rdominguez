import { Container, Grid } from '@mui/material';
import { LeftPanel } from '../components/UI/LeftPanel';
import { RightPanel } from '../components/UI/RightPanel';
import background from '../images/binary-code.webp';
import person from '../images/me.jpeg';
import person2 from '../images/me2.png';

import {
  name,
  position,
  bio,
  personalInformationData,
} from '../constants/personalInformation';
import { spokenLanguages } from '../constants/spokenLanguages';
import { backEndSkills, frontEndSkills, skills } from '../constants/skills';
import { mediaLinks } from '../constants/mediaLinks';

import { mainPhrase, codingPhrases } from '../constants/codingPhrases';
import { achievements } from '../constants/achievements';
import { services } from '../constants/services';
import { recommendations } from '../constants/recommendations';

export const Main = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LeftPanel
            name={name}
            position={position}
            bio={bio}
            personalInformationData={personalInformationData}
            spokenLanguages={spokenLanguages}
            frontEndSkills={frontEndSkills}
            backEndSkills={backEndSkills}
            skills={skills}
            mediaLinks={mediaLinks}
            image={person}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <RightPanel
            image={background}
            face={person2}
            mainPhrase={mainPhrase}
            codingPhrases={codingPhrases}
            achievements={achievements}
            services={services}
            recommendations={recommendations}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
