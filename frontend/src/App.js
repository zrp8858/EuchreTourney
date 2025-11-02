import React, { useState } from 'react';
import { Box, Typography, Container, Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddPlayerModal from './AddPlayer';

function App() {
  const [addOpen, setAddOpen] = useState(false);

  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Euchre Tournament Scores
      </Typography>

      <Box sx={{ position: 'relative', mb: 2 }}>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3 }} />
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
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6">Leaderboard</Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={handleAddOpen}
              sx={{
                marginLeft: '5px',
                border: '1px solid',
                width: 20,
                height: 20,
                color: 'black',
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography variant="h6">Matchups</Typography>
        </Box>
      </Box>

      <AddPlayerModal open={addOpen} handleAddClose={handleAddClose} />
    </Container>
  );
}

export default App;
