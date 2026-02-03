import { useState } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";

function AddPlayerModal({ open, handleAddClose, onAddPlayer }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName("");
      handleAddClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleAddClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "lightgray",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          width: 400,
          textAlign: "center",
          border: "3px solid #950606",
        }}
      >
        <Typography id="add-leaderboard-modal" variant="h6" sx={{ mb: 2 }}>
          Add Player
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: 3,
            "& label.Mui-focused": { color: "#950606" },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": { borderColor: "#950606" },
            },
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              backgroundColor: "#950606",
              color: "black",
              "&:hover": { backgroundColor: "#cc0000" },
            }}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            onClick={handleAddClose}
            sx={{
              borderColor: "#950606",
              color: "black",
              "&:hover": {
                borderColor: "#950606",
                backgroundColor: "rgba(204,0,0,0.1)",
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
