import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion } from "framer-motion";
import { PlayCircleOutlined, ArrowUpOutlined } from "@ant-design/icons";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";

const { Title, Paragraph, Text } = Typography;

const counterData = [
  // HEAL Category
  { title: "Blood Units Donated", count: 1319758, color: "#22B573", suffix: "+" },
  { title: "Lives Potentially Saved", count: 3906450, color: "#22B573", suffix: "+" },
  { title: "Camps Organised (Health & Eye)", count: 1076, color: "#22B573", suffix: "+" },
  { title: "Total Patients Treated", count: 598510, color: "#22B573", suffix: "+" },
  { title: "Sewadars Contributed", count: 1100000, color: "#22B573", suffix: "+" },

  // ENRICH Category
  { title: "Cleanliness Drives Conducted", count: 1533, color: "#00AEEF", suffix: "+" },
  { title: "Water Bodies Cleaned", count: 1533, color: "#00AEEF", suffix: "+" },
  { title: "Skill Development Villages Adopted", count: 7, color: "#00AEEF", suffix: "+" },
  { title: "People Benefited (Watershed Project)", count: 30000, color: "#00AEEF", suffix: "+" },

  // EMPOWER Category (With Softer Pink)
  { title: "Tree Plantation Drives", count: 2270, color: "#F48FB1", suffix: "+" },
  { title: "Total Trees Planted", count: 1588875, color: "#F48FB1", suffix: "+" },
  { title: "Oneness Vann Created", count: 603, color: "#F48FB1", suffix: "+" },
];





// Helper for scroll button hover effect
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = "scale(1.2)";
};
const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "scale(1)";
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
    },
  }),
  hover: { scale: 1.06, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" },
};

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "48px 8px 32px 8px",
        background: "linear-gradient(to bottom, #f8fafc, #e0e7ef)",
        minHeight: "100vh",
      }}
    >
      {/* Page Header */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
        style={{ textAlign: "center", marginBottom: 32 }}
      >
        <Title level={1} style={{ color: "#1a237e", marginBottom: 0 }}>
          Sant Nirankari Charitable Foundation
        </Title>
        <Text style={{ fontSize: 18, color: "#555" }}>
          Spreading Kindness, Building Society.
        </Text>
      </motion.div>

      {/* Description Section */}
      <Row
        gutter={[32, 32]}
        justify="center"
        style={{ maxWidth: 1200, margin: "0 auto", alignItems: "stretch" }}
      >
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 90 }}
            viewport={{ once: false }}
          >
            <Card
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: 20,
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              hoverable
            >
              <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
                The Sant Nirankari Charitable Foundation (SNCF) goes beyond just charity. Our mission is to spread kindness and care throughout the world, building a better society for those in need. Founded in 2010 to implement the vision of Nirankari Baba Ji,&nbsp;
                <span style={{ color: "#d97706", fontWeight: "bold", fontSize: 18 }}>
                  <Typewriter
                    words={['"Life gets a meaning, if it is lived for others"']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2500}
                  />
                </span>
                , SNCF focuses on social and charitable work.
              </Paragraph>

              <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
                Our organisation is guided by the principle of <strong>Service with Humility</strong>. This mission shapes our work across three key areas: social responsibility, environmental initiatives, and healthcare programs.
              </Paragraph>

              <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
                We empower underprivileged communities by offering resources and support to build brighter futures. Caring for nature goes hand-in-hand with caring for society, which is why environmental conservation is a cornerstone of our work. We believe healthcare is a basic human right, and providing affordable medical services remains our priority.
              </Paragraph>

              <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#374151", textAlign: "justify" }}>
                Our reach extends to remote areas and underserved communities, ensuring everyone has access to the help they need.
              </Paragraph>

              <motion.div
                whileHover={{ scale: 1.07 }}
                style={{ textAlign: "center", marginTop: 18 }}
              >
                <Button type="primary" size="large" icon={<PlayCircleOutlined />}>
                  Learn More
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </Col>

        {/* YouTube + Counters Section */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 90 }}
            viewport={{ once: false }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              marginBottom: 28,
            }}
          >
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/90LjDMcWjl0?start=92&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "16px", border: "none" }}
            ></iframe>
          </motion.div>

          {/* Counters Below Video */}




          <Row
            gutter={[16, 16]}
            justify="center"
            style={{ marginTop: 0 }}
          >
            {counterData.map((item, index) => (
              <Col xs={12} sm={8} key={index}>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={cardVariants}
                  viewport={{ once: false }}
                >
                  <Card
                    style={{
                      width: 180,            // Fixed width
                      height: 180,           // Fixed height
                      borderRadius: "14px",
                      textAlign: "center",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                      cursor: "pointer",
                      background: `linear-gradient(135deg, ${item.color}18, #ffffff)`,
                      margin: "0 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                    hoverable
                  >
                    <Title level={3} style={{ color: item.color, fontSize: "28px", marginBottom: 6 }}>
                      <CountUp end={item.count} duration={2.5} separator="," suffix={item.suffix} />
                    </Title>
                    <Paragraph style={{ fontSize: 14, color: "#374151", marginBottom: 0 }}>
                      {item.title}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>




        </Col>
      </Row>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<ArrowUpOutlined />}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 32,
            right: 32,
            boxShadow: "0 4px 16px rgba(26,35,126,0.12)",
            zIndex: 1000,
            background: "#1a237e",
            color: "#fff",
            border: "none",
            transition: "transform 0.3s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Scroll to top"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
