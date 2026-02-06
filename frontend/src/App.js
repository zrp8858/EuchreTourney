import { useState } from "react";
import { Box, Typography, Container, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReplayIcon from '@mui/icons-material/Replay';
import AddPlayerModal from "./AddPlayer";
import EditPointsModal from "./EditPoints";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  const [addOpen, setAddOpen] = useState(false);
  const [editPointsOpen, setEditPointsOpen] = useState(false);

  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const handleEditPointsOpen = () => setEditPointsOpen(true);
  const handleEditPointsClose = () => {
    setEditPointsOpen(false);
    setSelectedPlayerId(null);
  };

  const handleAddPlayer = (name) => {
    setPlayers((prev) => [...prev, { id: crypto.randomUUID(), name, points: 0 }]);
  };

  const handleDeletePlayer = (id) => {
    setPlayers((prev) => prev.filter((player) => player.id !== id));
  };

  const handleEditPoints = (points) => {
    setPlayers((prev) => {
      const updated = prev.map((player) =>
        player.id === selectedPlayerId ? { ...player, points } : player
      );

      return [...updated].sort((a, b) => b.points - a.points);
    });
  };

  return (
    <Container sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="h2" sx={{ mb: 3, fontFamily: "Blue Winter" }}>
        Euchre Tournament Scoreboard
      </Typography>

      <Box sx={{ position: "relative", mb: 2 }}>
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 3 }} />
        <Divider
          orientation="vertical"
          sx={{
            position: "fixed",
            left: "50%",
            borderRightWidth: 3,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: "Blue Winter", color: "#950606" }}>Leaderboard</Typography>

            <IconButton
              size="small"
              onClick={handleAddOpen}
              sx={{
                position: "absolute",
                right: "50%",
                transform: "translateX(110px)",
                border: "1px solid",
                width: 20,
                height: 20,
                color: "#3b3b3b"
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ mt: 2, width: "100%" }}>
            {players.map((player) => (
              <Box
                key={player.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "150px auto 150px",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    size="small"
                    onClick={() => handleDeletePlayer(player.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Typography sx={{ textAlign: "center", fontFamily: "Blue Winter" }}>
                  {player.name} - {player.points}
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    size="small"
                    onClick={() => {
                      setSelectedPlayerId(player.id);
                      handleEditPointsOpen();
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontFamily: "Blue Winter", color: "#950606" }}>Matchups</Typography>

            <IconButton
              size="small"
              // onClick={handleGenerateMatchups}
              sx={{
                position: "absolute",
                right: "50%",
                transform: "translateX(90px)",
                border: "1px solid",
                width: 20,
                height: 20,
                color: "#3b3b3b",
              }}
            >
              <ReplayIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <AddPlayerModal
        open={addOpen}
        handleAddClose={handleAddClose}
        onAddPlayer={handleAddPlayer}
      />

      <EditPointsModal
        open={editPointsOpen}
        handleEditPointsClose={handleEditPointsClose}
        onEditPoints={handleEditPoints}
      />
    </Container>
  );
}

export default App;
