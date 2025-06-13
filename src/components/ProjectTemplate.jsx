import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Typography, Row, Col } from 'antd';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../images/Mataji.webp'; // Replace with your donor/medical hero illustration
import img1 from '../images/blooddanation1.jpg';
import img3 from '../images/blooddanation2.jpg'; 
import img2 from '../images/blooddanation3.webp';  // Replace with your hero image

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,BarChart ,CartesianGrid, Legend , Bar} from 'recharts';

import Lottie from 'lottie-react';
import storyIcon from '../images/bloodanimation.json'; // Add a small relevant Lottie animation


const { Title, Paragraph } = Typography;

const graphData = [
  { name: '2018', Units: 180000, Camps: 1200, Lives: 500000 },
  { name: '2019', Units: 220000, Camps: 1300, Lives: 600000 },
  { name: '2020', Units: 210000, Camps: 1150, Lives: 580000 },
  { name: '2021', Units: 250000, Camps: 1400, Lives: 650000 },
  { name: '2022', Units: 260000, Camps: 1500, Lives: 700000 },
  { name: '2023', Units: 300000, Camps: 1520, Lives: 760000 },
];

// Stats for the foundation
const stats = [
  {
    value: 1319758,
    label: 'Blood Units Donated',
    color: '#d54e91',
    icon: '🩸',
  },
  {
    value: 38,
    label: 'Years of Service',
    color: '#5aa949',
    icon: '⏳',
  },
  {
    value: 8070,
    label: 'Camps Organized',
    color: '#1c276d',
    icon: '⛺',
  },
  {
    value: 3906450,
    label: 'Lives Potentially Saved',
    color: '#ffd166',
    icon: '❤️',
  },
];

// News/blogs mock data
const news = [
  {
    title: 'Mega Blood Donation Camp in Delhi',
    excerpt: 'Over 5,000 units collected in a single day, setting a new record for the foundation.',
    image: img1,
    date: 'June 2025',
  },
  {
    title: 'Rural Outreach: Saving Lives in Villages',
    excerpt: 'Our mobile camps reached remote areas, ensuring no one is left behind.',
image: img3,
    date: 'May 2025',
  },
  {
    title: 'Youth Volunteers Lead the Way',
    excerpt: 'The next generation steps up, inspiring hope and compassion across the nation.',
    image: img2,
    date: 'April 2025',
  },
];

const ProjectTemplate = () => (
  <div className="project-page" style={{ fontFamily: "'Poppins', sans-serif", background: '#f8fafc' }}>
    {/* HERO SECTION */}
    <section
      style={{
        position: 'relative',
        width: '100%',
        borderRadius: 32,
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        margin: '2rem 0',
        padding: 0,
      }}
    >
      {/* Background Image */}
      <div
        style={{
          background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
          minHeight: 370,
          display: 'flex',
          borderRadius: '32px 32px 0 0',
          position: 'relative',
          alignItems: 'flex-end',
        }}
      >
        {/* Left: Tagline & Headline */}
        <div
          style={{
            flex: 1,
            padding: '3.5rem 0 2.5rem 3.5rem',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{
              color: '#ffd166',
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 10,
              letterSpacing: 1,
              textShadow: '0 4px 16px rgba(28,39,109,0.18)',
            }}>
              The Gift of Life: A Million Drops, Countless Lives Saved
            </div>
            <h1
              style={{
                color: '#fff',
                fontWeight: 900,
                fontSize: '2.6rem',
                lineHeight: 1.1,
                marginBottom: 0,
                textShadow: '0 4px 16px rgba(28,39,109,0.18)',
              }}
            >
              Nirankari Charitable Foundation<br />
              Saving Lives Since 1986
            </h1>
          </motion.div>
          {/* Floating Data Overlays */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', gap: 18, marginTop: 28, flexWrap: 'wrap' }}
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: 14,
                  padding: '0.7rem 1.2rem',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 16,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  minWidth: 170,
                }}
              >
                <span role="img" aria-label={stat.label} style={{ fontSize: 22, color: stat.color }}>{stat.icon}</span>
                <CountUp end={stat.value} duration={2.5} separator="," />+
                <span style={{ fontWeight: 400, marginLeft: 5 }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            width: 350,
            minWidth: 220,
            marginRight: '2.5rem',
            zIndex: 2,
            alignSelf: 'flex-end',
            marginBottom: -24,
          }}
        >
          <img
            src={img} // <-- Place your donor/medical hero illustration here
            alt="Blood Donor Hero"
            style={{
              width: '100%',
              borderRadius: 24,
              boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
              objectFit: 'cover',
              background: 'rgba(255,255,255,0.05)',
            }}
          />
        </motion.div>
        {/* Decorative Curve */}
        <svg
          viewBox="0 0 1440 90"
          style={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '100%',
            height: 60,
            zIndex: 3,
            marginTop: 24,
          }}
        >
          <path
            fill="#fff"
            d="M0,0 C480,90 960,0 1440,90 L1440,90 L0,90 Z"
          />
        </svg>
        {/* Overlay for darken effect */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, #1c276d 60%, #d54e91 100%)',
            opacity: 0.45,
            zIndex: 1,
            borderRadius: '32px 32px 0 0',
          }}
        />
      </div>
      {/* Quote and CTA */}
      <div
        style={{
          padding: '2.5rem 3.5rem 2.5rem 3.5rem',
          background: '#fff',
          borderRadius: '0 0 32px 32px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontSize: 17,
            color: '#222',
            marginBottom: 30,
            lineHeight: 1.6,
            fontWeight: 500,
          }}
        >
          "The journey began in 1986, with a vision to serve humanity selflessly. Today, Nirankari Charitable Foundation stands as a beacon of hope, compassion, and unity—saving lives, one drop at a time."
        </div>
        <div style={{ display: 'flex', gap: 18 }}>
          <Button
            type="primary"
            size="large"
            style={{
              background: '#1c276d',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 17,
              padding: '0.8rem 2.2rem',
              boxShadow: '0 2px 8px rgba(28,39,109,0.10)',
            }}
          >
            Get started
          </Button>
          <Button
            size="large"
            style={{
              background: '#ffd166',
              color: '#1c276d',
              border: 'none',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 17,
              padding: '0.8rem 2.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 2px 8px rgba(28,39,109,0.10)',
            }}
          >
            Watch the video
            <span
              style={{
                display: 'inline-block',
                width: 18,
                height: 18,
                background: '#fff',
                borderRadius: '50%',
                marginLeft: 6,
              }}
            />
          </Button>
        </div>
      </div>
    </section>


    <section
      style={{
        background: '#fff',
        borderRadius: 24,
        maxWidth: 1100,
        margin: '2rem auto 2rem auto',
        boxShadow: '0 2px 16px rgba(28,39,109,0.04)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}
    >
      <Title level={2} style={{ color: '#1c276d', marginBottom: 16 }}>
        Impact Over the Years
      </Title>
      <Paragraph style={{ fontSize: 18, color: '#5f6a8d', maxWidth: 800, margin: '0 auto 2rem auto' }}>
        Every year, our foundation grows in reach and impact. Explore the journey of our blood donation drives, camps, and the lives we’ve touched—visualized for you.
      </Paragraph>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={graphData} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#1c276d", fontWeight: 600 }} />
          <YAxis tick={{ fill: "#1c276d", fontWeight: 600 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Units" fill="#d54e91" name="Blood Units" />
          <Bar dataKey="Camps" fill="#5aa949" name="Camps" />
          <Bar dataKey="Lives" fill="#ffd166" name="Lives Saved" />
        </BarChart>
      </ResponsiveContainer>
    </section>

    {/* SHORT HISTORY / INTRO SECTION */}
    <section
  style={{
    background: '#fff',
    borderRadius: 24,
    maxWidth: 1100,
    margin: '3rem auto 2rem auto',
    boxShadow: '0 4px 20px rgba(28,39,109,0.1)',
    padding: '3rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Floating Icon Animation */}
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    style={{ width: 100, margin: '0 auto 1.5rem' }}
  >
    <Lottie animationData={storyIcon} loop={true} />
  </motion.div>

  {/* Heading Animation */}
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Title level={2} style={{ color: '#1c276d', marginBottom: 16 }}>
      Our Story
    </Title>
  </motion.div>

  {/* Paragraph Animation */}
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    <Paragraph style={{ fontSize: 18, color: '#5f6a8d', maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>
      Founded in 1986, the Nirankari Charitable Foundation has been at the forefront of humanitarian service, touching millions of lives through blood donation, medical camps, disaster relief, and educational initiatives. Our journey is one of compassion, unity, and unwavering commitment to the welfare of all.
    </Paragraph>
  </motion.div>
</section>

    {/* GALLERY / NEWS-BLOGS SECTION */}
    <section
      style={{
        background: '#f5fbfd',
        padding: '4rem 1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '2.5rem' }}
      >
        <Title level={2} style={{ color: '#1c276d' }}>
          Latest News & Stories
        </Title>
        <Paragraph style={{ color: '#5f6a8d', fontSize: 17 }}>
          Explore our recent events, inspiring journeys, and impactful moments from across the nation.
        </Paragraph>
      </motion.div>
      <Row gutter={[32, 32]} justify="center">
        {news.map((item, idx) => (
          <Col xs={24} sm={12} md={8} key={item.title}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                overflow: 'hidden',
                borderRadius: 18,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                background: '#fff',
                margin: '0 auto',
                maxWidth: 400,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.5rem 1.2rem 1.2rem 1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Title level={4} style={{ color: '#1c276d', marginBottom: 8 }}>
                  {item.title}
                </Title>
                <Paragraph style={{ color: '#5f6a8d', fontSize: 15, marginBottom: 14 }}>
                  {item.excerpt}
                </Paragraph>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d54e91', fontWeight: 600 }}>{item.date}</span>
                  <Button
                    type="link"
                    style={{
                      color: '#1c276d',
                      fontWeight: 600,
                      padding: 0,
                      fontSize: 15,
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>









    {/* CALL TO ACTION */}
    <section
      style={{
        background: 'linear-gradient(to right, #d54e91, #a867aa)',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 24,
        margin: '3rem auto',
        maxWidth: 1100,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title level={2} style={{ fontFamily: "'Poppins', sans-serif", color: '#fff' }}>
          Be the Change. Donate Blood. Save Lives.
        </Title>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            size="large"
            style={{
              backgroundColor: '#fff',
              color: '#d54e91',
              fontWeight: 'bold',
              border: 'none',
              marginTop: 24,
              borderRadius: 8,
              fontSize: 18,
              padding: '0.8rem 2.5rem',
            }}
          >
            Join the Mission
          </Button>
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default ProjectTemplate;
