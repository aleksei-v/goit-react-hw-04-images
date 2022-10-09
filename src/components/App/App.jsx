
import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import fetchImages from "services/FetchImages";
import { AppStyled } from "./App.styled";

import SearchBar from '../SearchBar';
import ImageGalary from "../ImageGallery";
import Button from '../Button';
import Loader from '../Loader';

class App extends Component {

  state = {
    imageName: '',
    images: [],
    step: 1,
    isLoading: false,
  }

  onSubmit = imageName => {
    if (imageName !== this.state.imageName) {
      this.setState({
        imageName,
        images: [],
        step: 1,
      })
    } else {
       this.setState({
        imageName,
      })
    }
    
  }
  componentDidUpdate(_, prevState) {
      const prevName = prevState.imageName;
      const nextName = this.state.imageName;

    if (prevName !== nextName || prevState.step !== this.state.step) {
      this.findPictures();
    }
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
      isLoading: true,
    }))
  };


  findPictures = async () => {

    try {
      this.setState ({isLoading: true})
      const fetchedImages = await fetchImages(this.state.imageName, this.state.step);
      

      fetchedImages.hits.length === 0
        ? Notify.failure("Unfortunately, there are no results for you")
        : this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
        }),
          
        );
       
    } catch (error) {
      console.log(error);
    }
    finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { images, isLoading } = this.state;
   
    return (
      
      <AppStyled>
        <SearchBar onSubmit={this.onSubmit} />
        {isLoading && images.length === 0
          ? <Loader/>
        : <ImageGalary images={images} />}

        {images.length !== 0 && <Button onHadleClickMore={this.loadMoreImages}
        />}
      </AppStyled>
    );
  }
};

export default App;