import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import Header from '../../components/Header';
import { DetailsPageProps } from '../../interfaces';

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
  const {
    params: { bookId },
  } = useRoute<DetailsPageProps>();

  return (
    <DetailsContainer>
      <Header />
      <DetailsMainContent>
        <BookMainDetails>
          <BookImage
            resizeMode="cover"
            source={{
              uri:
                'http://books.google.com/books/content?id=OP8C9mKQxAMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            }}
          />
          <BookDetails>
            <BookTitle>
              Logo Design Love: A Guide to Creating Iconic Brand Identities
            </BookTitle>
            <BookAuthor>by David Airey</BookAuthor>
            <BookDetailsFooter>
              <BookPrice>$9.99</BookPrice>
            </BookDetailsFooter>
          </BookDetails>
        </BookMainDetails>
        <DetailsMainContentFooter>
          <BookPages>216 pages</BookPages>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur odit
          ut tempora dolores totam dolorum accusamus nulla porro id? Tenetur
          porro molestias velit quod repellendus iusto qui quis molestiae
          blanditiis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tenetur odit ut tempora dolores totam dolorum accusamus nulla porro
          id? Tenetur porro molestias velit quod repellendus iusto qui quis
          molestiae blanditiis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Tenetur odit ut tempora dolores totam dolorum
          accusamus nulla porro id? Tenetur porro molestias velit quod
          repellendus iusto qui quis molestiae blanditiis. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Tenetur odit ut tempora dolores
          totam dolorum accusamus nulla porro id? Tenetur porro molestias velit
          quod repellendus iusto qui quis molestiae blanditiis. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Tenetur odit ut tempora
          dolores totam dolorum accusamus nulla porro id? Tenetur porro
          molestias velit quod repellendus iusto qui quis molestiae blanditiis.
        </BookDescription>
      </DetailsDescription>
    </DetailsContainer>
  );
};

export default Details;
