import React, { Component } from 'react';
import { UilUserCircle   } from '@iconscout/react-unicons';
export default class Card extends Component {
render() {
return (
<div class="container">
<div class="row">
<div class="col-md-3">
<div class="card "> 
<h4>Total Client</h4>
<br/>
<h5>50,0000</h5>
</div>
</div>

<div class="col-md-3">
<div class="card "> 
<h4>Total Invoice</h4>
<br/>
<h5>50,0000</h5>
</div>
</div>

<div class="col-md-3">
<div class="card "> 
<h4>Total Events</h4>
<br/>
<h4>50,0000</h4>
</div>
</div>
</div>

</div>

);
}
}
