import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '.././../App.css';
import { UilAlignCenterAlt,UilEnvelopeAlt,UilInvoice,UilIntercomAlt,UilLockAlt,UilCog, UilKayak ,UilUserCircle,UilYinYang } from '@iconscout/react-unicons';
class SideBar extends Component {
constructor(props) {
super(props);
this.state = {


};
} 

render() {

return (
<div className="sidebar">
<h1 className="logo"><UilKayak size="25" class="rotate" color="#fff" />&nbsp;&nbsp;&nbsp;Logo</h1>
<hr class="hr2"/>


<div class="links">  
<Link to="/"><h3 className="d_links active" >&nbsp;&nbsp;<UilAlignCenterAlt size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Dashboard</h3></Link>
<Link to="/message" activeClassName="active" ><h3 className="d_links" >&nbsp;&nbsp;<UilEnvelopeAlt size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Message</h3></Link>
<Link to="" activeClassName="active"><h3 className="d_links" >&nbsp;&nbsp;<UilInvoice size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Invoice</h3></Link>
<Link to="/events" activeClassName="active" ><h3 className="d_links" >&nbsp;&nbsp;<UilIntercomAlt size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Events</h3></Link>
<Link to="/" activeClassName="active"><h3 className="d_links" >&nbsp;&nbsp;<UilUserCircle size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Update Profile</h3> </Link>       
</div>


<div className="bottom_links">
<Link to="/profile" activeClassName="active"><h3 className="d_links" >&nbsp;&nbsp;<UilLockAlt  size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Privacy</h3></Link>
<Link to="/profile" activeClassName="active" ><h3 className="d_links" >&nbsp;&nbsp;<UilCog  size="25" color="#fff" />&nbsp;&nbsp;&nbsp; Settings</h3></Link>
<hr class="hr"/>
<h7 className="footer "><UilYinYang  size="24" class="rotate" color="#fff" />&nbsp;&nbsp;&nbsp;Dashboard V1.1</h7>
</div>

</div>
);
}
}

export default SideBar;