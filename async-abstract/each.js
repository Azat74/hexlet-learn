const each = (coll, iteratee, callback = () => {}) => {
  const oncedCallback = once(callback)
  if (coll.length === 0) return callback(null)

  let completed = 0
  const cb = err => {
    if (err) return oncedCallback(err)
    completed++
    if (completed === coll.length) {
      oncedCallback(null)
    }
  }
  coll.forEach(item => iteratee(item, cb))
}
