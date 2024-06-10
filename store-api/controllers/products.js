const Product = require('../models/product')


const getAllProductStatic = async (req,res)=>{
    const products = await Product.find({
        name: "vase table"
    })
    res.status(200).json({
        products , nbHits : products.length  
    })
}

const getAllProducts = async (req,res)=>{
    const query = req.query
    const products = await Product.find(
        query
    )
    console.log(query)

    res.status(200).json({
        products , nbHits : products.length  
    })

}

module.exports = {
    getAllProductStatic,
    getAllProducts
}