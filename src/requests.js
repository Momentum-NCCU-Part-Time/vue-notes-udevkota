const fetchURL = 'http://localhost:3000/notes'

export const getNotes = () => {
  return fetch(fetchURL).then((response) => response.json())
}

export const createNote = (note) => {
  const { title, body } = note
  return fetch(fetchURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, createdAt: new Date() })
  }).then((response) => response.json())
}

export const updateNote = (note) => {
  const { id, title, body } = note
  return fetch(`${fetchURL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then((response) => response.json())
}

export const deleteNote = (id) => {
  return fetch(`${fetchURL}/${id}`, {
    method: 'DELETE'
  }).then((response) => response.json())
}