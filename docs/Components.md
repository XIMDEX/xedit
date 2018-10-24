## Components

A component is a piece that can be reused inside the layout or another allowed component.

```json
{
    "schema": {
        "type": "container",
        "options": {
            "styles": {},
            "tags": {}
        },
        "view": "mainComponent",
        "actions": {
            "siblings": [
                "anotherComponent",
                "backcover"
            ],
            "children": [
                "text-box",
                "section-title",
                "grid",
                "image"
            ]
        },
        "sections": {
            "text-box" : {},
            "section-title" : {},
            "grid": {},
            "image": {},
            "jumbo": {}
        },
        "lang": {
            "es": "Componente principal",
            "en": "Main component"
        }
    }
}
```

### Attributes

| Field name |      Allowed values       |                         Description                          |
| :--------: | :-----------------------: | :----------------------------------------------------------: |
|    type    |   *"container", "text"*   | The component's type, a container can only hold other components, a text component can be also text editable |
|  options   |    *"styles", "tags"*     | The available options for styles and HTML tags available in context menu for that component. Use "all" as a value to unlock all of them, use a collection of objects to choose (In tags per example use "ul": {} to unlock unordered lists) |
|  actions   | *"siblings", "children"*  | Any of the two values as an array with all the available children or siblings component for this component (A children is inside the component, a sibling is next to him) |
|  sections  | A list of component names | A list with every component contained by the application, this way the application can identify any of these components when accesing the view |
|    lang    |       *"es", "en"*        | The component's name in spanish and english, used by application for displaying it |
|    view    |        A view name        |     The name of the HTML view the component is linked to     |



[Return](./Templates.md)

