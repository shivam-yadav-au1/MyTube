import React from 'react';

class CreatePlayList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            type: "public",
            description: "",
            formState: {
                isFormValid: true,
                isNameValid: true,
                isDescriptionValid: true
            }
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    onChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("FORM SUBMIT ===> ", this.state);
        if(this.validateForm()){
            console.log("All good to do AJAX")
        }else{
            console.log("Form is INVALID ");
        }
    }

    validateForm() {
        let newFormState = {
            isFormValid: true,
            isNameValid: true,
            isDescriptionValid: true
        }

        if (!this.state.name) {
            newFormState.isNameValid = false;
            newFormState.isFormValid = false;
        }

        if (!this.state.description) {
            newFormState.isDescriptionValid = false;
            newFormState.isFormValid = false;
        }

        this.setState({
            formState: newFormState
        })

        return newFormState.isFormValid;
    }


    render() {
        return (
            <div>
                <h2 className="text-danger">PlayList</h2>
                <hr />
                {
                    !this.state.formState.isFormValid &&
                    <div className="alert alert-danger"> Please fill all Fields and try again .</div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">
                            PlayList Name:
                            <input name="name"
                                type="text"
                                onChange={this.onChange}
                                className={`form-control ${
                                    !this.state.formState.isNameValid && "is-invalid"
                                    }`} />
                        </label>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            Select PlayList Type:
                            <select value={this.state.type} className="form-control" name="type" onChange={this.onChange}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value="unlisted">UnListed</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                            Description:
                            <textarea name="description"
                                className={`form-control ${
                                    !this.state.formState.isDescriptionValid && "is-invalid"
                                    }`}
                                cols="30"
                                rows="5"
                                onChange={this.onChange}></textarea>
                        </label>

                    </div>
                    <button type="submit" className="btn btn-info">Create PlayList</button>
                </form>

            </div>
        )

    }
}


export default CreatePlayList;