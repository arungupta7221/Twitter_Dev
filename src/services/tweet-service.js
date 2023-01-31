const { TweetRepository } = require('../repository/index')

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository()
  }
  create(data) {
    try {
      const content = data.content
      const tags = content.match(/#[a-zA-Z0-9_]+/g) // this is a regular expression which is used for extract all the hashtags from content
      tags = tags.map((tag) => tag.substring(1)) // it will remove # from tags
      console.log(tags)
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = TweetService
