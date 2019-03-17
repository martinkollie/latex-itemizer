import React, {Component} from 'react';
import Logo from './logo.svg';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: "itemize",
            items: [],
            charactersToRemove: ["*", "•"]
        };
        this.itemize = this.itemize.bind(this);
        this.removeBullets = this.removeBullets.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.handleRemoveChars = this.handleRemoveChars.bind(this);
    }

    itemize(e) {
        let value = e.target.value;
        let values = value.split("\n");

        let items = [];
        values.forEach(item => items.push(item));

        this.setState({
            items
        });
    }

    removeBullets(e) {
        let value = e.target.value;


        let chars = this.state.charactersToRemove.join("|");
        let items = this.state.items
            .map(item => item.replace(new RegExp('['+ chars + ']'), ""));

        console.log(items);
        this.setState({
            items
        });
    }

    handleModeChange(e) {
        let mode = e.target.value;


        this.setState({
            mode
        });
    }

    handleRemoveChars(e) {
        let mode = e.target.value;

        this.setState({
            charactersToRemove: e.target.value.split(",")

        })
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">

                                <div className="title">
                                    <span><img src={Logo} alt=""/></span>
                                    <h1 className="card-title">
                                        LaTeX Itemizer
                                    </h1>
                                </div>

                                <div className="container p-0 m-0">

                                    <div className="row">
                                        <div className="col">
                                            <p>Converts a list into a LaTeX list format.</p>

                                        </div>
                                    </div>

                                    <hr/>
                                    <h5>Options</h5>

                                    <div className="row">


                                        <div className="col-sm-12 col-md-6  ">
                                            <h6>List types</h6>
                                            <small className="text-muted">LaTeX package</small>
                                            <select onChange={this.handleModeChange} className="form-control w-75">
                                                <option value="itemize">Itemize</option>
                                                <option value="enumerate">Enumerate</option>
                                            </select>
                                        </div>

                                        <div className="col-6">
                                            <h6>Characters to remove</h6>
                                            <small className="text-muted">(e.g bullets) comma separated values</small>

                                            <ul>
                                                {this.state.charactersToRemove.map(char => (<li>{char}</li>))}
                                            </ul>


                                            <input type="text" onChange={(e) => this.handleRemoveChars(e)}
                                                   defaultValue={this.state.charactersToRemove.join(",")}
                                                   className="form-control  w-75"/>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col col-6 mb-3">
                        <div className="card" style={{height: "300px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Plain text list</h5>
                                <textarea onChange={this.itemize} className="textarea"
                                          style={{width: "100%", height: "80%"}}/>
                            </div>

                        </div>

                    </div>

                    <div className="col col-6">
                        <div className="card">
                            <div className="card-body text-left">
                                <h5 className="card-title">LaTeX list</h5>
                                <code>
                                    \begin{`${'{' + this.state.mode + '}'}`} <br/> {
                                    this.state.items.map(item => (
                                        <span>\item {item} <br/></span>
                                    ))
                                }
                                    \end{`${'{' + this.state.mode + '}'}`} <br/>
                                </code>

                                <button onClick={this.removeBullets}
                                        className="btn btn-primary btn-block mt-3">Remove characters
                                </button>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
