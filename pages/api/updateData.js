import Product from '../../models/Product'


export default async (req,res) =>{
    
 
  const {name,price,description,userId,collect,mediaUrl} =  req.body
  await Product.findByIdAndUpdate({_id:userId},{name,price,description,collect,mediaUrl})
  res.status(200).json({})  
      
}