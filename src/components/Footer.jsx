import React from "react";
import { Layout, Row, Col, Typography, Space, Button, Divider } from "antd";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRss } from "react-icons/fa";
import { ArrowUpOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import snmLogo from "../images/logo.webp";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#4267B2" },
  { icon: <FaTwitter />, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#FF0000" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#C13584" },
  { icon: <FaRss />, href: "#", label: "RSS", color: "#FFA500" },
];

const CustomFooter = () => (
  <Footer
    style={{
      background: "linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)",
      borderTop: "1px solid #e0e0e0",
      padding: "48px 0 24px 0",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.04)",
      position: "relative",
      zIndex: 1,
      overflowX: "hidden",
      width: "100%",
      maxWidth: "100vw",
    }}
  >
    {/* Animated Sections */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Row gutter={[48, 32]} justify="center" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1a237e", letterSpacing: 1 }}>Quick Links</Title>
          <Space direction="vertical" size="middle">
            {["Contact", "Social Media – Some Guidelines", "Privacy Policy", "Terms of Service"].map((text, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, color: "#1a237e" }}
                style={{ color: "#374151", textDecoration: "none", display: "block", transition: "color 0.3s" }}
              >
                {text}
              </motion.a>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1a237e", letterSpacing: 1 }}>Useful Links</Title>
          <Space direction="vertical" size="middle">
            {["Award and Honors", "Our Partners", "Foreign Contributions", "Contribute"].map((text, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1, color: "#1a237e" }}
                style={{ color: "#374151", textDecoration: "none", display: "block", transition: "color 0.3s" }}
              >
                {text}
              </motion.a>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#1a237e", letterSpacing: 1 }}>Connect With Us</Title>
          <Space size="middle">
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="footer-social-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#fff",
                  color: item.color,
                  fontSize: 20,
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  marginRight: 12,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </motion.a>
            ))}
          </Space>
        </Col>
      </Row>
    </motion.div>

    <Divider style={{ margin: "40px 0 24px 0" }} />

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          flexWrap: "wrap",
          padding: "0 16px",
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto"
        }}
      >
        <Col xs={24} md={8} style={{ marginBottom: 12 }}>
          <Space>
            <motion.img
              src={snmLogo}
              alt="Sant Nirankari Mission"
              style={{
                height: 36,
                borderRadius: 8,
                background: "#fff",
                padding: 4,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
              whileHover={{ scale: 1.1 }}
            />
            <Text strong style={{ color: "#1a237e", fontSize: 16 }}>Sant Nirankari Mission</Text>
          </Space>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: 12 }}>
          <Text type="secondary" style={{ fontSize: 14 }}>
            &copy; 2010 - {new Date().getFullYear()} | Sant Nirankari Charitable Foundation
          </Text>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: 12 }}>
          <Space>
            <motion.a href="#" whileHover={{ scale: 1.1 }} style={{ color: "#1a237e", textDecoration: "none" }}>Sitemap</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} style={{ color: "#1a237e", textDecoration: "none" }}>Donate</motion.a>
          </Space>
        </Col>
      </Row>
    </motion.div>

    {/* Scroll to Top Button */}
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ duration: 0.6, type: "spring" }}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
      }}
    >
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<ArrowUpOutlined />}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          boxShadow: "0 4px 16px rgba(26,35,126,0.12)",
          background: "#1a237e",
          color: "#fff",
          border: "none",
        }}
        aria-label="Scroll to top"
      />
    </motion.div>
  </Footer>
);

export default CustomFooter;
