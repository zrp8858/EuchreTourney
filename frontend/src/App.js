import { useState } from "react";
import { Box, Typography, Container, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPlayerModal from "./AddPlayer";

function App() {
  const [players, setPlayers] = useState([]);

  const [addOpen, setAddOpen] = useState(false);

  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const handleAddPlayer = (name) => {
    setPlayers((prev) => [...prev, { name, points: 0 }]);
  };

  const handleDeletePlayer = (index) => {
    setPlayers(players.filter((_, idx) => idx !== index));
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Euchre Tournament Scores
      </Typography>

      <Box sx={{ position: "relative", mb: 2 }}>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3 }} />
        <Divider
          orientation="vertical"
          sx={{
            position: "absolute",
            left: "50%",
            height: "100px",
            borderRightWidth: 3,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="h6">Leaderboard</Typography>
            <IconButton
              size="small"
              color="primary"
              onClick={handleAddOpen}
              sx={{
                marginLeft: "5px",
                border: "1px solid",
                width: 20,
                height: 20,
                color: "black",
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ mt: 2 }}>
            {players.map((player, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mt: 1,
                  ml: -5,
                }}
              >
                <IconButton
                  size="small"
                  onClick={() => handleDeletePlayer(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <Typography>
                  {player.name} - {player.points}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="h6">Matchups</Typography>
        </Box>
      </Box>

      <AddPlayerModal
        open={addOpen}
        handleAddClose={handleAddClose}
        onAddPlayer={handleAddPlayer}
      />
    </Container>
  );
}

export default App;
