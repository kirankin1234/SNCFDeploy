import React from "react";
import { Typography, Row, Col, Card, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import CountUp from "react-countup";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import trophyAnimation from "../images/trophy.json";
import medalAnimation from "../images/trophy.json";

import honour1 from "../images/honour1.jpeg";
import honour2 from "../images/honour2.jpeg";
import honour3 from "../images/honour3.jpeg";
import honour4 from "../images/honour4.jpeg";
import honour5 from "../images/honour5.jpeg";
import honour6 from "../images/honour6.jpeg";

const { Title, Paragraph } = Typography;

const honorsData = [
  { title: "Global Peace Award", image: honour1, description: "Recognized for efforts towards global harmony." },
  { title: "Humanitarian Service Medal", image: honour2, description: "Awarded for outstanding humanitarian contributions." },
  { title: "Excellence in Social Work", image: honour3, description: "Celebrated for dedication in social initiatives." },
  { title: "Community Impact Star", image: honour4, description: "For exceptional impact on local communities." },
  { title: "Healthcare Hero", image: honour5, description: "For advancing healthcare and saving lives." },
  { title: "Environmental Guardian", image: honour6, description: "For leadership in environmental stewardship." },
];

const counters = [
  { label: "Honours Achieved", end: 100 },
  { label: "Global Recognitions", end: 50 },
  { label: "Years of Service", end: 38 },
];

const HonoursContent = () => (
  <div
    style={{
      padding: "0",
      background: "linear-gradient(to bottom, #f0f4f8, #dbeafe)",
      minHeight: "100vh",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        padding: "64px 24px 32px",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Title
          level={1}
          style={{
            color: "#1a237e",
            fontWeight: 800,
            letterSpacing: 1,
            marginBottom: 12,
          }}
        >
          Honours & Recognitions
        </Title>
        <Paragraph
          style={{
            fontSize: 20,
            color: "#555",
            fontWeight: 500,
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Celebrating a journey of service and impact across the globe.
        </Paragraph>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ maxWidth: 600, margin: "24px auto 0" }}
        >
          <Paragraph
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 18,
              color: "#5f6a8d",
              fontWeight: 500,
              fontStyle: "italic",
              letterSpacing: 0.5,
              lineHeight: 1.5,
              userSelect: "none",
              textAlign: "center",
            }}
          >
            <span style={{ fontWeight: 700, color: "#00AEEF" }}>
              Your Appreciations
            </span>{" "}
            make us stronger to serve humanity
          </Paragraph>
        </motion.div>
      </motion.div>
    </motion.div>

    <Row
      gutter={[32, 32]}
      justify="center"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        zIndex: 1,
        position: "relative",
        padding: "32px 0",
      }}
    >
      {honorsData.map((honor, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card
            hoverable
            style={{
              borderRadius: "22px",
              padding: 0,
              textAlign: "center",
              boxShadow: "0 8px 32px #dbeafe99, 0 2px 8px #1c276d22",
              background: "linear-gradient(135deg, #e0f2fe 60%, #f1f5f9 100%)",
              minHeight: "480px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              border: "2.5px solid #00AEEF",
              transition: "box-shadow 0.3s, border 0.3s",
            }}
            bodyStyle={{ padding: 0 }}
          >
            <div style={{ width: "100%", padding: "0", margin: "0" }}>
              <img
                src={honor.image}
                alt={honor.title}
                style={{
                  width: "100%",
                  height: "240px",
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  objectFit: "contain", // Updated here
                  background: "#e0e7ef",
                  boxShadow: "0 2px 12px #dbeafe55",
                  display: "block",
                  borderBottom: "1.5px solid #00AEEF",
                }}
              />
            </div>
            <div
              style={{
                padding: "24px 24px 18px 24px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Title level={4} style={{ color: "#1a237e", marginBottom: 12, fontWeight: 700 }}>
                {honor.title}
              </Title>
              <Paragraph
                style={{
                  fontSize: 16,
                  color: "#374151",
                  textAlign: "justify",
                  margin: 0,
                }}
              >
                {honor.description}
              </Paragraph>
            </div>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Swiper Carousel */}
    <div style={{ marginTop: 40 }}>
      <Swiper
        spaceBetween={36}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="coverflow"
        centeredSlides
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          slideShadows: true,
          stretch: 0,
          depth: 120,
          modifier: 1.2,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        {honorsData.map((honor, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "linear-gradient(135deg, #e0f2fe, #f1f5f9)",
                borderRadius: "22px",
                boxShadow: "0 8px 32px #00AEEF44, 0 2px 8px #1c276d22",
                padding: 32,
                textAlign: "center",
                position: "relative",
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1.5px solid #00AEEF",
              }}
            >
              <Lottie
                animationData={index % 2 === 0 ? medalAnimation : trophyAnimation}
                style={{ height: 90, marginBottom: 14 }}
                loop
              />
              <Title
                level={4}
                style={{
                  color: "#1a237e",
                  marginBottom: 0,
                  textAlign: "center",
                  width: "100%",
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                {honor.title}
              </Title>
              <div
                style={{
                  margin: "0 auto 18px auto",
                  width: "60%",
                  height: 4,
                  background: "#00AEEF",
                  borderRadius: 2,
                  marginTop: 8,
                  marginBottom: 18,
                }}
              />
              <img
                src={honor.image}
                alt={honor.title}
                style={{
                  width: "96%",
                  borderRadius: 16,
                  objectFit: "contain", // Updated here
                  minHeight: 180,
                  maxHeight: 220,
                  background: "#e0e7ef",
                  boxShadow: "0 2px 12px #dbeafe55",
                  marginBottom: 18,
                  display: "block",
                }}
              />
              <Paragraph
                style={{
                  fontSize: 16,
                  color: "#374151",
                  textAlign: "justify",
                  marginBottom: 0,
                }}
              >
                {honor.description}
              </Paragraph>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Animated Counters */}
    <Row gutter={32} justify="center" style={{ marginTop: 80 }}>
      {counters.map((counter, idx) => (
        <Col xs={24} md={8} style={{ textAlign: "center" }} key={idx}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 * idx }}
            viewport={{ once: false }}
          >
            <Title level={2} style={{ color: "#1a237e", marginBottom: 0 }}>
              <CountUp end={counter.end} duration={4} />+
            </Title>
            <Paragraph style={{ color: "#555", fontWeight: 500 }}>{counter.label}</Paragraph>
          </motion.div>
        </Col>
      ))}
    </Row>

    {/* Parallax Floating Decorations */}
    <Parallax speed={-15} style={{ position: "absolute", top: 100, left: 20, zIndex: 0 }}>
      <Lottie animationData={trophyAnimation} style={{ height: 90, opacity: 0.4 }} loop />
    </Parallax>
    <Parallax speed={10} style={{ position: "absolute", bottom: 100, right: 20, zIndex: 0 }}>
      <Lottie animationData={medalAnimation} style={{ height: 90, opacity: 0.4 }} loop />
    </Parallax>
  </div>
);

const Honours = () => (
  <ParallaxProvider>
    <HonoursContent />
  </ParallaxProvider>
);

export default Honours;
