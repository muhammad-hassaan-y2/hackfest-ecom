import { defineField } from "sanity";

export const product = {
    
    name: "product",
    type: 'document',
    title: "Product",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Product Title",
            description: "The name/title of the product",
        }),
        defineField({
            name: "sizes",
            type: "array",
            title: "Sizes",
            of: [
                {
                    type: "object",
                    name: "productSize",
                    title: "Product Size",
                    fields: [
                        defineField({
                            name: "size",
                            type: "string",
                            title: "Size",
                            options: {
                                list: [
                                    { title: 'XS', value: 'XS' },
                                    { title: 'S', value: 'S' },
                                    { title: 'M', value: 'M' },
                                    { title: 'L', value: 'L' },
                                    { title: 'XL', value: 'XL' },
                                ],
                                layout: 'dropdown'
                            },
                            validation: (Rule: any) => Rule.required()
                        }),
                        defineField({
                            name: "quantity",
                            type: "number",
                            title: "Quantity",
                            description: "The quantity of this size available",
                            validation: (Rule: any) => Rule.required()
                        }),
                    ]
                }
            ]
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Price",
            description: "The price of the product"
        }),
        defineField({
            name: "productDetails",
            type: "text",
            title: "Product Details",
            description: "Detailed information about the product"
        }),
        defineField({
            name: "productCare",
            type: "array",
            title: "Product Care",
            description: "Care instructions for the product",
            of: [{ type: "string" }]
        }),
        defineField({
            name: "sku",
            type: "string",
            title: "SKU",
            description: "The SKU of this product",
            validation: (Rule: any) => Rule.required(),
        }),

        defineField( {
            name: "image",
            title: "Product Image",
            type: "array",
            of: [{
                name: "img",
                title: "Image",
                type: "image"
            }]
            
        }),
       

        
         defineField({
          name: "category",
          title: "Product Category",
          type: "reference",
          to: [
            {
            type: "category"
          },
      ]
        })
    ]
}