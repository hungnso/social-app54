import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Ckeditor({ handleBlur, text }) {
  return (
    <div className="mt-2">
      <h4>Content</h4>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onBlur={(event, editor) => {
          const data = editor.getData();
          handleBlur(data)
        }}
      />
    </div>
  );
}
