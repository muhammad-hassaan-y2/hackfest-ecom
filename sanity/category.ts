import { defineField, defineType } from 'sanity'

export default defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Category Name",
            description: "The name/title of the category",
          
        }),
    ],
})