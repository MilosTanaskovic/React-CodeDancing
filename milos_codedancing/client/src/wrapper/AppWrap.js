import React from 'react'
import { SocialMedia, NavigationDots} from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">
                        <a href="https://www.linkedin.com/in/codedancingwithmilos/" target="_blank" rel="noreferrer">@CodeDancingwithMilos</a>
                    </p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap
