import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { BookDataProps, DetailsPageProps } from '../../interfaces';
import api from '../../services/api';

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
  const [bookData, setBookData] = useState<BookDataProps>();

  const {
    params: { bookId },
  } = useRoute<DetailsPageProps>();

  const handleBookData = async () => {
    const { data } = await api.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`,
    );
    setBookData(data);
  };

  useEffect(() => {
    handleBookData();
  }, []);

  if (!bookData) {
    return <AppLoading />;
  }

  const {
    title,
    pageCount,
    description,
    imageLinks: { thumbnail },
    authors,
    averageRating,
  } = bookData.volumeInfo;

  const { listPrice, saleability } = bookData.saleInfo;

  type Currency = {
    [key: string]: string;
  };

  const currencySymbols: Currency = {
    BRL: 'R$',
    USD: 'USD$',
  };

  return (
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
              <BookPrice>
                {saleability !== 'NOT_FOR_SALE'
                  ? `${
                      currencySymbols[listPrice.currencyCode]
                    }${listPrice.amount.toFixed(2)}`
                  : 'Not for sale'}
              </BookPrice>
            </BookDetailsFooter>
          </BookDetails>
        </BookMainDetails>
        <DetailsMainContentFooter>
          <BookPages>{pageCount} pages</BookPages>
          <BookDetailsButtons>
            <BookBuyButton>
              <BookBuyButtonText>BUY</BookBuyButtonText>
            </BookBuyButton>
            <BookFavoriteButton>
              <Feather name="heart" color="#f5f5f5" size={16} />
            </BookFavoriteButton>
          </BookDetailsButtons>
        </DetailsMainContentFooter>
      </DetailsMainContent>

      <DetailsDescription>
        <BookDescription>
          {description ? description.replace(/<[^>]*>/g, '') : 'No Description'}
        </BookDescription>
      </DetailsDescription>
    </DetailsContainer>
  );
};

export default Details;
