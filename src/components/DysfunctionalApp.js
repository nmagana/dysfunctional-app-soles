import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class DysfunctionalApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };
    subtitle = 'Let the computer choose!';

    componentDidMount() {
        const json = localStorage.getItem('options');
        if (json) {
            const options = JSON.parse(json);
            if (options) {
                this.setState({options});
            }
        }
        window.addEventListener(
            'unload',
            this.saveStateToLocalStorage
        );
    }

    saveStateToLocalStorage = () => {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }

    removeAllOptions = () => {
        this.setState({
            options: []
        });
    };

    deleteOption = (optionRemoved) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionRemoved)
        }))
    }

    handleAction = () => {
        const optionsLength = this.state.options.length;
        if (optionsLength > 0) {
            const selectedOption = this.state.options[Math.floor(Math.random() * optionsLength)];
            this.setState({selectedOption});
        }
    }

    handleSubmit = (option) => {
        if (!option) {
            return 'Input an option!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    handleExitModal = () => {
        this.setState({selectedOption: undefined});
    }
      

    render() { 
        return (
            <div>
                <Header subtitle={this.subtitle}/>
                    <div className='container'>
                        <Action hasOptions={!!this.state.options.length} handleAction={this.handleAction}/>
                        <div className='widget'>
                            <Options 
                                options={this.state.options} 
                                removeAllOptions={this.removeAllOptions}
                                deleteOption={this.deleteOption}
                        />
                            <AddOption handleSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                <OptionModal selectedOption={this.state.selectedOption} handleExitModal={this.handleExitModal}/>
                <Footer />
            </div>
        );
    }
}

DysfunctionalApp.defaultProps = {
    options: []
};
