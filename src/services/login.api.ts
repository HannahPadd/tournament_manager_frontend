import axios from "axios";
import { createLoginRequest } from "../models/requests/login-requests";

export async function login(request: createLoginRequest) {
    try {
        const response = await axios.post("login/" + request);
        return response.data;
    } catch (error) {
        console.error("Error logging player in:", error);
        throw new Error("Unable to log in.");
    }
}