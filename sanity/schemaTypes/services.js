export default {
  name: 'services',
  title: 'Service',
  type: 'document',
  fields: [
    {
    name: 'order',
    title: 'Display Order',
    type: 'number',
    description: 'Controls the display order of services in the menu',
    validation: Rule => Rule.required().integer().min(1)
    },
    {
      name: 'title',
      title: 'Main Service Title (Ex: Oracle JD Edwards)',
      type: 'string',
      description: 'Controls the display order of services in the menu',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Main Service Slug - Click generate to auto-generate',
      type: 'slug',
      description: 'Controls the display order of services in the menu',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'overview',
      title: 'Description of the Service',
      type: 'array',
      description: 'Controls the display order of services in the menu',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Main Service Image',
      type: 'image',
      description: 'Controls the display order of services in the menu',
    },
    {
      name: 'service',
      title: 'Services Section - Click add item to add sub services',
      type: 'array',
      description: 'Controls the display order of services in the menu',
      of: [
        {
          type: 'object',
          name: 'header',
          title: 'Section Header',
          fields: [
            {
              name: 'title',
              title: 'Title of the section (Ex: Our Services / Servies We Offer)',
              type: 'string',
              description: 'Controls the display order of services in the menu',
            },
            {
              name: 'description',
              title: 'Description of the section',
              type: 'text',
              description: 'Controls the display order of services in the menu',
            },
            {
              name: 'cards',
              title: 'Service Cards - Click add item to add service cards',
              type: 'array',
              description: 'Controls the display order of services in the menu',
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
      description: 'Controls the display order of services in the menu',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          description: 'Controls the display order of services in the menu',
          fields: [
            {
              name: 'title',
              title: 'Section Title (Ex: What is Oracle JD Edwards / Key Benefits)',
              type: 'string',
              description: 'Controls the display order of services in the menu',
            },
            {
              name: 'slug',
              title: 'Slug - Click generate to auto-generate',
              type: 'slug',
              description: 'Controls the display order of services in the menu',
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
              type: 'text',
              description: 'Controls the display order of services in the menu',
            },
            {
              name: 'type',
              title: 'Section Type - Choose Text Block for What is.. , List Block for Key Benefits',
              type: 'string',
              description: 'Controls the display order of services in the menu',
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
              description: 'Controls the display order of services in the menu',
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
  select: {
    title: 'title',
    order: 'order'
  },
  prepare(selection) {
    const { title, order } = selection
    return {
      title: `${order ? order + ' - ' : ''}${title}`
    }
  }
}
}