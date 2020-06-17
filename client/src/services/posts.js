// import post from "./App"
import api from "./apiSetup"


export const getPosts = async () => {
  try {
    const response = await api.get("/posts")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createPost = async (posts) => {
  try {
    const response = await api.post('/posts', posts)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (id, posts) => {
  try {
    const response = await api.put(`/posts/${id}`, posts)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

