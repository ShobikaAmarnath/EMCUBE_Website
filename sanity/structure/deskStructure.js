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
                .schemaType('service')
                .child(S.documentTypeList('service').title('All Services')),

            ...S.documentTypeListItems().filter(
                    (item) => !['contactDetails', 'service'].includes(item.getId())
                ),
        ]);

export default deskStructure;