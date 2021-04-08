import React, { useState } from 'react'

export function FormInputFile({ onSetValue }) {
  const [file, setFile] = useState()

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
            <div className="form-control_delete-file-button" onClick={handleRemoveFile}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 3L13 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="form-control_attached-file-name">{file.name}</div>
          </div>
        )}
      </div>
      <label htmlFor="file" className="form-label_file body-text-1">
        <span className="form-label_file-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
            <path
              d="M3.05044 6.87876C3.05044 6.87876 5.59602 4.33318 7.29308 2.63612C9.59118 0.338022 12.5964 0.868353 14.3641 2.63612C16.1319 4.40389 16.6622 7.40909 14.3641 9.70719C12.2428 11.8285 8.00019 16.0711 8.00019 16.0711C5.87887 18.1925 3.93422 17.6636 2.69689 16.4247C1.46094 15.1872 0.929119 13.2427 3.05044 11.1214L8.70729 5.46455C8.70729 5.46455 10.1215 4.05033 11.5357 5.46455C12.9499 6.87876 11.5357 8.29297 11.5357 8.29297L5.87887 13.9498"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </span>{' '}
        Attach file
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
