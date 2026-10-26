const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function api(path, options = {}) {
  const res = await fetch(`${API_URL}/api${path}`, options)

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed (${res.status})`)
  }

  return res.json()
}