export const light = {
    configs: {
        general: {
            language: 'en'
        },
        components: {
            main: {
                query: {
                    page: { name: 'page' },
                    limit: { name: 'limit', value: 20 },
                    search: { name: 'title', value: '$' }
                }
            },
            table: {
                paginator: {
                    top: true,
                    bottom: false
                }
            },
            tableItem: {
                clickView: true,
                fields: {
                    header: '$',
                    Imgplace: {

                    },
                    title: '$',
                    subtitle: ''
                },
                actions: {
                    view: false,
                    edit: false,
                    download: false,
                    delete: false,
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
                        active: false
                    },
                    newAsset: {
                        active: true
                    }
                }
            }
        }
    }
};
