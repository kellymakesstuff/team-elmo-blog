import post from "./App"
// import api from "./apiConfig"


export const getPosts = async () => {
  try {
    const response = await post.get("/posts")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPost = async() => {
  try{
    const response = await post.get(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createPost = async posts => {
  try {
    const response = await post.post('/posts', posts)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePost = async (id, posts) => {
  try {
    const response = await post.put(`/posts/${id}`, posts)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async id => {
  try {
    const response = await post.delete(`/posts/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}