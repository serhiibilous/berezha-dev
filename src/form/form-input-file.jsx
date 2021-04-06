import React, { useState } from 'react'

export function FormInputFile({ value, onSetValue }) {
  const [file, setFile] = useState(value)

  const handleChangeInput = (event) => {
    const loadedFile = event.target.files[0]
    setFile(loadedFile)
    onSetValue(loadedFile)
  }

  const handleRemoveFile = () => {
    setFile(null)
    onSetValue(null)
  }

  return (
    <div className="form-group form-group_file">
      <div className="form-control_column-file">
        {file && (
          <div className="form-control_attached-file">
            <div className="form-control_delete-file-button" onClick={handleRemoveFile} />
            <div className="form-control_attached-file-name">{file.name}</div>
          </div>
        )}
      </div>
      <label htmlFor="file" className="form-label_file body-text-1">
        <img src="/public/images/icons/attach-file.svg" width="17" height="19" alt="Attach file" /> Attach file
        <input
          onChange={handleChangeInput}
          className="form-control_file"
          type="file"
          name="file"
          id="file"
          accept=".pdf, .docx"
        />
      </label>
    </div>
  )
}
