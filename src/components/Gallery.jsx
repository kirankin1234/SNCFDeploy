import React, { useState } from "react";
import { Typography, Row, Col, Card, Pagination, Tag, Button, Tabs } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Lottie from "lottie-react";
import { FaCamera, FaVideo, FaRegCalendarAlt, FaRegCommentDots, FaTimes, FaShareAlt } from "react-icons/fa";
import galleryConfetti from "../images/confetti.json";
import galleryCamera from "../images/camera.json";
import galleryVideo from "../images/video.json";
import video from "../images/blood_donation_reel.mp4";
import gallery1 from "../images/gallery1.webp";
import gallery2 from "../images/gallery2.jpg";
import Amrit from "../images/Amrit.mp4";
import img from "../images/blooddanation2.jpg";

const { Title, Paragraph } = Typography;
const pageSize = 6;
const CARD_MEDIA_HEIGHT = 320;

// 1. Your data must have a category field!
const galleryData = [
  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },

  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },


  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "latest",
    src: gallery1,
    title: "River Yamuna Cleanup",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration.",
    date: "2025-06-01",
  },
  {
    type: "video",
    category: "latest",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    category: "past",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "video",
    category: "past",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "post",
    category: "project",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    category: "project",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  // ...add more items with correct category
];

// 2. Define the filter function
function filterByCategory(data, category) {
  return data.filter(item => item.category === category);
}

const typeIcon = {
  photo: <FaCamera color="#59cbe8" size={22} />,
  video: <FaVideo color="#d54e91" size={22} />,
  post: <FaRegCommentDots color="#ffd166" size={22} />,
};

const GalleryModal = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(28,39,109,0.90)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 180 }}
          style={{
            background: "#fff",
            borderRadius: 24,
            boxShadow: "0 8px 48px #1c276d88",
            padding: 36,
            maxWidth: 600,
            width: "90vw",
            position: "relative",
            zIndex: 10000,
            textAlign: "center",
          }}
          onClick={e => e.stopPropagation()}
        >
          <Button
            shape="circle"
            icon={<FaTimes />}
            onClick={onClose}
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              zIndex: 10,
              background: "#f1f5f9",
              border: "none",
              boxShadow: "0 2px 8px #1c276d22",
            }}
          />
          {item.type === "photo" && (
            <img
              src={item.src}
              alt={item.title}
              style={{
                width: "100%",
                borderRadius: 18,
                marginBottom: 20,
                objectFit: "cover",
                maxHeight: 320,
                boxShadow: "0 2px 12px #dbeafe55",
              }}
            />
          )}
          {item.type === "video" && (
            <video
              src={item.src}
              controls
              autoPlay
              style={{
                width: "100%",
                borderRadius: 18,
                marginBottom: 20,
                background: "#eaf3fc",
                maxHeight: 320,
                objectFit: "cover",
                boxShadow: "0 2px 12px #dbeafe55",
              }}
            />
          )}
          {item.type === "post" && (
            <Lottie animationData={galleryCamera} style={{ height: 100, marginBottom: 20 }} loop={false} />
          )}
          <Title level={3} style={{ color: "#1a237e", marginBottom: 8 }}>
            {typeIcon[item.type]} {item.title}
          </Title>
          <Tag color="blue" style={{ marginBottom: 12 }}>
            <FaRegCalendarAlt style={{ marginRight: 4 }} />
            {item.date}
          </Tag>
          <Paragraph style={{ color: "#374151", fontSize: 17, textAlign: "justify" }}>
            {item.desc}
          </Paragraph>
          <Button
            icon={<FaShareAlt />}
            style={{
              marginTop: 12,
              borderRadius: 8,
              background: "#59cbe8",
              color: "#fff",
              fontWeight: 600,
              border: "none",
              boxShadow: "0 2px 8px #59cbe822",
            }}
          >
            Share
          </Button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const GalleryTabGrid = ({ data, page, setPage, onCardClick }) => {
  const paginated = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
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
        {paginated.map((item, idx) => (
          <Col xs={24} sm={12} md={8} key={idx} style={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px #d54e9144",
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              style={{ cursor: "pointer", width: "100%", display: "flex", flex: 1 }}
              onClick={() => onCardClick(item)}
            >







              <Card
                hoverable
                style={{
                  borderRadius: "22px",
                  padding: 0,
                  textAlign: "center",
                  boxShadow: "0 8px 32px rgba(0, 174, 239, 0.2), 0 2px 8px rgba(28, 39, 109, 0.13)",
                  background: "linear-gradient(135deg, #e0f2fe 60%, #f1f5f9 100%)",
                  minHeight: CARD_MEDIA_HEIGHT + 100,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  border: "2.5px solid #00AEEF",
                  transition: "box-shadow 0.3s, border 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                bodyStyle={{ padding: 0, display: "flex", flexDirection: "column", flex: 1 }}
              >

                {/* Animated overlay icon */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    position: "absolute",
                    top: 18,
                    left: 18,
                    zIndex: 2,
                    background: "#fff",
                    borderRadius: "50%",
                    boxShadow: "0 2px 8px #d54e9144",
                    padding: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {typeIcon[item.type]}
                </motion.div>
                {/* Media */}
                <div style={{ width: "100%", margin: 0, padding: 0, flex: "0 0 auto" }}>
                  {item.type === "photo" && (
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: `${CARD_MEDIA_HEIGHT}px`,
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22,
                        objectFit: "cover",
                        background: "#e0e7ef",
                        boxShadow: "0 2px 12px #dbeafe55",
                        display: "block",
                        borderBottom: "1.5px solid #ffd166",
                        transition: "transform 0.3s",
                      }}
                    />
                  )}
                  {item.type === "video" && (
                    <div
                      style={{
                        width: "100%",
                        height: `${CARD_MEDIA_HEIGHT}px`,
                        background: "#e0e7ef",
                        position: "relative",
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22,
                        overflow: "hidden",
                        borderBottom: "1.5px solid #ffd166",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <video
                        src={item.src}
                        style={{
                          width: "auto",
                          height: "100%",
                          maxWidth: "100%",
                          borderRadius: 0,
                          objectFit: "cover",
                          background: "#e0e7ef",
                          display: "block",
                        }}
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    </div>
                  )}
                  {item.type === "post" && (
                    <Lottie animationData={galleryCamera} style={{ height: 110, margin: "12px auto 0 auto" }} loop={false} />
                  )}
                </div>
                {/* Card Content */}
                <div
                  style={{
                    padding: "14px 18px 12px 18px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Title level={5} style={{ color: "#1a237e", marginBottom: 6, fontWeight: 700 }}>
                    {item.title}
                  </Title>
                  <div style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Tag color="blue" style={{ fontSize: 13 }}>
                      <FaRegCalendarAlt style={{ marginRight: 4 }} />
                      {item.date}
                    </Tag>
                  </div>
                  <Paragraph
                    ellipsis={{ rows: 2 }}
                    style={{
                      fontSize: 15,
                      color: "#374151",
                      textAlign: "justify",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </Paragraph>
                </div>
              </Card>










            </motion.div>
          </Col>
        ))}
      </Row>
      {/* Pagination */}
      <div style={{ textAlign: "center", margin: "24px 0 48px 0" }}>
        <Pagination
          current={page}
          pageSize={pageSize}
          total={data.length}
          onChange={setPage}
          showSizeChanger={false}
          style={{
            display: "inline-block",
            boxShadow: "0 2px 12px #dbeafe44",
            borderRadius: 12,
            padding: "8px 16px",
            background: "#fff",
          }}
        />
      </div>
    </>
  );
};

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [page, setPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  // 3. Use filterByCategory for each tab!
  const tabData = {
    latest: filterByCategory(galleryData, "latest"),
    past: filterByCategory(galleryData, "past"),
    project: filterByCategory(galleryData, "project"),
  };

  const handleTabChange = key => {
    setActiveTab(key);
    setPage(1);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f0f4f8, #dbeafe)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          padding: "64px 24px 32px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <Parallax speed={-10}>
          {/* <Lottie
            animationData={galleryConfetti}
            style={{
              position: "absolute",
              top: -40,
              left: 0,
              width: "100%",
              height: 180,
              pointerEvents: "none",
              zIndex: 0,
            }}
            loop
          /> */}
        </Parallax>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Title
            level={1}
            style={{
              color: "#1c276d",
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 12,
              background: "linear-gradient(90deg, #22B573 0%, #00AEEF 50%, #F48FB1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Impact in Actions
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
            Explore our journey in photos, videos, and stories. Every moment is a memory, every memory is a milestone.
          </Paragraph>
        </motion.div>
      </motion.div>
      {/* Tabs */}
      <Tabs
        centered
        activeKey={activeTab}
        onChange={handleTabChange}
        items={[
          {
            key: "latest",
            label: (
              <span>
                <FaRegCommentDots style={{ marginRight: 8 }} />
                Latest Activities
              </span>
            ),
            children: (
              <GalleryTabGrid
                data={tabData.latest}
                page={page}
                setPage={setPage}
                onCardClick={setModalItem}
              />
            ),
          },
          {
            key: "past",
            label: (
              <span>
                <FaRegCalendarAlt style={{ marginRight: 8 }} />
                Past Events
              </span>
            ),
            children: (
              <GalleryTabGrid
                data={tabData.past}
                page={page}
                setPage={setPage}
                onCardClick={setModalItem}
              />
            ),
          },
          {
            key: "project",
            label: (
              <span>
                <FaCamera style={{ marginRight: 8 }} />
                Projects
              </span>
            ),
            children: (
              <GalleryTabGrid
                data={tabData.project}
                page={page}
                setPage={setPage}
                onCardClick={setModalItem}
              />
            ),
          },
        ]}
        style={{
          maxWidth: 1200,
          margin: "0 auto 24px auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px #dbeafe44",
        }}
      />
      {/* Modal */}
      <GalleryModal item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );
};

const Gallery = () => (
  <ParallaxProvider>
    <GalleryTabs />
  </ParallaxProvider>
);

export default Gallery;
