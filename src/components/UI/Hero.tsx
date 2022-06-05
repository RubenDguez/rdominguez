import { Box, Grid, Typography } from "@mui/material";
import { CodingMockup } from "./CodingMockup";
import { styled } from "@mui/material/styles";

export interface IHero {
  background: any;
  face: any;
  mainPhrase: String;
  codingPhrases: String[];
}

export const Hero = ({
  background,
  face,
  mainPhrase,
  codingPhrases,
}: IHero) => {
  return (
    <StyledGridCentered
      container
      sx={{
        background: `url(${background}) fixed`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: "2rem 1rem",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{
                marginBottom: "1rem",
                fontSize: "3rem",
                textTransform: "capitalize",
                fontWeight: "800",
              }}
            >
              {mainPhrase}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledBox>
              <CodingMockup codingPhrases={codingPhrases} />
            </StyledBox>
          </Grid>
        </Grid>
      </Grid>
      <StyledGrid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "rgba(0,0,0,0.4)",
          padding: "2rem",
        }}
      >
        <img
          src={`${face}`}
          alt="face"
          width={200}
          style={{ borderRadius: "50%" }}
        />
      </StyledGrid>
    </StyledGridCentered>
  );
};

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const StyledGridCentered = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.75rem",
  },
}));
