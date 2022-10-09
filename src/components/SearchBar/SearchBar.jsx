import { useState } from "react";
import PropTypes from 'prop-types';

import { StyledSearchBar, SearchForm, SearchFormButton, SearchFormInput } from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";

function SearchBar ({onSubmit}) {

    const [name, setName] = useState('');

    const handleChangeName = evt => {
        setName(evt.currentTarget.value)
    };

    const onSubmitName = evt => {
        evt.preventDefault();

        onSubmit(name);
    };
    return (
        <StyledSearchBar>
        <SearchForm
            onSubmit={onSubmitName}
        >
            <SearchFormButton type="submit">
                    <FaSearch/>
            </SearchFormButton>

            <SearchFormInput
                onChange={handleChangeName}
                value={name}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </SearchForm>
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;