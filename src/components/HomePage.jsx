import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import '@fontsource/lavishly-yours';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Card,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Carousel,
  Divider,
  ConfigProvider,
} from "antd";
import {
  HeartOutlined,
  BookOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import image from "../images/city.jpg";
import image2 from "../images/tree.jpg";
import image3 from "../images/Blood-Donation.jpg";
import img4 from "../images/satyarthi.jpg";
import img5 from "../images/toi.jpg";
import img6 from "../images/uo.jpg";
import img7 from "../images/news1.jpg";
import img8 from "../images/news2.jpg";

import slide0 from "../img/slider0.jpg";
import slide1 from "../img/slider1.jpg";
import slide2 from "../img/slider2.jpg";
import slide3 from "../img/slider3.jpg";
import slide4 from "../img/slider4.jpg";
import slide5 from "../img/slider5.jpg";


import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import theme from "../theme/themeConfig"; // <-- Import your theme config

const { Title, Text, Paragraph } = Typography;

const cards = [
  {
    image:image,
    title: "Sant Nirankari Health City",
    description: "The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, aiming to provide top-notch medical care at affordable rates for everyone.",
  },
  {
    image: image2,
    title: "Oneness वन",
    description: "This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas into flourishing mini-forests, restoring biodiversity one tiny plot at a time.",
  },
  {
    image: image3,
    title: "Blood Donation",
    description: "For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.",
  },
];

const sliderSettings = {
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  infinite: true,
  arrows: true,
  speed: 500,
  swipeToSlide: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};




const projectSlides = [
  {
    title: "Slide 0",
    subtitle: "Subtitle 0",
    imageUrl: slide0,
    hideContent: true, // new flag to hide content
  },
  {
    title: "A hub of quality Care",
    subtitle: "Subtitle 1",
    imageUrl: slide1,
    textStyle: { color: "#3e6643" },
  },
  {
    title: "Watershed Programme",
    subtitle: "Subtitle 2",
    imageUrl: slide2,
    textStyle: { color: "#374c22" },
  },
  {
    title: "Oneness Van",
    subtitle: "Subtitle 3",
    imageUrl: slide3,
    textStyle: { color: "#006738" },
  },
  {
    title: "Youth Empowerment",
    subtitle: "Subtitle 4",
    imageUrl: slide4,
    textStyle: { color: "#274463" },
  },
  {
    title: "",
    subtitle: "",
    imageUrl: slide5,
    textStyle: { color: "#00a4e3" },
  },
];



const newsData = [
  {
    title: "SNCF Honored for Humanitarian Service",
    excerpt:
      "Sant Nirankari Charitable Foundation was awarded 'Most Impactful NGO of the Year' at the 11th CSR Summit in Delhi.",
    imageUrl: img7,
    date: "August 2024",
  },
  {
    title: "Nirankari Rajmata Scholarship Scheme 2024-25",
    excerpt:
      "SNCF continues to support meritorious students with financial aid for professional and technical courses.",
    imageUrl: img8,
    date: "2024-25",
  },
  {
    title: "SNCF in 'Roko Toko Abhiyan', Jabalpur",
    excerpt:
      "During the pandemic, SNCF joined local authorities to raise awareness and distribute masks in Jabalpur.",
    imageUrl: img7,
    date: "2020",
  },
];

import healIcon from '../img/heal.webp';
import enrichIcon from '../img/enrich.webp';
import empowerIcon from '../img/empower.webp';

const missionCards = [
  {
    title: "HEAL",
    description: "SNCF's Multifaceted Approach towards healthcare initiatives",
    icon: <img src={healIcon} alt="Heal Icon" style={{ width: "5rem" }} />,
    content: `SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.
      SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.`,
  },
  {
    title: "ENRICH",
    description: "SNCF's Holistic Approach to Social Change",
    icon: <img src={enrichIcon} alt="Enrich Icon" style={{ width: "5rem" }} />,
    content: `SNCF empowers communities through education. 
      We support educational, vocational & technical institutions, libraries, hostels in India.
      SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.`,
  },
  {
    title: "EMPOWER",
    description: "SNCF investing in self-sufficiency, instilling empowerment through opportunity",
    icon: <img src={empowerIcon} alt="Empower Icon" style={{ width: "5rem" }} />,
    content: `SNCF orchestrates individual empowerment through workshops, women/youth programs, 
      elder care, disaster relief, and disability support initiatives.
      SNCF is dedicated to improving healthcare. 
      Manages hospitals, clinics, blood banks, dispensaries & adopt strategies for environmental conservation.`,
  },
];

const HomePage = () => (
    <div
    >

      {/* Hero Section */}
    <section>
  <Swiper
    modules={[Autoplay, EffectFade, Navigation, Pagination]}
    effect="fade"
    loop
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    style={{ height: "70vh" }}
  >
    {projectSlides.map((slide, index) => (
  <SwiperSlide key={index}>
    <div
      style={{
        backgroundImage: `url(${slide.imageUrl})`,
        height: "65vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        paddingLeft: "5%",
        color: slide.textStyle?.color || "#fff",
      }}
    >
      {!slide.hideContent && (
        <Space direction="vertical" size="large" align="start">
         
          <Title level={1} style={{ ...slide.textStyle, fontWeight: 900, marginBottom: 0, fontFamily: "'Lavishly Yours', cursive", fontSize: "4rem", textShadow: "4px 1px 10px 4 px #fff",  }}>
            {slide.title}
          </Title>
          <Paragraph style={{ ...slide.textStyle, fontSize: "1.2rem", maxWidth: 600 }}>
            {slide.subtitle}
          </Paragraph>
         <a
  href="/your-target-url"
  style={{
    position: 'relative',
    fontWeight: '600',
    fontSize: '1.1rem',
    color: slide.textStyle?.color || '#1890ff',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    overflow: 'hidden',
    '--underline-width': '0',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.setProperty('--underline-width', '100%');
    const arrow = e.currentTarget.querySelector('.arrow');
    arrow.style.transform = 'translateX(5px)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.setProperty('--underline-width', '0');
    const arrow = e.currentTarget.querySelector('.arrow');
    arrow.style.transform = 'translateX(0)';
  }}
>
  Read More
  <span
    className="arrow"
    style={{
      display: 'inline-block',
      marginLeft: '8px',
      transition: 'transform 0.3s ease',
    }}
  >
    ➔
  </span>
  <span
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: 'var(--underline-width, 0)',
      backgroundColor: slide.textStyle?.color || '#1890ff',
      transition: 'width 0.3s ease',
      borderRadius: '1px',
    }}
  />
</a>

        </Space>
      )}
    </div>
  </SwiperSlide>
))}

  </Swiper>
</section>


      {/* Mission Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {missionCards.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8} style={{ display: "flex" }}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                cover={
                  <div style={{ padding: "1rem", textAlign: "center" }}>
                    {item.icon}
                  </div>
                }
              >
                <Card.Meta
                  title={
                    <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                      {item.title}
                    </Title>
                  }
                  description={
                    <Text style={{ color: theme.token.colorTextSecondary }}>
                      {item.description}
                    </Text>
                  }
                />
                <Divider style={{ margin: "1rem 0" }} />
                <Paragraph style={{ flexGrow: 1 }}>{item.content}</Paragraph>
              </Card>
            </Col>
          ))}
          <Col span={24} style={{ textAlign: "center", marginTop: "2rem" }}>
            <blockquote style={{ fontSize: "1.5rem", fontStyle: "italic", color: theme.token.colorPrimary }}>
              "Life gets a meaning, if it is lived for others"
            </blockquote>
            <Divider style={{ maxWidth: 200, margin: "1rem auto" }} />
          </Col>
        </Row>
      </section>

      {/* About Us Section */}
      <section style={{ padding: "4rem 1rem", background: theme.token.colorBgContainer }}>
        <Row gutter={[24, 24]} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Col xs={24} md={12}>
            <div style={{ padding: "1rem" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/90LjDMcWjl0?start=92"
                title="Sant Nirankari Charitable Foundation Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: theme.token.borderRadius }}
              ></iframe>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Space direction="vertical" size="middle">
              <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                About Us
              </Title>
              <Paragraph style={{ textAlign: "justify", color: theme.token.colorTextSecondary }}>
                The Sant Nirankari Charitable Foundation isn't just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.
              </Paragraph>
              <Button type="primary" size="large">
                Who We Are
              </Button>
            </Space>
          </Col>
        </Row>
      </section>

      {/* Vision Section */}
      <section style={{ padding: "4rem 1rem", background: "#f7fafd" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
    <Title level={2} style={{ color: "#1a237e", fontWeight: 700 }}>
      From Vision to Action
    </Title>
    <Paragraph style={{ fontSize: "1.1rem", color: "#374151" }}>
      Transforming noble ideals into impactful initiatives
    </Paragraph>
    <div style={{ marginTop: "2rem" }}>
      <Slider {...sliderSettings}>
        {cards.map((card, idx) => (
          <div key={idx}>
            <Card
              hoverable
              className="center-zoom-card"
              style={{
                margin: "0 8px",
                borderRadius: 16,
                minHeight: 420,
                transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
                border: "1.5px solid #1a237e",
                overflow: "hidden",
              }}
              cover={
                <div
                  style={{
                    height: 220,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
              }
            >
              <Title level={4} style={{ color: "#1a237e", fontWeight: 700, marginBottom: 8 }}>
                {card.title}
              </Title>
              <Paragraph style={{ color: "#374151", minHeight: 80 }}>
                {card.description}
              </Paragraph>
              <Button type="link" style={{ padding: 0 }}>
                Read More
              </Button>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
    <style>{`
      /* Center zoom effect for react-slick carousel */
      .slick-slide {
        transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        opacity: 0.7;
        pointer-events: none;
      }
      .slick-center .center-zoom-card {
        transform: scale(1.13);
        box-shadow: 0 8px 32px rgba(26,35,126,0.15);
        z-index: 2;
        border: 2.5px solid #1a237e;
      }
      .slick-center {
        opacity: 1 !important;
        pointer-events: auto;
      }
      .slick-slide .center-zoom-card {
        transform: scale(0.92);
        box-shadow: 0 2px 8px rgba(26,35,126,0.08);
        z-index: 1;
      }
      .slick-arrow {
        background: #fff !important;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        width: 40px;
        height: 40px;
        z-index: 5;
      }
      .slick-arrow:before {
        color: #1a237e;
        font-size: 28px;
      }
      @media (max-width: 900px) {
        .slick-slide .center-zoom-card,
        .slick-center .center-zoom-card {
          transform: scale(1) !important;
        }
      }
    `}</style>
  </div>
</section>

      {/* Partners Section */}
      <section style={{ padding: "4rem 1rem", background: theme.token.colorBgContainer }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
            Our Network of Changemakers
          </Title>
          <Carousel autoplay>
            {[0, 1].map((slideIndex) => (
              <div key={slideIndex}>
                <Row gutter={[16, 16]} justify="space-around" align="middle">
                  {[img4, img5, img6].map((img, idx) => (
                    <Col key={idx} span={8}>
                      <img src={img} alt={`Brand ${idx + 1 + slideIndex * 3}`} style={{ maxWidth: "100%", height: "auto" }} />
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* News Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
            Latest News & Stories
          </Title>
          <Paragraph type="secondary" style={{ fontSize: "1.1rem", color: theme.token.colorTextSecondary }}>
            Stay updated with our latest efforts and inspiring stories.
          </Paragraph>
          <Row gutter={[24, 24]} style={{ marginTop: "2rem" }}>
            {newsData.map((news, index) => (
              <Col key={index} xs={24} md={8}>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.3, duration: 0.6 }}>
                  <Card
                    hoverable
                    cover={
                      <div
                        style={{
                          height: 200,
                          backgroundImage: `url(${news.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderTopLeftRadius: theme.components.Card.borderRadius,
                          borderTopRightRadius: theme.components.Card.borderRadius,
                        }}
                      />
                    }
                  >
                    <Card.Meta
                      title={
                        <Title level={4} style={{ color: theme.token.colorPrimary, fontWeight: 700 }}>
                          {news.title}
                        </Title>
                      }
                      description={
                        <>
                          <Paragraph style={{ color: theme.token.colorTextSecondary }}>
                            {news.excerpt}
                          </Paragraph>
                          <Text type="secondary" style={{ color: theme.token.colorTextTertiary }}>
                            {news.date}
                          </Text>
                        </>
                      }
                    />
                    <Button type="link" style={{ padding: 0, marginTop: "1rem" }}>
                      Read More
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Button type="primary" size="large" style={{ marginTop: "2rem" }}>
            View All News
          </Button>
        </div>
      </section>
    </div>
);

export default HomePage;