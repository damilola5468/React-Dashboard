import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '.././../App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Card from '../Widgets/Card';
class MainArea extends Component {

handleGetCurrentData = () => {
console.log(this.node.table.props.data);
}

handleGetCurrentData = () => {
console.log(this.node.table.props.data);
}

handleGetSelectedData = () => {
console.log(this.node.selectionContext.selected);
}

handleGetExpandedData = () => {
console.log(this.node.rowExpandContext.state.expanded);
}

handleGetCurrentPage = () => {
console.log(this.node.paginationContext.currPage);
}

handleGetCurrentSizePerPage = () => {
console.log(this.node.paginationContext.currSizePerPage);
}

handleGetCurrentSortColumn = () => {
console.log(this.node.sortContext.state.sortColumn);
}

handleGetCurrentSortOrder = () => {
console.log(this.node.sortContext.state.sortOrder);
}

handleGetCurrentFilter = () => {
console.log(this.node.filterContext.currFilters);
}
render() {

const columns = [{
dataField: 'id',
text: 'Product ID',
// filter: textFilter()
}, {
dataField: 'name',
text: 'ProductName',

}, {
dataField: 'price',
text: 'ProductPrice',

}];

const products = [{
id: '1',
name: 'Fresh Apple',
price: '200'
}, {
id: '2',
name: 'Fresh Orange',
price: '300'
}, {
id: '3',
name: 'Fresh Grape',
price: '200'
}];

return (
<div class="position-main tblm"> 
{/* <BootstrapTable
keyField="id"
data={ products }
columns={ columns }
striped
hover
condensed
/> */}
{/* <BootstrapTable
ref={ n => this.node = n }
keyField="id"
data={ products }
columns={ columns }
  filter={ filterFactory() }
  pagination={ paginationFactory() }
selectRow={ { mode: 'checkbox', clickToSelect: true } }

/> */}






{/* <Card/> */}









</div>
);
}
}

export default MainArea;