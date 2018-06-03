import React from 'react';
import Refresh from './refresh.svg';
import Copy from './copy.svg';

const styles = {
    toolbar: {
        position: 'absolute',
        right: '10px',
        top: '10px',
    },
    icons: {
        border:' 2px solid #fff',
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transition: '0.3s',
        marginLeft:'10px'
    }
};
const ToolBar = (props) => (
    <div className='toolbar' style={styles.toolbar}>
        <img onClick={props.getNewWish} style={styles.icons} src={Refresh} width="24" height="24" title="Refresh" alt="refresh" />
        {/* <img onClick={props.copyWish} style={styles.icons} src={Copy} width="24" height="24" title="Copy" alt="Copy" /> */}
    </div>
);

export default ToolBar;