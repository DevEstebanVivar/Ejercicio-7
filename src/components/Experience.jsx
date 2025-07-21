import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const jobs = [
  {
    title: 'American Transportation & Limo Service',
    role: 'Junior IT Associate',
    period: 'Febrero 2025 - Actualidad'
  },
  {
    title: 'Payconer',
    role: 'Practicante de Desarrollo Web',
    period: 'Diciembre 2024 - Febrero 2025'
  },
  {
    title: 'Banco Pichincha',
    role: 'Practicante de QA (Aseguramiento de la Calidad)',
    period: 'Febrero 2024 - Julio 2024'
  }
];

const Experience = () => (
  <Paper elevation={3} sx={{ maxWidth: 800, margin: '40px auto', p: 4, borderRadius: 4 }}>
    <Typography variant="h5" gutterBottom>Experiencia Profesional</Typography>
    <List>
      {jobs.map((job, i) => (
        <ListItem key={i} alignItems="flex-start">
          <ListItemText
            primary={`${job.role} en ${job.title}`}
            secondary={job.period}
            primaryTypographyProps={{ fontWeight: 500 }}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default Experience;
