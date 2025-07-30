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
            ...S.documentTypeListItems().filter(
                (item) => !['contactDetails'].includes(item.getId())
            ),
        ]);

export default deskStructure;