import LessonAdminComponent, { LessonAdminComponentProps } from '@/app/(payload)/admin/components/LessonAdminComponent';
import type { CollectionConfig } from 'payload'

export const Lesson: CollectionConfig = {
  slug: 'lessons',
  fields: [
    {
        name: 'cover',
        type: 'group',
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
                name: 'image',
                type: 'upload',
                relationTo: 'media',
            },
        ]
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
  ],
}