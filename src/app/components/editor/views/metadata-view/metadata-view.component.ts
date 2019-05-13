import { EditorService } from "app/services/editor-service/editor.service";
import { Component, OnInit } from "@angular/core";
import { hasIn, isNil } from "ramda";
import { File } from "@models/file";

@Component({
    selector: "app-metadata-view",
    templateUrl: "./metadata-view.component.html",
    styleUrls: ["./metadata-view.component.scss"]
})
export class MetadataViewComponent implements OnInit {
    tabs = [];
    payload: any = {};
    private file: File;
    public schema: {};
    meta: any = {};

    constructor(private _edService: EditorService) {
        this.meta = _edService.getUpdatedDocument();
    }

    ngOnInit() {
        this.metaMap(this.meta);
        this._edService.getFile().subscribe(file => {
            this.file = file;
            if (file != null) {
                file["metadata"] = this.payload;
            }
        });
    }

    formResult(event) {
        this.payload = this.adaptResponse(event);
        this.file["metadata"] = this.payload;
        this._edService.setFile(this.file);
    }

    adaptResponse(response) {
        const result = {};
        Object.keys(response).forEach(function(key) {
            const ids = key.split("-");
            const group_id = ids[0];
            const meta_id = ids[1];
            if (!hasIn(group_id, result)) {
                result[group_id] = {};
            }
            if (!isNil(response[key])) {
                result[group_id][meta_id] = response[key];
            }
        });
        return result;
    }

    mapTab(meta) {
        const sections = this.mapSections(meta.groups);
        return {
            title: meta.name,
            sections: sections
        };
    }

    mapTabs(metas) {
        for (const key of Object.keys(metas)) {
            this.tabs.push(this.mapTab(metas[key]));
        }
    }

    mapSections(groups) {
        const sections = groups.map(group => {
            const fields = this.mapFields(group.metadata, group.id);
            return {
                title: group.name,
                fields: fields
            };
        });
        return sections;
    }

    mapFields(metadata, group_id) {
        const fields = metadata.map(metafield => {
            return {
                object: {
                    realName: `${group_id}-${metafield.id}`,
                    key: `${group_id}-${metafield.id}`,
                    label: metafield.name,
                    order: metafield.id,
                    val: metafield.value,
                    required: !!metafield.required,
                    readonly: !!metafield.readonly
                },
                type: metafield.type
            };
        });
        return fields;
    }

    metaMap(meta) {
        this.mapTabs(meta.metas);
        this.schema = {
            name: "xedit_meta",
            title: "Metadata",
            api: false,
            tabs: this.tabs
        };
    }
}
