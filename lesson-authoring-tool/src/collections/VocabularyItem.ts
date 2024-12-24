import type { CollectionConfig } from 'payload'

export const VocabularyItem: CollectionConfig = {
  slug: 'vocabulary-items',
  fields: [
    {
      name: 'taino_translation',
      type: 'text',
    },
    {
      name: 'english_translation',
      type: 'text',
    },
    // {
    //   name: 'audio_url',
    //   type: 'upload',
    //   relationTo: 'media',
    // },
    // {
    //   name: 'image_url',
    //   type: 'upload',
    //   relationTo: 'media',
    // }
  ],
}