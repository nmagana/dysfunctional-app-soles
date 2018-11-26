import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    renderOptions(options) {
        return options.map((option, index) => <Option 
                                            deleteOption={this.props.deleteOption} 
                                            key={option} 
                                            option={option}
                                            index={index}
                                        />);
    }
    
    render() {
        return (
            <div>
                <div className='widget-header'>
                        <h3 className='widget-header__title'>Your Options</h3>
                        <button 
                            onClick={this.props.removeAllOptions}
                            className='button button--remove_all'
                        > 
                        Remove All 
                        </button>
                </div>
                <div>
                    {!this.props.options.length && <p className='widget__message'>Please input an option to get started!</p>}
                </div>
                {this.renderOptions(this.props.options)}
            </div>
        )
    }
}

