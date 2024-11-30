const formatPrice = (price: Number) => {
    if(!price) return 0
    
    return price.toLocaleString('fr-FR')
}

export default {
    formatPrice
}