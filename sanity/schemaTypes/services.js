export default {
  name: 'services',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Service Title (Ex: Oracle JD Edwards)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Main Service Slug - Click generate to auto-generate',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'overview',
      title: 'Description of the Service',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Main Service Image',
      type: 'image',
    },
    {
      name: 'service',
      title: 'Services Section - Click add item to add sub services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'header',
          title: 'Section Header',
          fields: [
            {
              name: 'title',
              title: 'Title of the section (Ex: Our Services / Servies We Offer)',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description of the section',
              type: 'text'
            },
            {
              name: 'cards',
              title: 'Service Cards - Click add item to add service cards',
              type: 'array',
              of: [{ type: 'serviceCard' }]
            }
          ]
        }
      ]
    },
    {
      name: 'sections',
      title: 'What is and Key Benefits Section',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title (Ex: What is Oracle JD Edwards / Key Benefits)',
              type: 'string'
            },
            {
              name: 'slug',
              title: 'Slug - Click generate to auto-generate',
              type: 'slug',
              options: {
                source: doc => `${doc.title}-${doc._id}`,
                slugify: input => input
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w-]+/g, '')
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Section Description - Text under the title (Leave empty if not needed)',
              type: 'text'
            },
            {
              name: 'type',
              title: 'Section Type - Choose Text Block for What is.. , List Block for Key Benefits',
              type: 'string',
              options: {
                list: [
                  { title: 'Text Block', value: 'text' },
                  { title: 'List Block', value: 'list' }
                ]
              }
            },
            {
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                { type: 'block' }, // for text or list
              ]
            },
          ]
        }
      ]
    }
  ],
  preview: {
    select: { title: 'title' }
  }
}