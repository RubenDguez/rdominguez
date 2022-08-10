import { Grid } from '@mui/material';
import { TImage } from '../../types';
import { Achievements, TAchievement } from './Achievements';
import { Hero } from './Hero';
import { Recommendations, TRecommendation } from './Recommendations';
import { Services, TService } from './Services';

export interface IRightPanel {
  image: TImage;
  face: TImage;
  mainPhrase: string;
  codingPhrases: string[];
  achievements: TAchievement[];
  services: TService[];
  recommendations: TRecommendation[];
}

export const RightPanel = ({
    image,
    face,
    mainPhrase,
    codingPhrases,
    achievements,
    services,
    recommendations,
}: IRightPanel) => {
    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Hero
                    background={image}
                    face={face}
                    mainPhrase={mainPhrase}
                    codingPhrases={codingPhrases}
                />
            </Grid>
            <Grid item xs={12}>
                <Achievements achievements={achievements} />
            </Grid>
            <Grid item xs={12}>
                <Services services={services} />
            </Grid>
            <Grid item xs={12}>
                <Recommendations recommendations={recommendations} />
            </Grid>
        </Grid>
    );
};
