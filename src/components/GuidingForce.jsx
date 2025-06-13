import React from 'react';
import { Row, Col, Button, Typography, Divider } from 'antd';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import backgroundAnimation from '../images/corner.json';
import playButtonAnimation from '../images/button.json';
import guidingForceImage from '../images/Mataji.webp';

const { Title, Paragraph } = Typography;

const GuidingForce = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1 },
    }),
  };

  return (
    <section
      style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #f5fafd, #eaf3fc)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          opacity: 0.3,
          zIndex: 0,
        }}
      >
        <Lottie animationData={backgroundAnimation} loop />
      </motion.div>

      <Row
        gutter={[32, 32]}
        align="middle"
        justify="center"
        style={{ zIndex: 1, position: 'relative', maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Image Section */}
        <Col xs={24} md={10}>
          <motion.img
            src={guidingForceImage}
            alt="Her Holiness Satguru Mata Sudiksha Ji Maharaj"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              width: '70%', // Reduced for perfect balance
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Col>

        {/* Text Section */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Title level={4} style={{ color: '#1c276d', marginBottom: 10 }}>
              Our Guiding Force
            </Title>
            <Title level={2} style={{ color: '#1c276d', fontWeight: 'bold' }}>
              Her Holiness Satguru Mata Sudiksha Ji Maharaj
            </Title>
            <Paragraph
              style={{
                fontSize: 18,
                color: '#5f6a8d',
                marginTop: 16,
                lineHeight: 1.8,
                textAlign: 'justify',
              }}
            >
              Her Holiness Satguru Mata Sudiksha Ji Maharaj is the revered head of the Sant Nirankari Mission, a global mission that promotes peace, unity, and social welfare. Her teachings inspire millions with the message of universal love, inner transformation, selfless service, and the importance of being socially responsible citizens.
            </Paragraph>

            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              style={{ display: 'flex', alignItems: 'center', marginTop: '2rem', cursor: 'pointer' }}
            >
              <Lottie animationData={playButtonAnimation} style={{ width: 60, marginRight: 12 }} />
              <Button type="primary" size="large" style={{ backgroundColor: '#1c276d', borderColor: '#1c276d' }}>
                Watch Video
              </Button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>

      {/* Detailed Mission Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          marginTop: '4rem',
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Title level={3} style={{ color: '#1c276d', textAlign: 'center', marginBottom: '1rem' }}>
          Serving Humanity: The Sant Nirankari Charitable Foundation Vision
        </Title>
        <Divider />

        {/* Animated Paragraphs */}
        {[
          "Sant Nirankari Charitable Foundation volunteers embody the mission’s unity vision across the globe. From natural disasters like earthquakes and floods to wildfires, they provide relief and rebuild communities. During the COVID-19 crisis, the mission transformed its centres into quarantine and vaccination sites, offering aid and becoming a lifeline for many. Her Holiness’ focus towards affordable quality healthcare extends to the upcoming Sant Nirankari Health City in North Delhi. This ambitious project promises to be a world-class, multi-specialty healthcare facility, offering advanced treatments and wellness services to everyone, all guided by principles of compassion and care.",
          "A key tenet of Her Holiness’ vision for a better world is safeguarding our environment. Seeking inspiration from the same, the volunteers actively contribute to various initiatives. Among these, “Oneness Vann” is an endeavour where volunteers are transforming small areas into thriving ecosystems with tree clusters and micro forests. This led to the plantation of 1000 mini forests PAN India.",
          "Project Amrit (water cleanliness drive), launched in 2023 in collaboration with the Government of India, has become a milestone in cleaning the nation’s water sources. Over 1100+ rivers, ponds, ghats, and beaches across 27 states have been revitalised. Regular cleanups ensure these water sources stay healthy, while educational programs raise awareness about water conservation. Project Amrit reminds us all of the precious gift that water is to our planet.",
          "The Nirankari Youth Symposium is a testament to Her Holiness’ dedication to empowering young people and shaping a better tomorrow. NIMA or the Nirankari Institute of Music and Arts provides a platform for thousands of youngsters to hone their skills in music and the performing arts.",
          "Her Holiness Satguru Mata Sudiksha Ji Maharaj stands as a beacon of spiritual guidance and social responsibility, inspiring individuals and communities to embrace a life of compassion, service, and environmental stewardship.",
        ].map((text, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
          >
            <Paragraph
              style={{
                fontSize: 18,
                color: '#4a4a4a',
                textAlign: 'justify',
                lineHeight: 1.8,
                marginTop: index === 0 ? '0' : '1.5rem',
              }}
            >
              {text}
            </Paragraph>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GuidingForce;
