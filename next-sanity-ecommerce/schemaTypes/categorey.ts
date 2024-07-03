import { definedType, definedField } from 'sanity'

export const categoryType = definedType({
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        definedField({
            name: 'name',
            type: 'string',
            title: 'Name of the category',
        }),
        definedField({
            name: 'slug',
            type: 'slug',
            title: 'Category slug',
            options: { source: 'name' }
        }),
    ]
})