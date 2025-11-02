import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

function App() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Euchre Tournament Scores
      </Typography>

      <Box sx={{ position: 'relative', mb: 2 }}>
        <Divider
          variant="fullWidth"
          sx={{ borderBottomWidth: 3 }}
        />

        <Divider
          orientation="vertical"
          sx={{
            position: 'absolute',
            left: '50%',
            height: '100px',
            borderRightWidth: 3,
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Leaderboard</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">Matchups</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
