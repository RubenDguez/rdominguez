import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode, useContext, useEffect, useState } from "react";
import { ColorContext } from "../../theme/Color";

export type TRecommendation = {
  name: String;
  title: String;
  comment: String;
  review: number;
  imageSrc: any;
};

export interface IRecommendations {
  recommendations: TRecommendation[];
}

export const Recommendations = ({ recommendations }: IRecommendations) => {
  const [recommend, setRecommend] = useState<TRecommendation[]>([]);

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
          <Box sx={{ marginBottom: "2rem" }}>
            <SXBox>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Recommendations
              </Typography>
            </SXBox>
          </Box>
          <Grid container spacing={3}>
            {recommend.map((m, i) => (
              <Recommendation key={i} recommendation={m} />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

const SXBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export interface IRecommendation {
  recommendation: TRecommendation;
  dialog?: boolean;
}

export const Recommendation = ({ recommendation, dialog }: IRecommendation) => {
  const MAX_CHARACTERS = 70;
  const [opacity, setOpacity] = useState(0);
  const [open, setOpen] = useState(false);
  const color = useContext(ColorContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <RecommendationDialog
        contents={<Recommendation dialog recommendation={recommendation} />}
        open={open}
        close={handleClose}
      />
      <Grid
        item
        xs={12}
        sm={dialog ? 12 : 6}
        md={dialog ? 12 : 4}
        sx={{ opacity: `${opacity}`, transition: "ease-in 250ms" }}
      >
        <Card
          sx={{
            overflow: "visible",
            padding: "1rem 1rem",
          }}
        >
          <CardMedia
            component="img"
            src={`${recommendation.imageSrc}`}
            alt={`${recommendation.name}`}
            sx={{
              marginLeft: "auto",
              borderRadius: "50%",
              width: 120,
              height: 120,
              zIndex: 10,
            }}
          />
          <CardContent sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "relative",
                minHeight: "250px",
                width: "100%",
              }}
            >
              <Box>
                <Typography variant="h5">{recommendation.name}</Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "lightgray" }}>
                  <i>{recommendation.title}</i>
                </Typography>
                <Divider sx={{ marginTop: "0.5rem" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "lightgray",
                    marginTop: `${dialog ? "0.5rem" : "2rem"}`,
                    maxHeight: "130px",
                    overflowY: "scroll",
                  }}
                >
                  {dialog
                    ? recommendation.comment
                    : recommendation.comment.substring(0, MAX_CHARACTERS)}
                  {dialog
                    ? ""
                    : recommendation.comment.length > MAX_CHARACTERS && (
                        <span>...</span>
                      )}
                </Typography>
              </Box>
              {recommendation.comment.length > MAX_CHARACTERS && !dialog && (
                <Box sx={{ marginTop: "1rem" }}>
                  <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{ backgroundColor: `${color}`, color: "white" }}
                  >
                    Read More
                  </Button>
                </Box>
              )}

              <Box
                sx={{
                  marginTop: "2rem",
                  padding: "8px 16px 4px 16px",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: "32px",
                  position: "absolute",
                  bottom: 0,
                  left: -4,
                }}
              >
                <Rating
                  name="read-only"
                  value={recommendation.review}
                  readOnly
                  sx={{ color: `${color}` }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
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
  return (
    <Dialog open={open} onClose={close} fullWidth>
      {contents}
    </Dialog>
  );
};
