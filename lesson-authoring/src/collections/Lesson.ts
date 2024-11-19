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
    },
    {
      name: 'introduction',
      type: 'array',
      fields: [
        {
          name: 'dialogue',
          type: 'text',
        },
      ],
    },
    {
      name: 'activities',
      type: 'relationship',
      relationTo: 'activities',
      hasMany: true,
    },
  ],
}