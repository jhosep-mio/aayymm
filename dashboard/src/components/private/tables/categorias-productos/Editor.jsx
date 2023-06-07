import {useRef} from 'react';
import JoditEditor from 'jodit-react';

const Editor = (props) => {

    const editor = useRef(null);
	const {content, setContent} = props;

	const config = {
        readonly: false,
    };

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={(newContent) => {}}
        />
    )
}

export default Editor