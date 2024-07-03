import { defineField, defineType } from 'sanity';

export const productType = defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
        
            name: 'name',
            type: 'string',
            title: 'Name of the product',
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Product images',
            of: [{ type: 'image' }]
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description of the product',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: { source: 'name' }
        }),
        defineField({
            name: 'price',
            title: 'Price of the product',
            type: 'number',
        }),
    ]
})