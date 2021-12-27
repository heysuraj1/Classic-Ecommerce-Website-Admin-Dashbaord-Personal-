import jwt from 'jsonwebtoken'

function Authenticated (icomponent){
    return (req,res)=>{
        const {authorization} = req.headers
        if(!authorization){
        return res.status(401).json({error:"you must logged in"})
        }
        try {
            const {userId} =  jwt.verify(authorization,process.env.JWT_SECRET)   // <===<< CHECK HERE ALSO
            req.userId = userId
            return icomponent(req,res)

        } catch (err) {
            console.log(err)
            return res.status(401).json({error:"User id ke sath kuch gadbad hai"})            
        }
    }
}
export default Authenticated;