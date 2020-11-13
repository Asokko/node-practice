const {Schema, model}=require('mongoose')

const courseSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  img:String,
  userId:{
    type:Schema.Types.ObjectId,
    ref: 'User'
  }
})

courseSchema.method('toClient', function(){
  const course=this.toObject()

  course.id=couse._id
  delete course._id

  return course
})
//при созданиии новой модели mongoose присваивает id 
module.exports=model('Course', courseSchema)