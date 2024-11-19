import type { CollectionConfig } from 'payload'

export const Activity: CollectionConfig = {
  slug: 'activities',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [],
      required: true,
    },
  ],
}