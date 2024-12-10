import type { CollectionConfig } from 'payload'

export const Lesson: CollectionConfig = {
  slug: 'lessons',
  fields: [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        name: 'description',
        type: 'text',
        required: true,
    },
    {
        name: 'thumbnail',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },  
    { // allows the user to add 
      name: 'activities',
      type: 'array',
      fields: [
        {
          name: 'activity',
          type: 'ui',
          admin: {
            components: {
              Field: "@/fields/ActivityField",
            }
          }
        },
      ],
    },
  ], //end of fields
}