import React from 'react';
import { Button, Card, Row, Col, Typography, Space, Carousel, Image, Divider, Tooltip, Progress, Avatar, Tag } from 'antd';
import { ConfigProvider } from 'antd';
import theme from '../theme/themeConfig';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaHandsHelping, FaTint, FaSmile, FaLeaf, FaAward, FaStar, FaGlobe, FaChartLine } from 'react-icons/fa';
import { MdVolunteerActivism, MdOutlineBloodtype } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';
import Lottie from 'lottie-react';
import video from "../images/Blood_donation_reel.mp4";
import projectImg from '../images/blood2.jpg';
import blogImg1 from '../images/blood.jpeg';
import blogImg2 from '../images/blood.jpeg';
import blogImg3 from '../images/blood.jpeg';
import celebrationAnimation from '../images/corner.json';
import pulseAnimation from '../images/corner.json';
import img from '../images/health.jpeg';

const { Title, Paragraph, Text } = Typography;

const donationData = [
  { name: '2019', donations: 500 },
  { name: '2020', donations: 750 },
  { name: '2021', donations: 1200 },
  { name: '2022', donations: 1500 },
  { name: '2023', donations: 1800 },
  { name: '2024', donations: 2200 },
];

const bloodTypeData = [
  { name: 'Type A', value: 350 },
  { name: 'Type B', value: 280 },
  { name: 'Type O', value: 420 },
  { name: 'Type AB', value: 150 },
];

const radarData = [
  { subject: 'Awareness', A: 120, fullMark: 150 },
  { subject: 'Donations', A: 98, fullMark: 150 },
  { subject: 'Volunteers', A: 86, fullMark: 150 },
  { subject: 'Reach', A: 99, fullMark: 150 },
  { subject: 'Impact', A: 85, fullMark: 150 },
  { subject: 'Growth', A: 65, fullMark: 150 },
];

const stats = [
  {
    value: '1200+',
    label: 'Donations Received',
    icon: <FaTint color="#d54e91" size={32} />,
    color: '#d54e91'
  },
  {
    value: '800+',
    label: 'Pints of Blood Collected',
    icon: <MdOutlineBloodtype color="#5aa949" size={32} />,
    color: '#5aa949'
  },
  {
    value: '500+',
    label: 'Happy Recipients',
    icon: <FaSmile color="#59cbe8" size={32} />,
    color: '#59cbe8'
  },
];

const facts = [
  "Every 2 seconds, someone needs blood.",
  "A single blood donation can save up to 3 lives.",
  "Blood cannot be manufactured — it must come from donors.",
  "Type O negative is the universal donor type.",
  "Blood donors are lifesavers. Be one today.",
];

const COLORS = ['#E91E63', '#9C27B0', '#673AB7', '#3F51B5'];

const testimonials = [
  {
    text: 'Donating blood through this organization was such a seamless and rewarding experience. Their dedication to saving lives is truly inspiring!',
    name: 'John Doe',
    role: 'Regular Donor',
    img: img,
  },
  {
    text: 'They make the process of blood donation so easy and accessible. I feel honored to be part of their mission.',
    name: 'Jane Smith',
    role: 'Community Volunteer',
    img: img,
  },
  {
    text: 'Professional, caring, and efficient team. I recommend everyone to participate in their drives.',
    name: 'Rahul Verma',
    role: 'Youth Ambassador',
    img: img,
  },
];

const blogData = [
  {
    img: blogImg1,
    title: 'Successful Blood Donation Drive in Rural Area',
    date: 'April 26, 2025',
    desc: 'Our recent blood donation drive in a rural community collected over 100 units of blood, significantly boosting local supplies.',
  },
  {
    img: blogImg2,
    title: 'Partnership with Local Hospital to Improve Blood Storage',
    date: 'April 20, 2025',
    desc: "We've partnered with a leading hospital to implement advanced blood storage solutions, ensuring longer shelf life and better quality.",
  },
  {
    img: blogImg3,
    title: 'New Awareness Campaign Launched to Encourage Youth Donations',
    date: 'April 15, 2025',
    desc: 'Our new campaign targets young adults to raise awareness about the importance of regular blood donations.',
  },
];

const Drives = () => (
  <ConfigProvider theme={theme}>
    <div style={{ fontFamily: theme.token.fontFamily, background: theme.token.colorBgLayout, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <Card
          style={{
            border: 'none',
            borderRadius: 0,
            boxShadow: '0 8px 32px rgba(28,39,109,0.10)',
            background: 'transparent',
            marginBottom: 0,
          }}
          bodyStyle={{ padding: '56px 24px 36px' }}
        >
          <Row
            gutter={[32, 32]}
            align="middle"
            justify="center"
            style={{ maxWidth: 1200, margin: '0 auto', minHeight: 480 }}
          >
            {/* Left Video with Bordered Container */}
            <Col xs={24} md={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                style={{
                  width: '100%',
                  maxWidth: 420,
                  borderRadius: 24,
                  border: '2.5px solid #0ABAB5',
                  boxShadow: '0 8px 40px #56DFCF44, 0 2px 8px #0ABAB522',
                  background: '#fff',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: 370,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    borderRadius: 18,
                    background: '#eaf3fc',
                    display: 'block',
                    boxShadow: '0 0 32px #56DFCF33',
                    transition: 'box-shadow 0.3s',
                  }}
                />
                {/* Floating drop icon */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 0.7, y: [24, 0, 24] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                  style={{
                    position: "absolute",
                    right: 18,
                    top: 18,
                    zIndex: 2,
                    fontSize: 36,
                    color: "#0ABAB5",
                    pointerEvents: "none"
                  }}
                >
                  <i className="fa fa-tint" />
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Text Content */}
            <Col xs={24} md={14} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <Title level={2} style={{
                    color: theme.token.colorText,
                    fontWeight: 800,
                    letterSpacing: 0.5,
                    marginBottom: 8,
                    background: 'linear-gradient(90deg, #0ABAB5 40%, #56DFCF 60%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: 'justify'
                  }}>
                    The Gift of Life: A Million Drops, Countless Lives Saved
                  </Title>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <Paragraph style={{
                    color: theme.token.colorTextSecondary,
                    fontSize: 18,
                    fontWeight: 500,
                    marginBottom: 12,
                    textAlign: 'justify'
                  }}>
                    For over 38 years, devotees of the mission have held regular blood donation drives across India. Honouring the message of Baba Hardev Singh Ji Maharaj and continuing the Mission's legacy of healthcare support, since 2010, the Sant Nirankari Charitable Foundation has led these life-saving efforts, solidifying SNM's position as a leading blood donation organisation.
                  </Paragraph>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  <Paragraph style={{
                    color: '#0ABAB5',
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 24,
                    textAlign: 'justify'
                  }}>
                    Blood should flow in veins, not in drains…
                  </Paragraph>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    boxShadow: '0 0 0 8px #ADEED944, 0 2px 8px #0ABAB533',
                    transition: { duration: 0.4 }
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ display: 'inline-block', marginTop: 8 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      border: "1.5px solid #0ABAB5",
                      color: "#0ABAB5",
                      borderRadius: 14,
                      fontWeight: 600,
                      fontSize: 18,
                      boxShadow: '0 2px 8px #0ABAB533',
                      backdropFilter: 'blur(8px)',
                      transition: 'box-shadow 0.3s, background 0.3s',
                    }}
                  >
                    Donate Now
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Card>

        {/* Animated Lottie celebration */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{
            position: 'absolute',
            right: 40,
            top: 0,
            width: 120,
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <Lottie animationData={celebrationAnimation} loop />
        </motion.div>

        {/* Lower 'Did you know' Carousel */}
        <Card
          bodyStyle={{
            padding: '24px 0 0 0',
            backgroundImage: 'linear-gradient(135deg, #ADEED9, #56DFCF, #0ABAB5)',
            color: '#fff',
            borderRadius: 0,
            position: 'relative'
          }}
          style={{ marginBottom: 0, border: "none" }}
        >
          <Row align="middle" justify="center" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
            <Col xs={24} md={6} style={{ paddingLeft: 24, position: 'relative', zIndex: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Title level={4} style={{ color: '#333333', margin: 0, textAlign: 'left' }}>
                  Do you know?
                </Title>
              </motion.div>
            </Col>
            <Col xs={24} md={18} style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <Carousel autoplay dotPosition="bottom" effect="fade">
                  {facts.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 * index }}
                      style={{ minHeight: 48, display: 'flex', alignItems: 'flex-end' }}
                    >
                      <Paragraph
                        style={{
                          color: '#333333',
                          margin: 0,
                          fontSize: 16,
                          padding: '0 16px 24px',
                          textAlign: 'left',
                          fontStyle: 'italic',
                          letterSpacing: '0.01em',
                          width: '100%',
                        }}
                      >
                        <FaLeaf style={{ marginRight: 8, color: '#28B57B' }} />
                        {fact}
                      </Paragraph>
                    </motion.div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Card>
      </section>









      {/* Stats Section */}
      <section
        style={{
          padding: '64px 24px',
          marginTop: 32,
        }}
      >
        <Row
          gutter={[24, 24]}
          justify="center"
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 12px 24px ${stat.color}33`,
                  rotate: [0, 2, -2, 0],
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  bordered={false}
                  style={{
                    textAlign: 'center',
                    borderRadius: theme.token.borderRadius,
                    padding: '32px 16px',
                    backgroundColor: '#ffffff',
                    boxShadow: `0 4px 12px ${stat.color}22`,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.4 + index * 0.1 }}
                  >
                    <div style={{ marginBottom: 10 }}>{stat.icon}</div>
                  </motion.div>
                  <Title level={3} style={{ color: stat.color, marginBottom: 8 }}>
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 180, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                  </Title>
                  <Paragraph style={{ color: theme.token.colorTextSecondary, margin: 0 }}>
                    {stat.label}
                  </Paragraph>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 0.8 + index * 0.1 }}
                  >
                    <Progress
                      percent={100}
                      showInfo={false}
                      strokeColor={stat.color}
                      trailColor="#FFEDF3"
                      style={{ marginTop: 16 }}
                    />
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>


      {/* Graph Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
        }}
        title={
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Title level={3} style={{ margin: 0, color: '#0ABAB5' }}>Donation Impact Overview</Title>
          </motion.div>
        }
      >
        <Row gutter={[24, 24]}>
          {/* Yearly Donation Trends */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card bordered={false} title="Yearly Donation Trends">
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={donationData}>
                    <CartesianGrid stroke="#E0E0E0" strokeDasharray="4 4" />
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis stroke="#333" />
                    <RechartsTooltip />
                    <Line
                      type="monotone"
                      dataKey="donations"
                      stroke="#0ABAB5"
                      strokeWidth={3}
                      dot={{ r: 4, stroke: '#0ABAB5', strokeWidth: 2, fill: '#ffffff' }}
                      activeDot={{ r: 6, stroke: '#0ABAB5', strokeWidth: 2, fill: '#ffffff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Col>

          {/* Donation Statistics */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card bordered={false} title="Donation Statistics">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={donationData}>
                    <CartesianGrid stroke="#E0E0E0" strokeDasharray="4 4" />
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis stroke="#333" />
                    <RechartsTooltip />
                    <Bar dataKey="donations" radius={[8, 8, 0, 0]}>
                      {donationData.map((entry, index) => (
                        <Cell
                          key={`cell-bar-${index}`}
                          fill={index % 2 === 0 ? '#0ABAB5' : '#56DFCF'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Col>

          {/* Blood Type Distribution */}
          <Col xs={24} md={8}>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card bordered={false} title="Blood Type Distribution">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={bloodTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      fill="#0ABAB5"
                      dataKey="value"
                      label
                    >
                      {bloodTypeData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index % 2 === 0 ? '#0ABAB5' : '#56DFCF'}
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Radar Chart */}
        <Divider />
        <Row justify="center">
          <Col xs={24} md={12}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <Card bordered={false} title="Foundation Impact Radar">
                <ResponsiveContainer width="100%" height={240}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#E0E0E0" />
                    <PolarAngleAxis dataKey="subject" stroke="#333" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#333" />
                    <Radar
                      name="Impact"
                      dataKey="A"
                      stroke="#0ABAB5"
                      fill="#56DFCF"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Card>


      {/* Project Details Section */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <Row
          gutter={[48, 48]}
          style={{ maxWidth: 1200, margin: '0 auto' }}
          align="middle"
        >
          {/* Left Content */}
          <Col xs={24} md={14}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Card
                bordered={false}
                style={{
                  borderRadius: theme.token.borderRadius,
                  padding: '32px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
                bodyStyle={{ padding: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Title level={3} style={{ color: '#0ABAB5' }}>
                    About the Project
                  </Title>
                </motion.div>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  >
                    <Paragraph
                      style={{
                        color: theme.token.colorTextSecondary,
                        textAlign: 'justify',
                        marginBottom: 16,
                      }}
                    >
                      {[
                        "Our blood donation project is dedicated to building a healthier future by ensuring a constant and safe blood supply for hospitals and patients.",
                        "We focus not only on collecting blood but also on raising awareness about the importance of regular donation. Our initiatives make the donation process easy, transparent, and rewarding.",
                        "By engaging volunteers, educating youth, and utilizing technology, we create a sustainable model where timely blood availability becomes a reality. Every drop counts, every donor matters.",
                      ][i]}
                    </Paragraph>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button type="link" href="#video-section" style={{ padding: 0, color: '#0ABAB5', fontWeight: 600 }}>
                    Read More
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </Col>

          {/* Right Image with Animated Pulse */}
          <Col xs={24} md={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 6px 18px rgba(0,0,0,0.10)',
                  '0 12px 28px rgba(0,0,0,0.12)',
                  '0 6px 18px rgba(0,0,0,0.10)'
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Lottie animationData={pulseAnimation} style={{ width: 50, marginBottom: -20 }} />
              <img
                src={projectImg}
                alt="Project"
                style={{
                  width: '70%',
                  display: 'block',
                  margin: '0 auto',
                  borderRadius: theme.token.borderRadius,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </section>



      {/* Blogs Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
          background: 'linear-gradient(120deg, #f5fbfd 60%, #e2f4fc 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
        title={
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Title level={3} style={{ margin: 0, color: '#1c276d' }}>Latest Updates</Title>
          </motion.div>
        }
      >
        <Row gutter={[24, 24]}>
          {blogData.map((blog, idx) => (
            <Col xs={24} md={8} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <Card
                  hoverable
                  cover={
                    <motion.img
                      alt={`Blog ${idx + 1}`}
                      src={blog.img}
                      style={{ height: 180, objectFit: 'cover', borderRadius: 10 }}
                      whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
                    />
                  }
                  style={{ borderRadius: theme.token.borderRadius, minHeight: 350 }}
                >
                  <Title level={4} style={{ marginBottom: 8, color: '#1c276d' }}>
                    {blog.title}
                  </Title>
                  <Paragraph type="secondary" style={{ marginBottom: 4, color: '#5f6a8d' }}>
                    <FaGlobe style={{ marginRight: 6, color: '#59cbe8' }} />
                    {blog.date}
                  </Paragraph>
                  <Paragraph style={{ color: '#5f6a8d' }}>
                    {blog.desc}
                  </Paragraph>
                  <motion.div whileHover={{ x: 6 }}>
                    <Button type="link" style={{ padding: 0, color: '#d54e91', fontWeight: 600 }}>Read More</Button>
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Testimonials Section */}
      <Card
        style={{
          maxWidth: 1200,
          margin: '0 auto 32px',
          borderRadius: theme.token.borderRadius,
          background: 'linear-gradient(120deg, #f5fbfd 60%, #e2f4fc 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
        title={
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Title level={3} style={{ margin: 0, color: '#1c276d' }}>What Our Donors Say</Title>
          </motion.div>
        }
      >
        <Carousel autoplay dotPosition="top" effect="fade">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <Row align="middle" justify="center">
                <Col xs={24} md={4} style={{ textAlign: 'center', marginBottom: 16 }}>
                  <Avatar src={t.img} size={80} style={{ boxShadow: '0 4px 16px rgba(28,39,109,0.14)' }} />
                </Col>
                <Col xs={24} md={20}>
                  <motion.div
                    whileHover={{ scale: 1.03, backgroundColor: '#f5fbfd' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: '#ffffffcc',
                      borderRadius: 12,
                      padding: 24,
                      boxShadow: '0 2px 8px rgba(28,39,109,0.08)',
                      minHeight: 120,
                    }}
                  >
                    <Paragraph style={{ fontSize: 18, color: '#1c276d', fontStyle: 'italic' }}>
                      <FaStar color="#ffd166" style={{ marginRight: 8 }} />
                      {t.text}
                    </Paragraph>
                    <Space>
                      <Text strong style={{ color: '#d54e91' }}>{t.name}</Text>
                      <Tag color="blue">{t.role}</Tag>
                    </Space>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </Carousel>
      </Card>

      {/* Volunteer Call to Action */}
      <section style={{ background: 'linear-gradient(135deg, #eaf6fa 60%, #f5fbfd 100%)', padding: '64px 0' }}>
        <Row justify="center" align="middle">
          <Col xs={24} md={16}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 0 8px rgba(89,203,232,0.13)' }}
              style={{
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 8px 32px rgba(89,203,232,0.13)',
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <Lottie animationData={celebrationAnimation} style={{ width: 80, margin: '0 auto 16px' }} />
              <Title level={2} style={{ color: '#1c276d' }}>
                <FaHandsHelping style={{ marginRight: 10, color: '#5aa949' }} />
                Join Our Next Drive!
              </Title>
              <Paragraph style={{ color: '#5f6a8d', fontSize: 18 }}>
                Become a volunteer and help us make a difference. Every hand counts in saving lives.
              </Paragraph>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block', marginTop: 16 }}
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<MdVolunteerActivism />}
                  style={{
                    borderRadius: 8,
                    background: '#d54e91',
                    borderColor: '#d54e91',
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
                  Volunteer Now
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </section>

    </div>
  </ConfigProvider>
);

export default Drives;
