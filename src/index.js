import express from 'express'
import { connect } from './config/databse.js'
const App = express()

// const tweetModel = require('./models/Tweet')
// const HashtagRepository = require('./repository/hashtag-repository')
// const TweetService = require('./services/tweet-service')
import TweetService from './services/tweet-service.js'
App.listen(3000, async () => {
  console.log('server has started')
  await connect()
  console.log('database connected')

  // const tweet = await tweetModel.create({
  //   content: 'third Tweet',
  //   userEmail: 'abc@def.com',
  // })
  // console.log(tweet)

  // const tweets = await tweetModel.find()
  // console.log(tweets)
  // const tweet = await tweetModel.find({ userEmail: 'abc@abc.com' })
  // console.log(tweet)

  // const tweetRepo = new TweetRepository()
  // const tweet = await tweetRepo.get('63cd54f0bc95db2e59c76c2b')
  // const tweet = await tweetRepo.destroy('63cd54108f077eee4dcec443')
  // const tweet = await tweetRepo.update('63cd53e4f14478243d763065', {
  //   content: ' again updating content',
  // })

  // const tweet = await tweetRepo.create({ content: 'Tweet with upgraded comment' })
  // const comment = await Comment.create({ content: 'upgraded comment' })
  // console.log(tweet)
  // tweet.comments.push(comment)
  // await tweet.save()

  // const tweet = await tweetRepo.getWithComments('63ce7345f352036d65f66819')
  // const tweet = await tweetRepo.getAll(0, 3)
  // console.log(tweet)

  // const service = new TweetService()
  // const tweet = await service.create({
  //   content: 'Hi this is my #second tweet so #feeling #excited for this.',
  // })
  // console.log(tweet)

  const ser = new TweetService()
  await ser.create({
    content: 'done with #refactor',
  })
})
