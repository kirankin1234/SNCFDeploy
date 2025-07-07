import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Lottie animations
import serviceAnimation from "../images/mission.json";
import harmonyAnimation from "../images/vision.json";

const { Title, Paragraph } = Typography;

const lottieSize = 100; // Reduced from 120 to 100 for both logos

const MissionVision = () => {
  const wavyStyle = {
    position: "relative",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #dbeafe, #f1f5f9)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    padding: "30px 20px",
    textAlign: "center",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const wavyAfterStyle = {
    content: "''",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60px",
    background: "url('https://www.svgbackgrounds.com/wp-content/uploads/2021/05/wave-6.svg') repeat-x",
    backgroundSize: "contain",
  };

  return (
    <div
      style={{
        padding: "60px 20px",
        background: "linear-gradient(to bottom right, #f1f5f9, #e2e8f0)",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: 50 }}
      >
        <Title
          level={1}
          style={{
            color: "#1a237e",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 0,
          }}
        >
          "Sant Nirankari Charitable Foundation"
        </Title>
        <Paragraph style={{ fontSize: 20, color: "#555", maxWidth: 800, margin: "0 auto" }}>
          Spreading the message of oneness, compassion, and selfless service across the world.
        </Paragraph>
      </motion.div>

      {/* Mission and Vision Cards */}
      <Row gutter={[32, 32]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Mission Card */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={wavyStyle}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: 24, // Reduced from 28 to 24
                  color: "#1a237e",
                  marginBottom: 20,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Our Mission
              </motion.h3>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                <Lottie
                  animationData={serviceAnimation}
                  loop={true}
                  style={{
                    width: lottieSize,
                    height: lottieSize,
                    margin: "0 auto",
                  }}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>
              <Paragraph style={{ fontSize: 16, color: "#374151", textAlign: "justify" }}>
                When we give cheerfully, and when it is accepted with gratitude to the almighty, all are blessed. SNCF with its holy roots is set up with an objective to provide a better body, mind and soul to all those who are deprived, with the essence of being an instrument to God’s will and purpose. We believe that happiness increases by sharing and caring. The mission of the SNCF thus, is to serve with humility and share our resources to heal, enrich and empower millions around the globe.
              </Paragraph>
              <div style={wavyAfterStyle}></div>
            </motion.div>
          </motion.div>
        </Col>

        {/* Vision Card */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={wavyStyle}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: 24, // Reduced from 28 to 24
                  color: "#1a237e",
                  marginBottom: 20,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Our Vision
              </motion.h3>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                <Lottie
                  animationData={harmonyAnimation}
                  loop={true}
                  style={{
                    width: lottieSize,
                    height: lottieSize,
                    margin: "0 auto",
                  }}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>
              <Paragraph style={{ fontSize: 16, color: "#374151", textAlign: "justify" }}>
                “Living the spirit of service”, the work that SNCF engages in with individuals, families and communities around the world is only made possible by the involvement of ordinary individuals with an extraordinary spirit of service. SNCF envisions a world with smiles, a heaven where all humans are healthy, educated and self-dependent; and as such would continue to strive and achieve this very objective by utilizing all its resources for the benefit of people across the world. We see a future where our proactive efforts along with our association with other like-minded organizations would help turn this dream into a reality.
              </Paragraph>
              <div style={wavyAfterStyle}></div>
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      {/* Floating Quote */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginTop: 80,
          textAlign: "center",
          background: "linear-gradient(90deg, #c7d2fe, #fef9c3)",
          padding: "30px 20px",
          borderRadius: "20px",
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={4} style={{ color: "#1a237e" }}>
          "Service to Humanity is the Service to God"
        </Title>
      </motion.div>

      {/* Call to Action Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{ textAlign: "center", marginTop: 40 }}
      >
        <Button type="primary" size="large" style={{ borderRadius: "8px" }}>
          Be Part of the Journey
        </Button>
      </motion.div>
    </div>
  );
};

export default MissionVision;
