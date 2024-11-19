import type { CollectionConfig } from 'payload'

export const VocabularyItem: CollectionConfig = {
  slug: 'vocabulary-items',
  fields: [
    {
      name: 'taino_word',
      type: 'text',
    },
    {
      name: 'english_word',
      type: 'text',
    },
    {
      name: 'audio_url',
      type: 'text',
    },
    {
      name: 'image_url',
      type: 'text',
    }
  ],
}