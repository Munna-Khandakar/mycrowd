import {Navbar} from '@/components/Navbar';
import {Searchbar} from '@/components/Home/Search';
import {Applications} from '@/components/Home/Applications';

export const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Searchbar/>
            <Applications/>
        </div>
    );
};