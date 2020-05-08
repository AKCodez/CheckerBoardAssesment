import React from 'react';
import Cell from './cell';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {size : 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //   if (typeof e.target.value === 'number') {
        this.setState({size: e.target.value});
    //   }
  }

  render() {
      let arr = [];
      for (let i = 0; i < this.state.size; i++) {
          arr.push(1);
      }
    return (
      <div>
      <div style={{display: 'inline-block'}}>
      <label style={{textAlign: 'center'}}>Size: {this.state.size} </label>
      <input value={this.state.size} onChange={this.handleChange} type="number" id="size" name="size" /><br/><br/>
      </div>
      <table style={{margin: 'auto'}}>
      <tbody>
        {
          this.state.size ? 
          (
            arr.map((elem, i) => {
              return (
                <tr style={{display: 'block'}}>
                {
                  this.state.size ? 
                  (
                    arr.map((elem1, i1) => {
                      return <Cell color={(i % 2) + (i1 % 2)}/>
                    })
                  ) 
                  : 
                  (
                    null
                  )
                }
                </tr>
              );
            })
          ) 
          : 
          (
            null
          )
        }
        </tbody>
      </table>
      </div>
    );
  }
}

export default Main;
