/* eslint-disable no-undef */
const { makeUser } = require('./user')
const { getMutualFriends } = require('./encapsulation')

test('getMutualFriends', () => {
  const user1 = makeUser()
  const user2 = makeUser()

  expect(getMutualFriends(user1, user2)).toEqual([])
})

test('getMutualFriends 2', () => {
  // Users's creation
  const users = [
    makeUser({ id: 2 }),
    makeUser({ id: 8 }),
    makeUser({ id: 7 }),
    makeUser({ id: 100 }),
  ]

  const user1 = makeUser({ friends: [users[0], users[1], users[3]] })
  const user2 = makeUser({ friends: [users[0], makeUser({ id: 100 }), users[2]] })
  const comparator = (a, b) => Math.sign(a.id - b.id)
  const mutualFriendsIds = getMutualFriends(user1, user2)
    .sort(comparator)
    .map((friend) => friend.id)
  const expected = [users[0], users[3]]
    .sort(comparator)
    .map((friend) => friend.id)

  expect(mutualFriendsIds).toEqual(expected)
})
