import React from "react";

const Navigation = ({onRouteChange}) => {
    return(
        <nav style={{display: "flex", justifyContent: 'flex-end'}}>
            <h1 onClick={()=> onRouteChange('signin')} className={"f3 link dim black underline pa3 pointer white"} >
                Sign Out
            </h1>
        </nav>
    );

}

export default Navigation;