import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Typography, Row, Col, Table } from 'antd';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../images/Mataji.webp'; // Replace with your donor/medical hero illustration
import img1 from '../images/blooddanation1.jpg';
import img3 from '../images/blooddanation2.jpg';
import img2 from '../images/blooddanation3.webp';  // Replace with your hero image
import image from '../images/mataji2.jpg'; // Replace with your hero image
import drop from '../images/drop.png'; // Replace with your blood drop image

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, CartesianGrid, Legend, Bar } from 'recharts';

import Lottie from 'lottie-react';
import storyIcon from '../images/bloodanimation.json'; // Add a small relevant Lottie animation


const { Title, Paragraph } = Typography;



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


const dataSource = [
  { key: 1, sno: 38, year: 2023, camps: 479, units: 72391 },
  { key: 2, sno: 37, year: 2022, camps: 594, units: 88607 },
  { key: 3, sno: 36, year: 2021, camps: 236, units: 22185 },
  { key: 4, sno: 35, year: 2020, camps: 200, units: 18084 },
  { key: 5, sno: 34, year: 2019, camps: 464, units: 80358 },
  { key: 6, sno: 33, year: 2018, camps: 531, units: 85631 },
  { key: 7, sno: 32, year: 2017, camps: 514, units: 83341 },
  { key: 8, sno: 31, year: 2016, camps: 479, units: 80560 },
  { key: 9, sno: 30, year: 2015, camps: 494, units: 79006 },
  { key: 10, sno: 29, year: 2014, camps: 446, units: 69810 },
  { key: 11, sno: 28, year: 2013, camps: 446, units: 77128 },
  { key: 12, sno: 27, year: 2012, camps: 429, units: 72189 },
  { key: 13, sno: 26, year: 2011, camps: 423, units: 66022 },
  { key: 14, sno: 25, year: 2010, camps: 371, units: 55010 },
  { key: 15, sno: 24, year: 2009, camps: 306, units: 49730 },

];


const columns = [
  {
    title: 'S.NO.',
    dataIndex: 'sno',
    key: 'sno',
  },
  {
    title: 'YEAR',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'NO. OF CAMPS',
    dataIndex: 'camps',
    key: 'camps',
  },
  {
    title: 'UNITS DONATED',
    dataIndex: 'units',
    key: 'units',
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
          background: `url(${image}) no-repeat center center`,
          minHeight: 400, // Increased to give more breathing room
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
            <div
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: 22,
                marginBottom: 10,
                letterSpacing: 1,
                textShadow: '0 4px 16px rgba(28,39,109,0.18)',
              }}
            >
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
            style={{ display: 'flex', gap: 18, marginTop: 50, flexWrap: 'wrap' }} // Increased marginTop for better spacing
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  borderRadius: 14,
                  padding: '0.7rem 1.2rem',
                  color: '#white',
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
            src={img}
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
          viewBox="250 0 1440 90"
          style={{
            marginTop: 10,
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '100%',
            height: 70, // Slightly increased for a smoother curve
            zIndex: 3,
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
            background: 'linear-gradient(120deg, #0ABAB5 60%, #d54e91 100%)',
            opacity: 0.45,
            zIndex: 1,
            borderRadius: '32px 32px 0 0',
          }}
        />
      </div>

      {/* Quote and CTA */}
      <div
        style={{
          padding: '2.5rem 3.5rem',
          background: '#f5fbfd',
          borderRadius: '0 0 32px 32px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontSize: 17,
            color: '#5f6a8d',
            marginBottom: 30,
            lineHeight: 1.6,
            fontWeight: 500,
            maxWidth: 900,
          }}
        >
          "The journey began in 1986, with a vision to serve humanity selflessly. Today, Nirankari Charitable Foundation stands as a beacon of hope, compassion, and unity—saving lives, one drop at a time."
        </div>

        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <Button
            type="primary"
            size="large"
            style={{
              background: '#0ABAB5',
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
              background: '#0ABAB5',
              color: '#fff',
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
        margin: '2rem auto',
        boxShadow: '0 2px 16px rgba(28,39,109,0.06)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}
    >
      <Title level={2} style={{ color: '#0ABAB5', marginBottom: 16 }}>
        Impact Over the Years
      </Title>
      <Paragraph
        style={{
          fontSize: 18,
          color: '#5f6a8d',
          maxWidth: 800,
          margin: '0 auto 2rem auto',
          textAlign: 'justify',
        }}
      >
        Every year, our foundation grows in reach and impact. Explore the journey of our blood donation drives, camps, and the lives we’ve touched—visualized for you.
      </Paragraph>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={[
            { name: '2018', Units: 180000, Camps: 1200, Lives: 500000 },
            { name: '2019', Units: 240000, Camps: 1300, Lives: 600000 },
            { name: '2020', Units: 250000, Camps: 1150, Lives: 580000 },
            { name: '2021', Units: 290000, Camps: 1400, Lives: 650000 },
            { name: '2022', Units: 320000, Camps: 1500, Lives: 700000 },
            { name: '2023', Units: 350000, Camps: 1520, Lives: 760000 },
          ]}
          margin={{ top: 10, right: 40, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eaf0f6" />
          <XAxis dataKey="name" tick={{ fill: '#154360', fontWeight: 600 }} />
          <YAxis tick={{ fill: '#154360', fontWeight: 600 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#f5fbfd', borderRadius: 8, border: '1px solid #d6eaf8' }}
            labelStyle={{ color: '#154360', fontWeight: 600 }}
            itemStyle={{ color: '#154360' }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ color: '#5f6a8d', fontWeight: 500 }}
          />

          {/* Blood Units with Blood Droplet Markers */}
          <Line
            type="monotone"
            dataKey="Units"
            name="Blood Units"
            stroke="#0ABAB5"
            strokeWidth={3}
            dot={({ cx, cy }) => (
              <image
                href={drop} // Correct: use 'href' instead of 'src' for SVG/LineChart markers
                x={cx - 10}
                y={cy - 10}
                height={20}
                width={20}
              />
            )}
            activeDot={{ r: 8 }}
          />

          {/* Camps */}
          <Line
            type="monotone"
            dataKey="Camps"
            name="Camps"
            stroke="#56DFCF"
            strokeWidth={3}
            dot={{ r: 6, fill: '#56DFCF' }}
            activeDot={{ r: 8 }}
          />

          {/* Lives Saved */}
          <Line
            type="monotone"
            dataKey="Lives"
            name="Lives Saved"
            stroke="#F1948A"
            strokeWidth={3}
            dot={{ r: 6, fill: '#F1948A' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>


    <section
      style={{
        background: '#f5fbfd',
        borderRadius: 24,
        maxWidth: 1100,
        margin: '3rem auto',
        boxShadow: '0 4px 20px rgba(28,39,109,0.08)',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title level={2} style={{ color: '#0ABAB5', marginBottom: 24 }}>
          Blood Donation Records
        </Title>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
          style={{ marginTop: 24 }}
          rowStyle={(record, index) => ({
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#eaf4fb',
            cursor: 'pointer',
          })}
          onRow={() => ({
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = '#f0f7fa';
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = '';
            },
          })}
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{
                    backgroundColor: '#0ABAB5',
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '12px',
                    ...props.style,
                  }}
                />
              ),
            },
            body: {
              cell: (props) => (
                <td
                  {...props}
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '15px',
                    color: '#374151',
                    ...props.style,
                  }}
                />
              ),
            },
          }}
        />
      </motion.div>
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
        <Title level={2} style={{ color: '#0ABAB5', marginBottom: 16 }}>
          Our Story
        </Title>
      </motion.div>

      {/* Paragraph Animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Paragraph
          style={{
            fontSize: 18,
            color: '#5f6a8d',
            maxWidth: 800,
            margin: '0 auto',
            lineHeight: 1.8,
            textAlign: 'center', // For better readability
          }}
        >
          Founded in 1986, the Nirankari Charitable Foundation has been at the forefront of humanitarian service, touching millions of lives through blood donation, medical camps, disaster relief, and educational initiatives. Our journey is one of compassion, unity, and unwavering commitment to the welfare of all.
        </Paragraph>
      </motion.div>
    </section>


    {/* GALLERY / NEWS-BLOGS SECTION */}
    <section
      style={{
        background: '#f5fbfd',
        padding: '4rem 1.2rem', // Slightly reduced padding
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '2.2rem' }}
        viewport={{ once: true }}
      >
        <Title level={2} style={{ color: '#0ABAB5' }}>
          Latest News & Stories
        </Title>
        <Paragraph style={{ color: '#5f6a8d', fontSize: 17, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          Explore our recent events, inspiring journeys, and impactful moments from across the nation.
        </Paragraph>
      </motion.div>

      <Row gutter={[24, 28]} justify="center"> {/* Reduced gap */}
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
                maxWidth: 380, // Reduced maxWidth for more compact layout
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '2px solid #d6eaf8',
              }}
              viewport={{ once: true }}
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
              <div
                style={{
                  padding: '1.2rem 1.1rem 1.1rem 1.1rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Title level={4} style={{ color: '#1c276d', marginBottom: 8 }}>
                  {item.title}
                </Title>
                <Paragraph
                  style={{
                    color: '#5f6a8d',
                    fontSize: 15,
                    marginBottom: 12,
                    textAlign: 'justify', // Proper justify alignment
                  }}
                >
                  {item.excerpt}
                </Paragraph>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      color: '#0ABAB5', // Consistent blue color
                      fontWeight: 600,
                    }}
                  >
                    {item.date}
                  </span>

                  <Button
                    type="link"
                    style={{
                      color: '#0ABAB5', // Unified Read More color
                      fontWeight: 600,
                      padding: 0,
                      fontSize: 15,
                      transition: 'color 0.3s ease',
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
        background: 'linear-gradient(120deg, #0ABAB5, #1c276d)', // Your core gradient theme
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
              backgroundColor: '#fff', // Primary accent color from your palette
              color: '#1c276d', // Theme deep blue for contrast
              fontWeight: 'bold',
              border: 'none',
              marginTop: 24,
              borderRadius: 8,
              fontSize: 18,
              padding: '0.8rem 2.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // subtle shadow with natural tone
              transition: 'all 0.3s ease',
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
