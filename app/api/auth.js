import client from "./client";

const login = (email, password) => client.post("/api/auth", {email, password});

export default { login }