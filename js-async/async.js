// Task 3
async function fetchComments () {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments/1"
    )
    const comments = await response.json()
    return comments
  } catch (error) {
    console.error("Помилка при отриманні коментарів", error)
    throw error
  }
}

async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    )
    const posts = await response.json()
    return posts
  } catch (error) {
    console.error("Помилка при отриманні постів", error)
    throw error
  }
}

async function fetchData() {
  const commentsPromise = fetchComments()
  const postsPromise = fetchPosts()

  try {
    const [comments, posts] = await Promise.all([
      commentsPromise,
      postsPromise
    ])
    console.log("Результат виконання Promise.all:")
    console.log("Коментарі:", comments)
    console.log("Пости:", posts)
  } catch (error) {
    console.error("Помилка при виконанні Promise.all:", error)
  }

  try {
    const result = await Promise.race([commentsPromise, postsPromise])
    console.log('Результат виконання Promise.race:', result)
  } catch (error) {
    console.error("Помилка при виконанні Promise.race:", error)
  }
}

fetchData()
