// API base URL — swap this with your real backend URL
const BASE = "http://localhost:3000/api";

// Helper that injects the auth token and handles errors consistently
async function request(path, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || data.message || "Something went wrong");
  }

  return data;
}

// ── Auth ─────────────────────────────────────────────────
export const authAPI = {
  login:   (body) => request("/users/login",   { method: "POST", body: JSON.stringify(body) }),
  register:(body) => request("/users/register",{ method: "POST", body: JSON.stringify(body) }),
  profile: ()     => request("/users/profile"),
};

// ── Stats ────────────────────────────────────────────────
export const statsAPI = {
  getAll:  ()     => request("/stats"),
  update:  (body) => request("/stats", { method: "PUT",  body: JSON.stringify(body) }),
};

// ── Services ─────────────────────────────────────────────
export const servicesAPI = {
  getAll:  ()     => request("/services"),
  create:  (body) => request("/services",      { method: "POST",   body: JSON.stringify(body) }),
  update:  (id, body) => request(`/services/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  delete:  (id)   => request(`/services/${id}`,{ method: "DELETE" }),
};

// ── Banks ────────────────────────────────────────────────
export const banksAPI = {
  getAll:  ()     => request("/banks"),
  create:  (body) => request("/banks",      { method: "POST",   body: JSON.stringify(body) }),
  update:  (id, body) => request(`/banks/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  delete:  (id)   => request(`/banks/${id}`,{ method: "DELETE" }),
};

// ── Team ─────────────────────────────────────────────────
export const teamAPI = {
  getAll:  ()     => request("/team"),
  create:  (body) => request("/team",      { method: "POST",   body: JSON.stringify(body) }),
  update:  (id, body) => request(`/team/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  delete:  (id)   => request(`/team/${id}`,{ method: "DELETE" }),
};

// ── Quote Requests ────────────────────────────────────────
export const quotesAPI = {
  getAll:  ()     => request("/quotes"),
  update:  (id, body) => request(`/quotes/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  delete:  (id)   => request(`/quotes/${id}`,{ method: "DELETE" }),
};

// ── Contact Messages ──────────────────────────────────────
export const messagesAPI = {
  getAll:  ()     => request("/messages"),
  delete:  (id)   => request(`/messages/${id}`,{ method: "DELETE" }),
};

// ── Inventory / Parts ─────────────────────────────────────
export const inventoryAPI = {
  getAll:  ()     => request("/inventory"),
  create:  (body) => request("/inventory",      { method: "POST",   body: JSON.stringify(body) }),
  update:  (id, body) => request(`/inventory/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  delete:  (id)   => request(`/inventory/${id}`,{ method: "DELETE" }),
};
