import React, { ReactElement, useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { BookDataProps, IParams } from '../../types';
import api from '../../services/api';

import FavoriteButton from '../../components/FavoriteButton';
import Header from '../../components/Header';

import {
  BookDetails,
  BookDetailsContent,
  BookDescriptionContainer,
  BookImage,
  BookCover,
  BookTitle,
  BookAuthor,
  BookPrice,
  BookPages,
  BookBuyButton,
  BookBuyButtonText,
  BookButtons,
  BookDescription,
} from './styles';

const Details = (): ReactElement => {
  const [bookData, setBookData] = useState<BookDataProps>();
  const { params } = useRoute<RouteProp<IParams, 'Details'>>();

  const handleBookData = async () => {
    const { data } = await api.get(
      `https://www.googleapis.com/books/v1/volumes/${params.bookId}`,
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
    saleInfo: { listPrice },
    volumeInfo: {
      title,
      description,
      pageCount,
      authors,
      imageLinks: { thumbnail },
    },
  } = bookData;

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <BookDetails>
          <BookCover>
            <BookImage resizeMode="cover" source={{ uri: thumbnail }} />
            <BookPages>{pageCount} pages</BookPages>
          </BookCover>
          <BookDetailsContent>
            <BookTitle numberOfLines={2}>{title}</BookTitle>
            <BookAuthor>
              by {authors ? authors.toString() : 'Unknown'}
            </BookAuthor>
            <BookPrice>
              {listPrice ? `R$${listPrice.amount.toFixed(2)}` : 'Not for sale'}
            </BookPrice>
            <BookButtons>
              <BookBuyButton>
                <BookBuyButtonText>BUY</BookBuyButtonText>
              </BookBuyButton>
              <FavoriteButton bookId={params.bookId} />
            </BookButtons>
          </BookDetailsContent>
        </BookDetails>

        <BookDescriptionContainer>
          <BookDescription>
            {description
              ? description.replace(/<[^>]*>/g, '')
              : 'No Description'}
          </BookDescription>
        </BookDescriptionContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
