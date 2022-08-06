import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type TService = {
  title: String;
  description: String;
};

export interface IServices {
  services: TService[];
}

export const Services = ({ services }: IServices) => {
  const [serv, setServ] = useState<TService[]>([]);

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
          <Box sx={{ marginBottom: '2rem' }}>
            <SXBox>
              <Typography variant='h5' sx={{ fontWeight: 600 }}>
                What I Do
              </Typography>
            </SXBox>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{ opacity: `${opacity}`, transition: 'ease-in 1250ms' }}
          >
            {serv.map((m, i) => (
              <Grid
                key={i}
                item
                xs={12}
                sm={serv.length > 1 ? 6 : 12}
                lg={serv.length > 2 ? 4 : serv.length > 1 ? 6 : 12}
              >
                <Service service={m} />
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

export interface IService {
  service: TService;
}

export const Service = ({ service }: IService) => {
  return (
    <Card
      sx={{
        padding: '1.8rem 0.75rem',
        minHeight: '250px',
        maxHeight: '250px',
        height: '250px',
      }}
    >
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {service.title}
        </Typography>
        <Divider />
        <Typography
          sx={{ marginTop: '1.8rem' }}
          variant='body2'
          color='text.secondary'
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
