const hashTagModel = require('../models/hashTag')

class HashtagRepository {
  async create(data) {
    try {
      const tag = await hashTagModel.create(data)
      return tag
    } catch (error) {
      console.log(error)
    }
  }

  // here data is in form of array of objects

  async bulkCreate(data) {
    try {
      const tags = hashTagModel.insertMany(data)
      return tags
    } catch (error) {
      console.log(error)
    }
  }

  async get(tag_Id) {
    try {
      const tag = await hashTagModel.findById(tag_Id)
      return tag
    } catch (error) {
      console.log(error)
    }
  }

  async destroy(tag_Id) {
    try {
      const tag = await hashTagModel.findByIdAndRemove(tag_Id)
      return tag
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = HashtagRepository
