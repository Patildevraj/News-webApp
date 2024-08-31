import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../redux/actions/newsActions';

const SearchAndFilter = () => {
    const [keyword, setKeyword] = useState('');
    const [filters, setFilters] = useState({ category: '', source: '', date: '' });
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        dispatch(getNews(keyword, {}));
    };

    const applyFilters = () => {
        dispatch(getNews('', filters));
    };

    return (
        <div className="container-fluid p-2 p-md-3">
            <div className="d-flex justify-content-between gap-2 flex-column flex-lg-row w-100">
            <div className="d-block d-sm-flex align-items-center">
                    {/* <select name="category" className="form-select me-2" onChange={handleFilterChange}>
                        <option value="">Select Category</option>
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                    </select> */}
                    <select name="source" className="form-select me-2" onChange={handleFilterChange}>
                        <option value="">Select Source</option>
                        <option value="bbc-news">BBC News</option>
                        <option value="new-york-magazine">New York Magazine</option>
                        <option value="abc-news">ABC News (AU)</option>
                        <option value="ESPN">ESPN</option>
                        <option value="cnn">CNN</option>
                    </select>
                    <input type="date" name="date" className="form-control me-2" onChange={handleFilterChange} />
                    <button className="btn btn-dark w-100" onClick={applyFilters}>Apply Filters</button>
                </div>
                
                <hr className='text-dark' />

                <div className="d-flex align-items-center">
                    <input
                        type="text"
                        className="form-control me-2"
                        value={keyword}
                        onChange={handleSearchChange}
                        placeholder="Search for news..."
                    />
                    <button className="searchBox btn btn-border btn-dark rounded" onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                
            </div>
        </div>
    );
};

export default SearchAndFilter;
