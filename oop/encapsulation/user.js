const user = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends
  },
})

module.exports = {
  makeUser: user
}
