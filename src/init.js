import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

// this is callback
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
