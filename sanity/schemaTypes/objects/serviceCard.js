export default {
  name: 'serviceCard',
  title: 'Service Portfolio Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Card Title (Ex: JD Edwards Consulting)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Card Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: { title: 'title', media: 'image' }
  }
}