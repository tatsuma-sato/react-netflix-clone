import React from "react";
import {
  Container,
  Title,
  List,
  Picture,
  Name,
  Item,
} from "./styles/profiles.styles";

const Profile = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

// Profile.Frame = function ProfileFrame({ children, ...restProps }) {
//   return <Frame {...restProps}>{children}</Frame>;
// };

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};
Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

export default Profile;
