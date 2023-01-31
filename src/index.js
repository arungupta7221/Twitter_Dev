const express = require('express')
const App = express()
const connect = require('./config/databse')
// const tweetModel = require('./models/Tweet')
const HashtagRepository = require('./repository/hashtag-repository')
const Comment = require('./models/Comment')
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

  let repo = new HashtagRepository()
  await repo.bulkCreate([
    {
      title: 'Fun',
      tweets: [],
    },
    {
      title: 'Happy',
      tweets: [],
    },
    {
      title: 'Developer',
      tweets: [],
    },
    {
      title: 'Study',
      tweets: [],
    },
    {
      title: 'Carrer',
      tweets: [],
    },
    {
      title: 'Winter',
      tweets: [],
    },
  ])
})
