import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Meta,
  Item,
  Image,
  Entities,
  Text,
  Feature,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Content,
  Maturity,
} from "./styles/card.styles";

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = function CardGroup({ children, ...restPorps }) {
  return <Group {...restPorps}>{children}</Group>;
};

Card.SubTitle = function CardSubTitle({ children, ...restPorps }) {
  return <SubTitle {...restPorps}>{children}</SubTitle>;
};

Card.Title = function CardTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...restPorps }) {
  return <Meta {...restPorps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restPorps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restPorps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restPorps }) {
  return <Image {...restPorps} />;
};

Card.Entities = function CardEntities({ children, ...restPorps }) {
  return <Entities {...restPorps}>{children}</Entities>;
};

Card.Feature = function CardFeature({ children, category, ...restPorps }) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);

  return showFeature ? (
    <Feature
      src={
        itemFeature.largeImg
          ? itemFeature.largeImg
          : `/images/${category}}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`
      }
      {...restPorps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWidth="bold">
            {itemFeature.genres.map((genre) => {
              return genre.charAt(0).toUpperCase() + genre.slice(1) + " ";
            })}
            {/* // itemFeature.genre.slice(1) */}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

// Card.Entities = function CardEntities({ children, ...restPorps }) {
//   return <Entities {...restPorps}>{children}</Entities>;
// };

// Card.Entities = function CardEntities({ children, ...restPorps }) {
//   return <Entities {...restPorps}>{children}</Entities>;
// };

export default Card;
