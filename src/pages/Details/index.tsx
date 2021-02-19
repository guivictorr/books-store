import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { BookDataProps, DetailsPageProps } from '../../interfaces';
import { BooksContext } from '../../context/booksContext';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  DetailsContainer,
  DetailsMainContent,
  DetailsDescription,
  BookImage,
  BookDetails,
  BookTitle,
  BookAuthor,
  BookPrice,
  BookDetailsFooter,
  DetailsMainContentFooter,
  BookPages,
  BookBuyButton,
  BookBuyButtonText,
  BookFavoriteButton,
  BookMainDetails,
  BookDetailsButtons,
  BookDescription,
} from './styles';

const Details: React.FC = () => {
  const [bookData, setBookData] = useState<BookDataProps>({} as BookDataProps);
  const { handleFavoriteBooks, handleIsFavorite } = useContext(BooksContext);
  const { params } = useRoute<DetailsPageProps>();
  const [isFavorite, setIsFavorite] = useState(handleIsFavorite(params.bookId));
  const {
    saleInfo: { listPrice },
    volumeInfo: {
      title,
      description,
      pageCount,
      authors,
      imageLinks: { thumbnail },
    },
  } = bookData;

  const handleBookData = async () => {
    const { data } = await api.get(
      `https://www.googleapis.com/books/v1/volumes/${params.bookId}`,
    );
    setBookData(data);
  };

  const handleAddFavoriteBook = () => {
    handleFavoriteBooks(params.bookId);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    handleBookData();
  }, []);

  return (
    <ScrollView>
      <DetailsContainer>
        <Header />
        <DetailsMainContent>
          <BookMainDetails>
            <BookImage resizeMode="cover" source={{ uri: thumbnail }} />
            <BookDetails>
              <BookTitle>{title}</BookTitle>
              <BookAuthor>
                by {authors ? authors.toString() : 'Unknown'}
              </BookAuthor>
              <BookDetailsFooter>
                <BookPrice>{listPrice.amount}</BookPrice>
              </BookDetailsFooter>
            </BookDetails>
          </BookMainDetails>
          <DetailsMainContentFooter>
            <BookPages>{pageCount} pages</BookPages>
            <BookDetailsButtons>
              <BookBuyButton>
                <BookBuyButtonText>BUY</BookBuyButtonText>
              </BookBuyButton>
              <BookFavoriteButton onPress={handleAddFavoriteBook}>
                <Feather
                  name={isFavorite ? 'slash' : 'heart'}
                  color="#f5f5f5"
                  size={16}
                />
              </BookFavoriteButton>
            </BookDetailsButtons>
          </DetailsMainContentFooter>
        </DetailsMainContent>

        <DetailsDescription>
          <BookDescription>
            {description
              ? description.replace(/<[^>]*>/g, '')
              : 'No Description'}
          </BookDescription>
        </DetailsDescription>
      </DetailsContainer>
    </ScrollView>
  );
};

export default Details;
