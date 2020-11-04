import React from 'react';
import PageLoader from './pages/pageLoader'
import SideBar from './components/SideBar'

// import { useParams} from "react-router";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useRouteMatch, useHistory } from "react-router-dom";


function App(){
    const isLogin = useRouteMatch("/warranty_timeline/logIn");
    const isTimeLineList = useRouteMatch("/warranty_timeline/timeLineList");
    const isDashBoard = useRouteMatch("/warranty_timeline");
    return (
    <div className='app' >
        <SideBar pageComponent={<PageLoader/>}/>
    </div>
    )
}
export default App