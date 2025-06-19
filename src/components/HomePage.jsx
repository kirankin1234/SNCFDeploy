import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import '@fontsource/lavishly-yours';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CalendarOutlined, RightCircleOutlined } from '@ant-design/icons';



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

const events = [
  { id: 1, name: 'Blood Donation Camp', date: '20 June 2025', link: '/events/blood-donation', category: 'heal' },
  { id: 2, name: 'Tree Plantation Drive', date: '25 June 2025', link: '/events/tree-plantation', category: 'enrich' },
  { id: 3, name: 'Free Health Checkup', date: '30 June 2025', link: '/events/health-checkup', category: 'heal' },
  { id: 4, name: 'Youth Empowerment Workshop', date: '5 July 2025', link: '/events/youth-workshop', category: 'empower' },
];

const categoryColors = {
  heal: '#28B57B',     // Green
  enrich: '#1BBAC7',   // Blue
  empower: '#E93E8F',  // Pink
};


const statsData = {
  heal: [
    { label: 'Blood Units Donated', value: '13,19,758+' },
    { label: 'Total Patients Treated', value: '1,68,503+' },
    { label: 'Camps Organized', value: '615+' },
    { label: 'Blood Units Donated', value: '13,19,758+' },
    { label: 'Total Patients Treated', value: '1,68,503+' },
  ],
  enrich: [
    { label: 'Sewing Centres', value: '45+' },
    { label: 'Youth Benefitted', value: '13,500+' },
    { label: 'Sewing Centres', value: '45+' },
    { label: 'Youth Benefitted', value: '13,500+' },
    { label: 'Sewing Centres', value: '45+' },
  ],
  empower: [
    { label: 'Sewing Centres', value: '45+' },
    { label: 'Youth Benefitted', value: '13,500+' },
    { label: 'Total Trees Planted', value: '15,88,875+' },
    { label: 'Oxygen Concentrators', value: '775+' },
    { label: 'Covid Vaccination Centres', value: '55+' },
  ],
};





const cards = [
  {
    image: image,
    title: "Sant Nirankari Health City",
    description: "The Sant Nirankari Health City is a comprehensive healthcare hub currently under construction, aiming to provide top-notch medical care at affordable rates for everyone.",
    category: "heal",
  },
  {
    image: image2,
    title: "Oneness वन",
    description: "This innovative initiative was launched in 2021 to tackle deforestation by transforming neglected areas into flourishing mini-forests, restoring biodiversity one tiny plot at a time.",
    category: "enrich",
  },
  {
    image: image3,
    title: "Blood Donation",
    description: "For over 38 years, the mission has held regular blood donation drives. Since 2010, SNCF leads this life-saving effort, continuing Baba Hardev Singh Ji Maharaj's message.",
    category: "empower",
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
    title: "",
    category: "heal",  // ✅ Must add this
    description: "SNCF's Multifaceted Approach towards healthcare initiatives",
    icon: <img src={healIcon} alt="Heal Icon" style={{ width: "5rem" }} />,
    content: `SNCF enhances healthcare through hospitals, clinics, blood banks, dispensaries, and environmental initiatives.`,
  },
  {
    title: "",
    category: "enrich",  // ✅ Must add this
    description: "SNCF's Holistic Approach to Social Change",
    icon: <img src={enrichIcon} alt="Enrich Icon" style={{ width: "5rem" }} />,
    content: `SNCF empowers communities via education, supporting schools, vocational centers, libraries, and hostels across India.`,
  },
  {
    title: "",
    category: "empower",  // ✅ Must add this
    description: "SNCF investing in self-sufficiency, instilling empowerment through opportunity",
    icon: <img src={empowerIcon} alt="Empower Icon" style={{ width: "5rem" }} />,
    content: `SNCF fosters empowerment through workshops, women/youth programs, elder care, disaster relief, and disability support.`,
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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

                  <Title level={1} style={{ ...slide.textStyle, fontWeight: 900, marginBottom: 0, fontFamily: "'Lavishly Yours', cursive", fontSize: "4rem", textShadow: "4px 1px 10px 4 px #fff", }}>
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





    <section
      style={{
        fontFamily: "Poppins, sans-serif",
        background: 'linear-gradient(90deg, #f0f2f5 0%, #ffffff 100%)',
        padding: '12px 0',
        marginTop: '20px',
        borderRadius: '14px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          minWidth: '200%',
          animation: 'scroll 30s linear infinite',
        }}
      >
        {[...events, ...events].map((event, index) => (
          <a
            key={index}
            href={event.link}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginRight: '50px',
              color: '#1890ff',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: '600',
              transition: 'transform 0.3s ease, color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.color = categoryColors[event.category];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = '#1890ff';
            }}
          >
            <CalendarOutlined style={{ marginRight: '8px', fontSize: '20px', color: '#52c41a' }} />
            {event.name} — {event.date}
            <RightCircleOutlined style={{ marginLeft: '8px', fontSize: '18px', color: '#faad14' }} />
          </a>
        ))}
      </div>

      {/* Keyframes for continuous scroll */}
      <style>
        {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
      </style>
    </section>


























    {/* Mission Section */}
    <section style={{ padding: "4rem 1rem", background: "#f9f9f9" }}>
      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {missionCards.map((item, index) => {
          const missionColors = {
            heal: "rgba(40,181,123,0.15)",
            enrich: "rgba(27,186,199,0.15)",
            empower: "rgba(233,62,143,0.15)",
          };
          const missionSolid = {
            heal: "#28B57B",
            enrich: "#1BBAC7",
            empower: "#E93E8F",
          };
          const catKey = item.category.toLowerCase();
          const [popupVisible, setPopupVisible] = React.useState(false);
          const [seeMoreHover, setSeeMoreHover] = React.useState(false);

          return (
            <Col key={index} xs={24} sm={12} md={8} style={{ display: "flex", position: "relative" }}>
              <div
                style={{ width: "100%", position: "relative", cursor: "pointer" }}
                onMouseEnter={() => setPopupVisible(true)}
                onMouseLeave={() => {
                  setPopupVisible(false);
                  setSeeMoreHover(false);
                }}
              >
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease",
                  }}
                  cover={
                    <div style={{ padding: "1rem", textAlign: "center" }}>
                      {item.icon}
                    </div>
                  }
                >
                  <Card.Meta
                    title={
                      <Typography.Title
                        level={4}
                        style={{ color: theme.token.colorPrimary, fontWeight: 700, textAlign: "center", marginTop: "-10px" }}
                      >
                        {item.title}
                      </Typography.Title>
                    }
                    description={
                      <Typography.Text
                        style={{ color: theme.token.colorTextSecondary, display: "block", textAlign: "center" }}
                      >
                        {item.description}
                      </Typography.Text>
                    }
                  />
                  <Divider style={{ margin: "1rem 0" }} />
                  <Typography.Paragraph style={{ flexGrow: 1, textAlign: "center" }}>
                    {item.content}
                  </Typography.Paragraph>
                </Card>

                {/* Chat Bubble Popup */}
                <div
                  style={{
                    opacity: popupVisible ? 1 : 0,
                    pointerEvents: popupVisible ? "auto" : "none",
                    position: 'absolute',
                    top: '-16px',
                    right: '-16px',
                    width: '300px',
                    background: missionColors[catKey],
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    padding: '20px',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    transition: 'opacity 0.5s cubic-bezier(.22,.68,0,1.71), transform 0.5s cubic-bezier(.22,.68,0,1.71)',
                    transform: popupVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(-20px)",
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-18px',
                      right: '30px',
                      width: 0,
                      height: 0,
                      borderLeft: '14px solid transparent',
                      borderRight: '14px solid transparent',
                      borderTop: `18px solid ${missionColors[catKey]}`,
                      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
                    }}
                  />
                  {statsData[catKey].map((stat, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#fff",
                        padding: "10px 14px",
                        borderRadius: 8,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "#1c276d" }}>{stat.label}</span>
                      <span style={{ fontWeight: 700, color: missionSolid[catKey] }}>{stat.value}</span>
                    </div>
                  ))}
                  <button
                    style={{
                      background: seeMoreHover ? missionSolid[catKey] : "transparent",
                      color: seeMoreHover ? "#fff" : missionSolid[catKey],
                      border: `2px solid ${missionSolid[catKey]}`,
                      borderRadius: 20,
                      padding: "6px 18px",
                      fontWeight: 600,
                      cursor: "pointer",
                      alignSelf: "flex-end",
                      marginTop: 10,
                      transition: "background 0.3s, color 0.3s",
                    }}
                    onMouseEnter={() => setSeeMoreHover(true)}
                    onMouseLeave={() => setSeeMoreHover(false)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
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
            <Title level={2} style={{ color: "#1890ff", fontWeight: 700 }}>
              About Us
            </Title>
            <Paragraph style={{ textAlign: "justify", color: theme.token.colorTextSecondary }}>
              The Sant Nirankari Charitable Foundation isn't just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.
            </Paragraph>
            <Button type="primary" size="large" style={{ background: "#1890ff", color: "white" }} href="/about">
              Who We Are
            </Button>
          </Space>
        </Col>
      </Row>
    </section>

    {/* Vision Section */}
    <section style={{ padding: "4rem 1rem", background: "#f7fafd" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ color: "#1890ff", fontWeight: 700 }}>
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
                    border: `2px solid ${categoryColors[card.category]}`,
                    transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
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
                  <Button
                    type="default"
                    style={{
                      padding: 0,
                      background: "transparent",
                      border: "none",
                      color: "#1890ff",
                      fontWeight: 600,
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1c276d")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1890ff")}
                  >
                    Read More
                  </Button>
                </Card>
              </div>
            ))}
          </Slider>
        </div>

        {/* Updated Styles: Removed Zoom Effect */}
        <style>{`
      .slick-slide {
        transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        opacity: 1 !important;
        pointer-events: auto;
      }
      .slick-center .center-zoom-card {
        transform: scale(1);
        box-shadow: 0 4px 16px rgba(0,0,0,0.10);
        z-index: 1;
      }
      .slick-slide .center-zoom-card {
        transform: scale(1);
        box-shadow: 0 4px 16px rgba(0,0,0,0.10);
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
    <section
      style={{
        padding: "4rem 1rem",
        background: theme.token.colorBgContainer,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Title
          level={2}
          style={{
            color: theme.token.colorPrimary,
            fontWeight: 700,
            marginBottom: "2rem",
          }}
        >
          Our Network of Changemakers
        </Title>

        {/* First Row - Continuous Right to Left */}
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginBottom: "2rem",
            background: "#f0f4ff",
            borderRadius: "12px",
            padding: "8px 0",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              minWidth: "200%",
              animation: "scroll 40s linear infinite",
            }}
          >
            {[img4, img5, img6, img4, img5, img6, img4, img5, img6].map((img, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 2rem",
                }}
              >
                <img
                  src={img}
                  alt={`Brand ${idx + 1}`}
                  style={{
                    maxHeight: "90px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(0%) brightness(1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Continuous Left to Right */}
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            background: "#f0f4ff",
            borderRadius: "12px",
            padding: "8px 0",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              minWidth: "200%",
              animation: "scrollReverse 40s linear infinite",
            }}
          >
            {[img4, img5, img6, img4, img5, img6, img4, img5, img6].map((img, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 2rem",
                }}
              >
                <img
                  src={img}
                  alt={`Brand ${idx + 1}`}
                  style={{
                    maxHeight: "90px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(0%) brightness(1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scrollReverse {
        0% { transform: translateX(0); }
        100% { transform: translateX(50%); }
      }
    `}</style>
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