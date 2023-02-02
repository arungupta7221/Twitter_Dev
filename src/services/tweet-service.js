import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository()
    this.hashtagRepository = new HashtagRepository()
  }
  async create(data) {
    try {
      const content = data.content
      let tags = content.match(/#[a-zA-Z0-9_]+/g) // this is a regular expression which is used for extract all the hashtags from content
      tags = tags.map((tag) => tag.substring(1)) // it will remove # from tags => ['Excited','Fun', 'Happy', 'Developer','Sad']
      const tweet = await this.tweetRepository.create(data)
      let alreadyPresentags = await this.hashtagRepository.findByName(tags)
      let titleOfAlreadyPresentTag = alreadyPresentags.map((tag) => tag.title) // this will return all the tags which are already in database and it will return only title =>[ 'Fun', 'Happy', 'Developer' ]
      let filterTags = tags.filter((tag) => !titleOfAlreadyPresentTag.includes(tag)) // this will return which tags that are not present already in database(tags-alreadyPresentTags) => ['Excited','Fun', 'Happy', 'Developer','Sad'] - [ 'Fun', 'Happy', 'Developer' ] = ['Excuted','Sad']
      filterTags = filterTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] }
      })

      await this.hashtagRepository.bulkCreate(filterTags) // it will create all the filtertags in database

      alreadyPresentags.forEach((tag) => {
        tag.tweets.push(tweet.id)
        tag.save()
      })
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
}
export default TweetService
