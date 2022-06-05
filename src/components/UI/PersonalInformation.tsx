import { Box, Divider, Grid, Typography } from "@mui/material";
import { TPersonalInformation } from "../../types";

export interface IPersonalInformation {
  personalInformationData: TPersonalInformation[];
}

export const PersonalInf = ({
  personalInformationData,
}: IPersonalInformation) => {
  return (
    <>
      {personalInformationData.map((m, i) => (
        <Box key={i}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: "left",
              }}
            >
              <Typography variant="caption">{m.key}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: "right",
                fontWeight: "600",
              }}
            >
              <Typography variant="caption">{`${m.description}`}</Typography>
            </Grid>
          </Grid>
          {personalInformationData.length - 1 > i && (
            <Divider sx={{ marginTop: "0.65rem" }} />
          )}
        </Box>
      ))}
    </>
  );
};
