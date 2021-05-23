import logo from './logo.svg';
import './App.css';
import React from 'react';
import marked from 'marked'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: '',
      markedUp: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div className='App'>
            <div className='App-header'>
                <MarkdownHeader/>
            </div>
            <div className='flex-container'>
                <div className='Editor'>
                    <Editor editorText={this.state.editorText} handleChange={this.handleChange}/>
                </div>
                <div className='Renderer'>
                    <Renderer markedUpText={this.state.markedUp}/>
                </div>
            </div>
        </div>
  )
  }

  handleChange(event){
    this.setState({
        editorText: event.target.value,
        markedUp: marked(event.target.value)
    });
    console.log(this.state.markedUp);
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='editorArea'>
        <h2>Editor</h2>
        <textarea className='editBox' id='editor' onChange={this.props.handleChange} value={this.props.editorText}/>
      </div>
        )
  }
}

class Renderer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='renderArea'>
                <h2>Result</h2>
                <div
                    id='preview'
                    dangerouslySetInnerHTML={{
                        __html: this.props.markedUpText
                    }}
                />
            </div>
        )
    }
}

class MarkdownHeader extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return (
          <h1>Markdown Translator!</h1>
    )
  }
}

export default MarkdownPreviewer;
// export default App;
