const deskStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Contact Details')
                .child(
                    S.editor()
                        .id('contactDetails')
                        .schemaType('contactDetails')
                        .documentId('contactDetailsSingleton')
                ),

            S.listItem()
                .title('Services')
                .schemaType('services')
                .child(S.documentTypeList('services').title('All Services')),

            ...S.documentTypeListItems().filter(
                    (item) => !['contactDetails', 'services'].includes(item.getId())
                ),
        ]);

export default deskStructure;