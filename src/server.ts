import { server, app } from "./app";

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
