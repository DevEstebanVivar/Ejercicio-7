import React from 'react';
import { Box, Typography, Chip, Grid, Paper } from '@mui/material';

const Skills = () => {
  const techSkills = [
    'Python', 'C', 'C++', 'Java', 'HTML5', 'CSS3', 'JavaScript',
    'React', 'SQL', 'Linux', 'Django', 'PostgreSQL', 'Git'
  ];

  const softSkills = [
    'Resolución de problemas', 'Comunicación efectiva', 'Trabajo bajo presión',
    'Trabajo en equipo', 'Responsabilidad', 'Puntualidad'
  ];

  const tools = ['Jira Software', 'Microsoft Office - Avanzado'];

  return (
    <Paper elevation={3} sx={{ maxWidth: 800, margin: '40px auto', p: 4, borderRadius: 4 }}>
      <Typography variant="h5" gutterBottom>Habilidades</Typography>

      <Typography variant="subtitle1" mt={2}>Técnicas</Typography>
      <Grid container spacing={1} mb={2}>
        {techSkills.map(skill => (
          <Grid item key={skill}><Chip label={skill} /></Grid>
        ))}
      </Grid>

      <Typography variant="subtitle1">Herramientas</Typography>
      <Grid container spacing={1} mb={2}>
        {tools.map(tool => (
          <Grid item key={tool}><Chip label={tool} color="primary" /></Grid>
        ))}
      </Grid>

      <Typography variant="subtitle1">Blandas</Typography>
      <Grid container spacing={1}>
        {softSkills.map(skill => (
          <Grid item key={skill}><Chip label={skill} color="secondary" variant="outlined" /></Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Skills;
