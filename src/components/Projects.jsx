import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1.' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2.' }
];

const Projects = () => (
  <Box my={4}>
    <Typography variant="h5">Proyectos</Typography>
    <Grid container spacing={2}>
      {projects.map((p, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{p.title}</Typography>
              <Typography>{p.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
