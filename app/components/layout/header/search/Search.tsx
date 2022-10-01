import { FunctionComponent } from 'react';
import styles from './Search.module.scss';
import { useSearch } from '@/components/layout/header/search/useSearch';

const Search: FunctionComponent = () => {
    const { data, handleSearch, searchTerm, isSuccess } = useSearch();

    return (
        <div className={styles.search_top}>
            <label>
                <input
                    type="text"
                    placeholder="Search video..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <img src="/img/common/search.svg" alt=""/>
            </label>
            {isSuccess && (
                <div className={styles.result}>
                    {data?.length ? (
                        data.map(video => <div>{video.name}</div>)
                        // data.map(video => <VideoItem isSmall item={video} key={video.id}/>)
                    ) : (
                        <div className="text-white">Didn't find videos.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;