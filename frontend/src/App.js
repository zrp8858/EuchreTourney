import React from 'react'
import { Box, Typography, Stack, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', margin: '20px' }}>
        <Typography variant="h3">Euchre Tournament Scores</Typography>
      </Box>
      <Stack 
        direction="row"
        spacing={25}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #000',
            borderRadius: 2,
            width: '100%',
            height: '100%',
          }}
        >
          <Typography variant="h6">Leaderboard</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #000',
            borderRadius: 2,
            width: '100%',
            height: '100%',
          }}
        >
          <Typography variant="h6">Matchups</Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
