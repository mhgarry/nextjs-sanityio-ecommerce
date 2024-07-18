import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name of the category',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Category slug',
            options: { source: 'name' }
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Category image',
        })
    ]
})