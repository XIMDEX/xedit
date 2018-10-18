/**
 * @ignore
 */
export const standard = {
    configs: {
        general: {
            language: 'en'
        },
        components: {
            main: {
                query: {
                    page: {name: 'page'},
                    limit: {name: 'limit', value: 20},
                    search: {name: 'name', value: '$'}
                }
            },
            table: {
                paginator: {
                    top: true,
                    bottom: true,
                    limits: [10, 20, 50, 100]
                }
            },
            facets : {
                active: true
            },
            tableItem: {
                fields: {
                    header: '$',
                    Imgplace: {

                    },
                    title: '$',
                    subtitle: 'Size: $'
                },
                actions: {
                    edit: true,
                    download: true,
                    delete: true
                }
            },
            tableSearch: {
                searchButtons: {
                    search: {
                        active: true
                    },
                    reset: {
                        active: true
                    },
                    clear: {
                        active: true
                    },
                    newAsset: {
                        active: true
                    }
                }
            }
        }
    }
};
