import React, { useState } from "react";
import { Typography, Row, Col, Card, Pagination, Tag, Button } from "antd";
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

const galleryData = [
  {
    type: "photo",
    src: gallery1,
    title: "",
    desc: "This remarkable initiative showcases the tremendous impact of youth and community collaboration , as they come together to redefine their surroundings and clean the holy River Yamuna.",
    date: "2025-06-01",
  },
  {
    type: "video",
    src: video,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
    src: gallery2,
    title: "Tree Plantation",
    desc: "Our youth volunteers planting trees for a greener tomorrow.",
    date: "2025-05-15",
  },
  {
    type: "post",
    src: img,
    title: "Thank You Donors!",
    desc: "We extend heartfelt gratitude to all our blood donors. Your contribution saves lives.",
    date: "2025-05-10",
  },
  {
    type: "video",
    src: Amrit,
    title: "Awareness Drive",
    desc: "Highlights from our awareness drive in the city center.",
    date: "2025-05-28",
  },
  {
    type: "photo",
     src: img,
    title: "Blood Donation Camp",
    desc: "Volunteers at our recent blood donation camp, spreading smiles and saving lives.",
    date: "2025-06-01",
  },
  {
    type: "photo",
    src: img,
    title: "Blood Donation Camp",
    desc: "Volunteers at our recent blood donation camp, spreading smiles and saving lives.",
    date: "2025-06-01",
  },
  
  // Add more items as needed for pagination
];

const pageSize = 6;

const typeIcon = {
  photo: <FaCamera color="#59cbe8" size={22} />,
  video: <FaVideo color="#d54e91" size={22} />,
  post: <FaRegCommentDots color="#ffd166" size={22} />,
};

const typeLottie = {
  photo: galleryCamera,
  video: galleryVideo,
};

const GalleryModal = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        className="gallery-modal-backdrop"
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

const CARD_MEDIA_HEIGHT = 320; // Increased for better vertical video display

const GalleryContent = () => {
  const [page, setPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  // Pagination logic
  const paginated = galleryData.slice((page - 1) * pageSize, page * pageSize);

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
          <Lottie
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
          />
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
              background: "linear-gradient(90deg, #ffd166 40%, #d54e91 60%)",
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
      {/* Gallery Grid */}
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
              onClick={() => setModalItem(item)}
            >
              <Card
                hoverable
                style={{
                  borderRadius: "22px",
                  padding: 0,
                  textAlign: "center",
                  boxShadow: "0 8px 32px #dbeafe99, 0 2px 8px #1c276d22, 0 1.5px 12px #fff8",
                  background: "linear-gradient(135deg, #e0f2fe 60%, #f1f5f9 100%)",
                  minHeight: CARD_MEDIA_HEIGHT + 100,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  border: "2.5px solid #ffd166",
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
          total={galleryData.length}
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
      {/* Modal */}
      <GalleryModal item={modalItem} onClose={() => setModalItem(null)} />
    </div>
  );
};

const Gallery = () => (
  <ParallaxProvider>
    <GalleryContent />
  </ParallaxProvider>
);

export default Gallery;
