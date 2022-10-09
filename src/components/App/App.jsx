
import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import fetchImages from "services/FetchImages";
import { AppStyled } from "./App.styled";

import SearchBar from '../SearchBar';
import ImageGalary from "../ImageGallery";
import Button from '../Button';
import Loader from '../Loader';

function App () {

  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = NewImage => {
    if (NewImage !== imageName) {
      setImageName(NewImage);
      setImages([])
      setStep(1)
    } else {
      setImageName(NewImage);
    }
  };

  const loadMoreImages = () => {
    setStep(step + 1);
    setIsLoading(true);
  };
 
  useEffect(() => {
       
    if ( !imageName) {
      return;
    };
    
    const findPictures = async () => {

      try {
        setIsLoading(true)
        const fetchedImages = await fetchImages(imageName, step);

        fetchedImages.hits.length === 0
          ? Notify.failure("Unfortunately, there are no results for you")
          : setImages(images => [...images, ...fetchedImages.hits]);

      } catch (error) {
        console.log(error);
      }
      finally {
        setIsLoading(false);
      }
    };
    findPictures();
  }, [imageName, step])
    return (
      
      <AppStyled>
        <SearchBar onSubmit={onSubmit} />
        {isLoading && images.length === 0
          ? <Loader/>
        : <ImageGalary images={images} />}

        {images.length !== 0 && <Button onHadleClickMore={loadMoreImages}
        />}
      </AppStyled>
    );
};

export default App;