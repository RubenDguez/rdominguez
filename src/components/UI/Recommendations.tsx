import CloseIcon from '@mui/icons-material/Close';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { ColorContext } from '../../theme/Color';
import { TImage } from '../../types';

const recommendationsColumns = (recommendationQuantity: number): number => {
  if (recommendationQuantity > 2) return 4;
  if (recommendationQuantity > 1) return 6;
  return 12;
};

export type TRecommendation = {
  name: string;
  title: string;
  company: string;
  comment: string;
  review: number;
  imageSrc?: TImage;
};

export interface IRecommendations {
  recommendations: TRecommendation[];
}

export const Recommendations = ({ recommendations }: IRecommendations) => {
  const [recommend, setRecommend] = useState<TRecommendation[]>([]);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (recommend.length < recommendations.length) {
        setRecommend((prev) => [...prev, recommendations[recommend.length]]);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      {recommend && (
        <Box>
          <Box sx={{ marginBottom: '2rem' }}>
            <SXBox>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Recommendations And Achievements
              </Typography>
            </SXBox>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{ opacity: `${opacity}`, transition: 'ease-in 1250ms' }}
          >
            {recommend.map((m, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={recommendations.length > 1 ? 6 : 12}
                lg={recommendationsColumns(recommendations.length)}
              >
                <Recommendation recommendation={m} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const SXBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

export interface IRecommendation {
  recommendation: TRecommendation;
  dialog?: boolean;
}

export const Recommendation = ({ recommendation, dialog }: IRecommendation) => {
  const MAX_CHARACTERS = 100;
  const [open, setOpen] = useState(false);
  const color = useContext(ColorContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <RecommendationDialog
        contents={<Recommendation dialog recommendation={recommendation} />}
        open={open}
        close={handleClose}
      />
      <Card
        sx={{
          overflow: 'visible',
          padding: '1rem 1rem 0rem 1rem',
        }}
      >
        {recommendation.imageSrc && (
          <CardMedia
            component="img"
            src={`${recommendation.imageSrc}`}
            alt={`${recommendation.name}`}
            sx={{
              marginLeft: 'auto',
              borderRadius: '50%',
              width: 120,
              height: 120,
              zIndex: 10,
            }}
          />
        )}

        <CardContent sx={{ position: 'relative' }}>
          <Box>
            <Box>
              <Typography variant="h5">{recommendation.name}</Typography>
              <Typography sx={{ color: 'lightgray' }}>
                {recommendation.company}
              </Typography>
              <Typography sx={{ color: 'lightgray' }}>
                <i>{recommendation.title}</i>
              </Typography>
              <Divider sx={{ marginTop: '0.5rem' }} />
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: 'lightgray',
                      marginTop: `${dialog ? '0.5rem' : '2rem'}`,
                      minHeight: '100px',
                      maxHeight: '100px',
                      overflowY: 'scroll',
                      marginBottom: '30px',
                    }}
                  >
                    {dialog
                      ? recommendation.comment
                      : recommendation.comment.substring(0, MAX_CHARACTERS)}
                    {dialog
                      ? ''
                      : recommendation.comment.length > MAX_CHARACTERS && '...'}
                  </Typography>
                </Grid>

                <Grid container sx={{ minHeight: 40 }}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Rating
                      size="small"
                      value={recommendation.review}
                      readOnly
                      sx={{ color: `${color}` }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {recommendation.comment.length > MAX_CHARACTERS && !dialog && (
                      <ReadMoreIcon
                        onClick={handleOpen}
                        fontSize="large"
                        sx={{
                          color: `${color}`,
                          alignSelf: 'end',
                          cursor: 'pointer',
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

interface IRecommendationDialog {
  contents?: ReactNode;
  open: boolean;
  close: () => void;
}

const RecommendationDialog = ({
  contents,
  open,
  close,
}: IRecommendationDialog) => {
  const color = useContext(ColorContext);
  return (
    <Dialog open={open} onClose={close} fullWidth>
      <CloseIcon
        onClick={close}
        fontSize="large"
        sx={{
          color: `${color}`,
          alignSelf: 'end',
          cursor: 'pointer',
          margin: '1rem',
        }}
      />
      {contents}
    </Dialog>
  );
};
