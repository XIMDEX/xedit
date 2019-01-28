export class HandlerEditor {
    public static saveDoc(contentTag, content, args) {
        args.service.save(contentTag, content, 'Change section ' + args.node.getSection().getAttribute('xe_section'));
    }
}
