import React from "react";
import Cell from "./cell";
import Player1 from "./player1";
import Player2 from "./player2";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      size: 0,
      num: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
  }

  handleChange(e) {
    //   if (typeof e.target.value === 'number') {
    this.setState({ size: e.target.value });
    //   }
  }
  increment() {
    this.setState({
      num: this.state.num + 1,
    });
    console.log(this.state.num, "number state");
  }

  render() {
    let cells = 0;
    let arr = [];
    let array = [];
    for (let i = 0; i < this.state.size; i++) {
      arr.push(1);
    }

    return (
      <div>
        <div style={{ display: "inline-block" }}>
          <label style={{ textAlign: "center" }}>
            Size: {this.state.size}{" "}
          </label>
          <input
            value={this.state.size}
            onChange={this.handleChange}
            type="number"
            id="size"
            name="size"
          />
          <br />
          <br />
        </div>
        <table style={{ margin: "auto" }}>
          <tbody>
            {this.state.size
              ? arr.map((elem, i) => {
                  return (
                    <tr style={{ display: "block" }}>
                      {this.state.size
                        ? arr.map((elem1, i1) => {
                            cells += 1;
                            switch (true) {
                              case cells <= this.state.size * 2:
                                return (
                                  <Player1
                                    cells={cells}
                                    color={(i % 2) + (i1 % 2)}
                                  />
                                );
                              case cells >=
                                this.state.size * this.state.size -
                                  this.state.size * 2 +
                                  1:
                                return (
                                  <Player2
                                    cells={cells}
                                    color={(i % 2) + (i1 % 2)}
                                  />
                                );
                            }
                            return (
                              <Cell
                                cells={cells}
                                size={this.state.size}
                                color={(i % 2) + (i1 % 2)}
                              />
                            );
                          })
                        : null}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
