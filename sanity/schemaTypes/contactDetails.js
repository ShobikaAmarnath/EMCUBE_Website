export default {
    name: 'contactDetails',
    title: 'Contact Details',
    type: 'document',

    fields: [
        {
            name: 'footerAbout',
            title: 'Footer About Section',
            type: 'text',
            validation: (Rule) =>
                Rule.required().min(10).max(200).error('Footer about section is required and should be between 10 to 200 characters.'),
        },
        {
            name: 'emails',
            title: 'Email Addresses',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(3)
                    .error('You must provide 1 to 3 email addresses.'),
        },
        {
            name: 'phoneNumbers',
            title: 'Phone Numbers',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) =>
                Rule.required()
                    .min(1)
                    .max(3)
                    .error('You must provide 1 to 3 phone numbers.'),
        },
        {
            name: 'address',
            title: 'Office Address',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().error('Address is required.'),
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'url' }],
            validation: (Rule) =>
                Rule.max(5).error('You can provide up to 5 social media links.'),
        }
    ],
};