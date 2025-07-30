export default {
    name: 'contactDetails',
    title: 'Contact Details',
    type: 'document',

    fields: [
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
    ],
};