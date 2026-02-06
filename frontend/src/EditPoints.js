import { useState } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";

function EditPointsModal({ open, handleEditPointsClose, onEditPoints }) {
  const [points, setPoints] = useState("0");

  const handleEditPoints = () => {
    const value = Number(points.trim());

    if (Number.isInteger(value)) {
      onEditPoints(value);
      setPoints(0);
      handleEditPointsClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleEditPointsClose}
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
        <Typography id="edit-points-leaderboard-modal" variant="h6" sx={{ mb: 2 }}>
          Edit Points
        </Typography>

        <TextField
          label="Points"
          variant="outlined"
          fullWidth
          value={points}
          onChange={(e) => setPoints(e.target.value)}
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
            onClick={handleEditPoints}
            sx={{
              backgroundColor: "#950606",
              color: "white",
              "&:hover": { backgroundColor: "#cc0000" },
            }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleEditPointsClose}
            sx={{
              backgroundColor: "#950606",
              color: "white",
              "&:hover": { backgroundColor: "#cc0000" },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditPointsModal;
