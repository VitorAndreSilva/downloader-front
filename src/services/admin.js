import api from "./api.js";

export async function fetchPendingUsers() {
    const response = await api.get("/auth/pending");
    //console.log(response.data);
    return response.data;
}

export async function approveUser(userId) {
    return api.post(`/auth/${userId}/approve/`);
}

export async function rejectUser(userId) {
    return api.post(`/auth/${userId}/reject/`);
}