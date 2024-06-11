const Product = require('../models/product')


const getAllProductStatic = async (req,res)=>{
    const search = "ab"
    const products = await Product.find({}).select('name price')
    res.status(200).json({
        products , nbHits : products.length  
    })
}

const getAllProducts = async (req,res)=>{
    const {featured,name,sort,fields} = req.query
    const queryObject = {}
    
    if (featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if (name){
        queryObject.name = {$regex : name, $options:'i'}
    }
    // console.log(queryObject)
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else{
        result.sort('createdAt')
    }

    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result.select(fieldList)
    } 

    const product = await result
    res.status(200).json({
        product , nbHits : product.length  
    })
}

module.exports = {
    getAllProductStatic,
    getAllProducts
}