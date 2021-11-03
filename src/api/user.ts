import client from "./client";

const register = (data: Object) => client.post("/api/users", data);

export default { register }