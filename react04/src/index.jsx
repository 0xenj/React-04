import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import FormNewEntry from "./FormNewEntry"
import Total from "./Total";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { id: 1, name: "Loto ticket", desc: "", price: 20 },
        { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
        { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
      ],
      total: 0, 
    };
  }

  componentDidMount() {
    const total = this.state.entries.reduce((acc, entry) => acc + entry.price, 0);
    this.setState({ total });
  }

  handleDelete = (id) => {
    const newData = this.state.entries.filter((entry) => entry.id !== id);
    this.setState({ entries: newData }, this.updateTotal);
    this.updateTotal();
  };

  handleNewEntry = (newEntry) => {
    const newEntries = [...this.state.entries, newEntry];
    this.setState({ entries: newEntries }, this.updateTotal);
    this.updateTotal();
  };

  updateTotal = () => {
    const total = this.state.entries.reduce((acc, entry) => acc + entry.price, 0);
    this.setState({ total });
  };

  render() {
    return (
      <div>
        <Table entries={this.state.entries} handleDelete={this.handleDelete} />
        <Total total={this.state.total} />
        <h1>Add new expense</h1>
        <FormNewEntry handleNewEntry={this.handleNewEntry} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
