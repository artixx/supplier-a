export default function request(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status + response.statusText)
    }

    return response.json()
  }).catch(error => {
    console.error(error)
    throw error
  })
}

export const getTest = () => request('http://localhost:3000')
