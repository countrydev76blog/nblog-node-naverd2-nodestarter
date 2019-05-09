const GitHub = require('../lib/github')

require('dotenv').config({ debug: process.env.DEBUG })

describe('Integration with GitHub API with env', () => {
  let github

  beforeAll(() => {
    github = new GitHub({
      accessToken: process.env.ACCESS_TOKEN,
      baseURL: 'https://api.github.com',
    })
  })

  test('Get a user', async () => {
    const res = await github.getUser('countrydev76blog')
    expect(res).toEqual(
      expect.objectContaining({
        login: 'countrydev76blog',
      })
    )
  })
})

describe('Integration with GitHub API with dotnet', () => {
  let github

  beforeAll(() => {
    github = new GitHub({
      accessToken: process.env.ACCESS_TOKEN,
      baseURL: 'https://api.github.com',
    })
  })

  test('Get a user', async () => {
    const res = await github.getUser('countrydev76blog')
    expect(res).toEqual(
      expect.objectContaining({
        login: 'countrydev76blog',
      })
    )
  })
})