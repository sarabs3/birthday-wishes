import React from 'react';

const styles = { 
    imageContainer: {
        boxShadow: '0 0 25px 1px rgba(0,0,0,0.2)',
        border: '2px solid #f2f2f2',
        borderRadius: '5px',
        maxWidth: '600px',
        maxHeight: '400px',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        contain:'content'
    }
};
const ImageContainer = (props) => (
    <div className="imageContainer" style={styles.imageContainer}>
        <img style={styles.image} src={props.src} alt="Happy Birthday!" />
    </div>
);

export default ImageContainer;