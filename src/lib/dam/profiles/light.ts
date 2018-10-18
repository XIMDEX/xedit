/**
 * @ignore
 */
export const light = {
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
                    bottom: false,
                    limits: [10, 20, 50, 100]
                }
            },
            facets : {
                active: true
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
                    view: true,
                    edit: true,
                    download: true,
                    delete: true,
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
