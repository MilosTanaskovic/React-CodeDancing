import React, {useState} from 'react'

const NavigationDots = ({active}) => {
    const [nav, setNav] = useState(['home', 'about', 'work', 'testimonial', 'contact']);
    return (
        <div className="app__navigation">
            {nav.map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: '#313BAC'} : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots
