export type Item = {
    attributes: {
      brand: string,
      category: string,
      current_unit_price: number,
      has_offer: boolean,
      image_url: string, 
      max_sale_quantity: number,
      min_sale_quantity: number,
      min_sale_quantity_pack: false,
      name: string,
      original_unit_price: string,
      price_without_tax: number,
      options: any[],
      quantity: number,
      size: string,
      stock: number,
      url: string
    }
}