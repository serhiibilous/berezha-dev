import React, { useState } from 'react'

export function useFetch({ url }) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function fetchData(data) {
    setIsLoading(true)

    setTimeout(() => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.text())
        .then(() => {
          setIsSuccess(true)
        })
        .catch(() => {
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, 1000)
  }

  return [isSuccess, isError, isLoading, fetchData]
}
