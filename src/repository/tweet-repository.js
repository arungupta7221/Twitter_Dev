const tweetModel = require('../models/Tweet')

class TweetRepository {
  async create(data) {
    try {
      const tweet = await tweetModel.create(data)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }

  async get(tweet_Id) {
    try {
      const tweet = await tweetModel.findById(tweet_Id)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }

  async getWithComments(tweet_Id) {
    try {
      const tweet = await tweetModel.findById(tweet_Id).populate({ path: 'comments' })
      return tweet
    } catch (error) {
      console.log(error)
    }
  }

  // async update(tweet_Id, data) {
  //   try {
  //     const tweet = await tweetModel.findByIdAndUpdate(tweet_Id, data, { new: true }) // here new:true is because it return prev value not latest value
  //     return tweet
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async destroy(tweet_Id) {
    try {
      const tweet = await tweetModel.findByIdAndRemove(tweet_Id)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await tweetModel.find().skip(offset).limit(limit)
      return tweet
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = TweetRepository
