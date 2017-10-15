import React, {PureComponent} from 'react'

class FileInput extends PureComponent{

    handleChange = (event) => {
        this.span.innerText = event.target.files[0].name
    }

    render(){
        const { name, description } = this.props
        return(
            <div className="upload-doc-div">
                <label className="custom-file-upload">
                    <input type="file" accept='.jpg,.png,.jpeg' name={name} onChange={this.handleChange}/>
                    {description}
                </label>
                <span className="file-name" ref={(el) => {this.span = el}}></span>
            </div>
        )
    }
}

export default FileInput

