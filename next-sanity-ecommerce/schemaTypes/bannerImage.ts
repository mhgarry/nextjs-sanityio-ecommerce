import { defineType, defineField } from 'sanity'

export const bannerImageType = defineType({
    name: 'bannerImages',
    type: 'document',
    title: 'Banner Image',
    fields: [
        defineField({
            name: 'imageOne',
            type: 'image',
            title: 'First Image',
        }),
        defineField({
            name: 'imageTwo',
            type: 'image',
            title: 'Second Image',
        }),
    ]
})