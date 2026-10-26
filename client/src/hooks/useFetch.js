import { useEffect, useState } from 'react'

export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true)
    setError(null)

    fetcher({ signal: controller.signal })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, deps)

  return { data, loading, error }
}