import React from 'react';
import Logo from './Logo' 
import SearchBar from './SearchBar';
import {ReactComponent as HomeIcon} from './Icons/Home-Icon.svg'
import { ReactComponent as MessageIcon} from './Icons/MessageIcon.svg'
import { ReactComponent as PathIcon} from './Icons/PathIcon.svg'
import { ReactComponent as HeartIcon} from './Icons/HeartIcon.svg'
const Header = ()=> {
    return(
        <div className = 'd-flex justify-content-between m-2 img-sm'>
<Logo/> 
<SearchBar/>
<div className = 'd-flex justify-content-between m-2'>
<HomeIcon />
<MessageIcon />
<PathIcon />
<HeartIcon />
</div>

        </div>
    )
}

export default Header