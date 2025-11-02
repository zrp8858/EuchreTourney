import React from 'react';
import { Box, Typography, Modal, Button, TextField } from '@mui/material';

function AddPlayerModal({ open, handleAddClose }) {
  return (
    <Modal
      open={open}
      onClose={handleAddClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 400,
          textAlign: 'center',
        }}
      >
        <Typography id="add-leaderboard-modal" variant="h6" sx={{ mb: 2 }}>
          Add Player
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{
            mb: 3,
            '& label.Mui-focused': {
              color: 'red',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'red',
              },
            },
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleAddClose}
            sx={{
              backgroundColor: 'red',
              color: 'black',
              '&:hover': {
                backgroundColor: '#cc0000',
              },
            }}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            onClick={handleAddClose}
            sx={{
              borderColor: 'red',
              color: 'black',
              '&:hover': {
                borderColor: '#cc0000',
                backgroundColor: 'rgba(255,0,0,0.1)',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddPlayerModal;
