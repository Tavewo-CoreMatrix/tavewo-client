const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Wakes the API (Render's free plan sleeps after 15 minutes idle), so it is
// ready by the time the visitor sends the form. Errors are ignored.
export function wakeApi() {
  fetch(`${API_URL}/api/health`).catch(() => {});
}

export async function submitContactForm(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to submit form");
  return body;
}

// Admin-only: fetches submitted contact leads. Requires the admin token
// configured on the backend (see tavewo-server .env ADMIN_TOKEN).
export async function fetchContactSubmissions(adminToken) {
  const res = await fetch(`${API_URL}/api/contact`, {
    headers: { "x-admin-token": adminToken },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to fetch submissions");
  return body;
}

// Admin-only: deletes a single contact lead by its Mongo _id.
export async function deleteContactSubmission(adminToken, id) {
  const res = await fetch(`${API_URL}/api/contact/${id}`, {
    method: "DELETE",
    headers: { "x-admin-token": adminToken },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to delete submission");
  return body;
}

// Admin-only: sets a lead's status (new / contacted / closed) and/or notes.
export async function updateContactSubmission(adminToken, id, changes) {
  const res = await fetch(`${API_URL}/api/contact/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
    body: JSON.stringify(changes),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to update this lead");
  return body;
}
