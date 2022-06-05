import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export type TService = {
  title: String;
  description: String;
};

export interface IServices {
  services: TService[];
}

export const Services = ({ services }: IServices) => {
  const [serv, setServ] = useState<TService[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (serv.length < services.length) {
        setServ((prev) => [...prev, services[serv.length]]);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      {serv && (
        <Box>
          <Box sx={{ marginBottom: "2rem" }}>
            <SXBox>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                My Services
              </Typography>
            </SXBox>
          </Box>
          <Grid container spacing={3}>
            {serv.map((m, i) => (
              <Service key={i} service={m} />
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

export interface IService {
  service: TService;
}

export const Service = ({ service }: IService) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      xl={3}
      sx={{ opacity: `${opacity}`, transition: "ease-in 250ms" }}
    >
      <Card
        sx={{
          padding: "1.8rem 0.75rem",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.title}
          </Typography>
          <Typography
            sx={{ marginTop: "1.8rem" }}
            variant="body2"
            color="text.secondary"
          >
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
