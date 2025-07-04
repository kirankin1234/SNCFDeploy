import React from "react";
import { Layout, Row, Col, Typography, Space, Button, Divider } from "antd";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaRss } from "react-icons/fa";
import { ArrowUpOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import xIcon from "../assets/xicon.png";
import snmLogo from "../images/logo.webp";

const { Footer } = Layout;
const { Title, Text } = Typography;

const themeColors = {
  primary: "#0ABAB5",
  secondary: "#56DFCF",
  accent: "#ADEED9",
  pink: "#FFEDF3",
  textDark: "#1c276d",
  textSecondary: "#555555"
};

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "#4267B2" },
  {
    icon: <img src={xIcon} alt="X" style={{ width: "1em", height: "1em", verticalAlign: "middle" }} />,
    href: "#",
    label: "X",
    color: "#000000"
  },
  { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#FF0000" },
  { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#C13584" },
  { icon: <FaRss />, href: "#", label: "RSS", color: "#FFA500" },
];


const CustomFooter = () => (
  <Footer
    style={{
      background: "#ffffff",
      borderTop: `4px solid ${themeColors.primary}`,
      padding: "48px 0 24px 0",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.04)",
      position: "relative",
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
          <Title level={4} style={{ color: themeColors.primary, letterSpacing: 1 }}>Quick Links</Title>
          <Space direction="vertical" size="middle">
            {["Contact", "Social Media Guidelines", "Privacy Policy", "Terms of Service"].map((text, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.05, color: themeColors.primary }}
                style={{ color: themeColors.textSecondary, textDecoration: "none", display: "block", transition: "color 0.3s" }}
              >
                {text}
              </motion.a>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: themeColors.primary, letterSpacing: 1 }}>Useful Links</Title>
          <Space direction="vertical" size="middle">
            {["Awards and Honors", "Our Partners", "Foreign Contributions", "Contribute"].map((text, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.05, color: themeColors.primary }}
                style={{ color: themeColors.textSecondary, textDecoration: "none", display: "block", transition: "color 0.3s" }}
              >
                {text}
              </motion.a>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={4} style={{ color: themeColors.primary, letterSpacing: 1 }}>Connect With Us</Title>
          <Space size="middle">
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: themeColors.accent,
                  color: item.color,
                  fontSize: 20,
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
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

    <Divider style={{ margin: "40px 0 24px 0", borderColor: themeColors.accent }} />

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
            <Text strong style={{ color: themeColors.textDark, fontSize: 16 }}>Sant Nirankari Mission</Text>
          </Space>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: 12 }}>
          <Text type="secondary" style={{ fontSize: 14 }}>
            &copy; 2010 - {new Date().getFullYear()} | Sant Nirankari Charitable Foundation
          </Text>
        </Col>

        <Col xs={24} md={8} style={{ marginBottom: 12 }}>
          <Space>
            <motion.a href="#" whileHover={{ scale: 1.1 }} style={{ color: themeColors.primary, textDecoration: "none" }}>Sitemap</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.1 }} style={{ color: themeColors.primary, textDecoration: "none" }}>Donate</motion.a>
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
          boxShadow: `0 4px 16px ${themeColors.primary}66`,
          background: themeColors.primary,
          color: "#fff",
          border: "none",
        }}
        aria-label="Scroll to top"
      />
    </motion.div>
  </Footer>
);

export default CustomFooter;
