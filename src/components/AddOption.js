import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option_input.value.trim();
        const error = this.props.handleSubmit(option);
        this.setState({error});
        if (!error){
            e.target.elements.option_input.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input 
                        className='add-option__input' 
                        autoComplete={'off'} 
                        name='option_input'
                        maxLength={300}
                    />
                    <button className='button button--add_option'>Add Option</button>
                </form>
            </div>
        );
    }
}