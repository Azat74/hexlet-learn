const func = (user1, user2) => {
  const commonUsers = []

  user1.getFriends().forEach(item => {
    user2.getFriends().forEach(item2 => {
      if (item2.id === item.id) {
        commonUsers.push(item2)
      }
    })
  })
  return commonUsers
}

module.exports = {
  getMutualFriends: func
}
