const paginate = (followers) => {
  // how many items in each page
  const itemsPerPage = 10
  // how many pages we have
  const pages = Math.ceil(followers.length / itemsPerPage)
  // return data in array of arrays
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })
  return newFollowers
}

export default paginate
