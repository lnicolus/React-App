import React from 'react';
import './stylesLoadingAnimation.css';
/* The animation belongs to Jack Rugile at https://codepen.io/jackrugile/pen/JddmaX my thanks to him */

function LoadingAnimation () {
  return (
    <div className="loader">
        <div className="loader-inner">
            <div className="loader-line-wrap">
            <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
            <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
            <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
            <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
            <div className="loader-line"></div>
            </div>
        </div>
    </div>
    )
}

export default LoadingAnimation