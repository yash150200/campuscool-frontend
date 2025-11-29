// client/src/lib/locksApi.js
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export async function getLocks() {
  const res = await fetch(`${API_BASE}/api/admin/locks`);
  if (!res.ok) throw new Error("Failed to fetch locks");
  return res.json();
}

export async function setLock(page, locked, adminPass) {
  const res = await fetch(`${API_BASE}/api/admin/locks/${page}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-pass": adminPass || "",
    },
    body: JSON.stringify({ locked }),
  });
  if (!res.ok) throw new Error("Failed to update lock");
  return res.json();
}
