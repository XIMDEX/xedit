import { UUID } from 'angular2-uuid';
import { Converters } from '@utils/converters';

export class StringHelpers {
    /**
     * Get all uuid and reset it form a string
     * @param text
     */
    public static resetIdsFromString(text): string {
        function replaceIndex(string, at, repl) {
            let pos = -1;
            return string.replace(/ xe_uuid=\"[^"]*\" */g, match => {
                pos++;
                if (pos === at) {
                    return repl;
                }
                return match;
            });
        }

        let occurrences = text.match(/ xe_uuid=\"[^"]*\" */g);
        occurrences = occurrences != null ? occurrences.length : 0;
        for (let i = 0; i < occurrences; i++) {
            text = replaceIndex(text, i, ' xe_uuid="' + UUID.UUID() + '" ');
        }

        return Converters.json2html(Converters.html2json(text));
    }
}
