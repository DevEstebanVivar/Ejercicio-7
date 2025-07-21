import React from 'react';
import { Box, Typography, Avatar, Link, Paper } from '@mui/material';
import profile from '../assets/profile.jpg';

const About = () => (
  <Paper elevation={3} sx={{ maxWidth: 800, margin: 'auto', p: 4, borderRadius: 4, mt: 4 }}>
    <Box textAlign="center">
      <Avatar src={profile} sx={{ width: 120, height: 120, margin: 'auto', boxShadow: 3 }} />
      <Typography variant="h4" mt={2}>Esteban Vivar</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Estudiante de Ingeniería en Software | Desarrollador Full Stack | Apasionado por la Ciberseguridad
      </Typography>
      <Typography variant="body1" mt={2} sx={{ color: 'text.secondary' }}>
        Me caracterizo por mi actitud positiva, responsabilidad y compromiso con la mejora continua.
        Tengo experiencia en desarrollo de software, soporte técnico y aseguramiento de la calidad,
        y me apasiona construir soluciones seguras, escalables y eficientes.
      </Typography>
      <Typography variant="body2" mt={3}>
        <Link href="http://www.linkedin.com/in/devestebanvivar" target="_blank">
          LinkedIn: devestebanvivar
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Correo: esteban.vivar.moncayo@hotmail.com | Ubicación: Quito, Ecuador
      </Typography>
    </Box>
  </Paper>
);
export default About;
