export type Cart = {
    data: {
        type: string,
        id: number,
        attributtes: {
            subtotal_price: string,
            total_price: string,
            total_items: number,
            total_vat_taxes: string,
            estimated_shipping_costs: string,
            estimated_shipping_costs_without_tax: string,
            currency_code: string
        },
        stores: {
            data: [
              {
                type: string,
                id: number,
                attributes: {
                  name: string,
                  estimated_delivery: {
                    from: {
                      quantity: number,
                      type: string
                    },
                    to: {
                      quantity: number,
                      type: string
                    }
                  },
                  slug: string,
                  shipping_costs: string,
                  shipping_name: string
                },
                relationships: {
                    items: [
                      {
                        type: string,
                        id: number,
                        attributes: {
                          name: string,
                          size: string,
                          original_unit_price: string,
                          current_unit_price: string,
                          price_without_tax: string,
                          has_offer: boolean,
                          quantity: number,
                          image_url: string,
                          url: string,
                          options: any[]
                          stock: number,
                          min_sale_quantity: number,
                          max_sale_quantity: number,
                          min_sale_quantity_pack: boolean,
                          brand: string,
                          category: string,
                          vintage: string
                        }
                      },
                      {
                        type: string,
                        id: number,
                        attributes: {
                          name: string,
                          size: string,
                          original_unit_price: string,
                          current_unit_price: string,
                          price_without_tax: string,
                          has_offer: boolean,
                          quantity: number,
                          image_url: string,
                          url: string,
                          options: {
                            other_vintage: boolean
                          },
                          stock: number,
                          min_sale_quantity: number,
                          max_sale_quantity: number,
                          min_sale_quantity_pack: boolean,
                          brand: string,
                          category: string,
                          vintage: string
                        }
                      }
                    ]
                  }
                }
              ]
            },
            messages: [
            {
                  code: string,
                  type: string,
                  message: string,
                  context: {
                    id_store: number,
                    id_discount: number,
                    code: string
                  }
            }]
    }
    }
