import Product from '../../models/Product'


export default async (req,res) =>{
    const {pid} = req.query
    await Product.findByIdAndDelete({_id:pid})
    res.status(200).json({}) 





}