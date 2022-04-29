import { getAuth } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import { Header, Loading, Card, Player } from "../components";
import SelectProfileContainer from "./Profile.container";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import FooterContainer from "./Footer.container";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";

const BrowseContainer = ({ slides }) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const auth = getAuth();
  const user = auth.currentUser || {};
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      console.log("profile", profile);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => (isMounted.current = false);
  }, [profile.displayName, isMounted]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="Spider-Man" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() => {
                      auth
                        .signOut()
                        .then(() => {
                          navigate("/");
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={"auto"}
                spaceBetween={15}
                navigation
                mousewheel
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  1000: {
                    slidesPerView: 9,
                  },
                }}
              >
                {slideItem.data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card.Item item={item}>
                      <Card.Image
                        src={
                          item.img
                            ? item.img
                            : `/images/${category}/${item.genre}/${item.slug}/small.jpg`
                        }
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
