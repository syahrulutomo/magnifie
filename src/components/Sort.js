import React from 'react';
import Select from 'react-select';

class Sort extends React.Component {
  render() {

    const options = [
        {value: 'price', label: 'By Price'},
        {value: 'title', label: 'By Title'},
        {value: 'rate', label: 'By Rate'},
    ];
    
    return(
        <Select
          defaultValue={{ label: "Sort By", value: 0 }}
          className="sort" 
          options={options} value="Sort by"
        />
    );
  }
}

export default Sort;