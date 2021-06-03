import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 5000;

// this is callback
const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

// listen connection
app.listen(PORT, handleListening); // port, callback
