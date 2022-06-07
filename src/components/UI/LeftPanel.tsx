import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import {
  TImage,
  TMediaLink,
  TPersonalInformation,
  TSkill,
  TSpokenLanguage,
} from "../../types";
import { MediaLinks } from "./MediaLinks";
import { PersonalInf } from "./PersonalInformation";
import { Skills } from "./Skills";
import { SkillsWithProgressBar } from "./SkillsWithProgressBar";
import { SpokenLanguages } from "./SpokenLanguages";

export interface ILeftPanel {
  name: String;
  position: String;
  bio: String;
  personalInformationData: TPersonalInformation[];
  spokenLanguages: TSpokenLanguage[];
  frontEndSkills: TSkill[];
  backEndSkills: TSkill[];
  skills: TSkill[];
  mediaLinks: TMediaLink[];
  image: TImage;
}

export const LeftPanel = ({
  name,
  position,
  bio,
  personalInformationData,
  spokenLanguages,
  frontEndSkills,
  backEndSkills,
  skills,
  mediaLinks,
  image,
}: ILeftPanel) => {
  return (
    <Card>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <CardMedia
          sx={{
            borderRadius: "50%",
            height: 160,
            width: 160,
          }}
          component="img"
          alt="ruben dominguez"
          image={image}
        />
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="caption">{position}</Typography>
      </Box>
      <CardContent>
        <Divider />
        {/* begin personal information */}
        <Container sx={{ my: 2 }}>
          <PersonalInf personalInformationData={personalInformationData} />
        </Container>
        {/* end personal information */}

        {/* begin spoken languages */}
        <Divider />
        <Container sx={{ my: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <SpokenLanguages spokenLanguages={spokenLanguages} />
          </Grid>
        </Container>
        {/* end spoken languages */}

        {/* begin front end skills */}
        <Divider />
        <Box
          sx={{
            textAlign: "center",
            marginTop: "1rem",
            textTransform: "uppercase",
          }}
        >
          <Typography variant="caption">Front End Skills</Typography>
        </Box>
        <Container sx={{ my: 2 }}>
          <SkillsWithProgressBar skills={frontEndSkills} />
        </Container>
        {/* end front end skills */}

        {/* begin back end skills */}
        <Divider />
        <Box
          sx={{
            textAlign: "center",
            marginTop: "1rem",
            textTransform: "uppercase",
          }}
        >
          <Typography variant="caption">Back End Skills</Typography>
        </Box>
        <Container sx={{ my: 2 }}>
          <SkillsWithProgressBar skills={backEndSkills} />
        </Container>
        {/* end back end skills */}

        {/* begin other skills */}
        <Divider />
        <Container sx={{ my: 2 }}>
          <Skills skills={skills} />
        </Container>
        {/* end other skills */}

        {/* begin media links */}
        <Divider />
        <Container sx={{ my: 2 }}>
          <MediaLinks mediaLinks={mediaLinks} />
        </Container>
        {/* end media links */}
      </CardContent>
    </Card>
  );
};
