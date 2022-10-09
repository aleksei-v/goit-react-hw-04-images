import { Component } from "react";
import PropTypes from 'prop-types';

import { StyledSearchBar, SearchForm, SearchFormButton, SearchFormInput } from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";
// import {Glass} from '.././images/'

class SearchBar extends Component {

    state = {
        name: '',
    };
    handleChangeName = evt => {
        this.setState({
            name: evt.currentTarget.value
        })
    };
    onSubmitName = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state.name);
    };

    render() {
        return (
            <StyledSearchBar>
            <SearchForm
                onSubmit={this.onSubmitName}
            >
                <SearchFormButton type="submit">
                        <FaSearch/>
                </SearchFormButton>

                <SearchFormInput
                    onChange={this.handleChangeName}
                    value={this.state.name}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
            </StyledSearchBar>
        );
    }
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;