# Views

A view is an HTML visualization linked to a given component, it defines its layout and can include other components that will be identified by the component when provided in "sections" attribute.

Let's take a look at the "mainComponent.html" view of the previous example component:

```html
<div class="section" xe_section="mainComponent">
    <div class="img clearfix" xe_section="image">
        <p>
            <img xe_link="http://via.placeholder.com/400x400" alt="image">
        </p>
    </div>
    <div xe_section="main-title" class="main-title">
        <h1>This is the main title</h1>
    </div>
    <div xe_section="text-box" class="group">
        <p>Some text</p>
    </div>
    <div xe_section="section-title" class="section-title">
        <h2>This is a section title</h2>
    </div>
</div>
```

## Attributes

| Field name | Allowed values |                         Description                          |
| :--------: | :------------: | :----------------------------------------------------------: |
| xe_section |     String     | this is the view name used by the component when defined in the "view" attribute |
|  xe_link   |      URL       | This is a controlled link, used by the application to know it can change it |



[Return](./Templates.md)