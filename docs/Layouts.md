# Layouts

A layout is a schematic of the document. It includes info about the structure of the document and its components.

```json
{
    "css": [
        "A node id (Only in Ximdex)",
        "A CSS external link"
    ],
    "js": [
        "A node id (Only in Ximdex)",
        "a Javascript external link"
    ],
    "metadata": [
        {
            "name": "Title",
            "type": "string",
            "value": ""
        },
        {
            "name": "Date",
            "type": "date",
            "value": ""
        },
        {
            "name": "Author",
            "value": "",
            "selected": "",
            "options": {
                "Administrador de ximdex": "Administrador de ximdex"
            },
            "type": "enum"
        }
    ],
    "template": [
        {
            "content": {
                "mainComponent": {}
            }
        }
    ]
}
```

## Attributes

| Field name |            Allowed values             |                         Description                          |
| :--------: | :-----------------------------------: | :----------------------------------------------------------: |
|    css     | A node ID (In Ximdex), A external URL |     Adds a css link in headers when transformed to HTML      |
|     js     | A node ID (In Ximdex), A external URL |     Adds a JS script in headers when transformed to HTML     |
|  metadata  |  An Object("name", "type", "value")   | An object with a (name, value) as a (key, value) and its variable type (*int, date, string...*) |
|  template  |          A "content" Object           | A "content" object with the name of every component that should be included in the layout |



[Return](./Templates.md)
