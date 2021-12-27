import Product from '../../../models/Product'


export default async (req,res) =>{

    switch (req.method) {
        case 'GET':
            await getProduct(req,res)
            break;
        case 'DELETE':
            console.log('switch delete ke andar')
            await deleteProduct(req,res)
            break;

           
    
        default: 
            break;
    }




    
}



const getProduct = async (req,res) =>{
    
    const {pid} = req.query
     const product = await Product.findOne({_id:pid})
    res.status(200).json(product)    
}


const deleteProduct = async (req,res) =>{
    console.log('delete ke andar')

    const {pid} = req.query
    await Product.findByIdAndDelete({_id:pid})
    res.status(200).json({})  
}