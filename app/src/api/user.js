import client from "./client";

const register = (data) => client.post("/api/users", data);

export default { register }