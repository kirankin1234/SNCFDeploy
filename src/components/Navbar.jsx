import React from "react";
import {
  Menu,
  Layout,
  Badge,
  Space,
  Typography,
  Image
} from 'antd';
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  ProjectOutlined,
  StarOutlined,
  PictureOutlined,
  TeamOutlined,
  BulbOutlined,
  SolutionOutlined,
  InfoCircleOutlined,
  TrophyOutlined,
  ContactsOutlined,
  UsergroupAddOutlined,
  PhoneOutlined,
  FlagOutlined
} from '@ant-design/icons';
import logoImg from "../assets/newlogo.jpg";
// import logoImg from "../assets/newlogo.jpg";


const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const getSelectedKeys = () => {
    const path = location.pathname;
    if (path === "/") return ["home"];
    if (path.startsWith("/drives")) return ["projects"];
    if (path.startsWith("/about") || path.startsWith("/mission") || path.startsWith("/honors") || path.startsWith("/partners") || path.startsWith("/contact")) {
      return ["who-we-are"];
    }
    return [path];
  };

  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '0 24px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px'
      }}>
        <Image
          src={logoImg}
          alt="Sant Nirankari Charitable Foundation Logo"
          preview={false}
          width={250} // Increased from 120 to 160 for better clarity
        />
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={getSelectedKeys()}
        style={{
          flex: 1,
          minWidth: 0,
          borderBottom: 'none',
          justifyContent: 'flex-end'
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined style={{ marginRight: -4 }} />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.SubMenu key="projects" icon={<ProjectOutlined style={{ marginRight: -4 }} />} title="Projects">
          <Menu.Item key="health-city">
            <a href="/drives">Sant Nirankari Health City</a>
          </Menu.Item>
          <Menu.Item key="watershed-program">
            <a href="/drives">Watershed Program</a>
          </Menu.Item>
          <Menu.Item key="project-amrit">
            <a href="/drives">Project Amrit</a>
          </Menu.Item>
          <Menu.Item key="oneness-vann">
            <a href="/drives">Oneness Vann</a>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="values" icon={<StarOutlined style={{ marginRight: -4 }} />} title="Core Values">
          <Menu.SubMenu key="heal" title="Heal">
            <Menu.Item key="blood-donation">
              <a href="/projects">Blood Donation Drive</a>
            </Menu.Item>
            <Menu.Item key="eye-care">
              <a href="/projects">Eye Care Activities</a>
            </Menu.Item>
            <Menu.Item key="health-checkup">
              <a href="/projects">Health Checkup Camps</a>
            </Menu.Item>
            <Menu.Item key="health-awareness">
              <a href="/projects">Health Awareness Drives</a>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="enrich" title="Enrich">
            <Menu.Item key="education">
              <a href="/projects">Education</a>
            </Menu.Item>
            <Menu.Item key="skill-development">
              <a href="/projects">Skill Development</a>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="empower" title="Empower">
            <Menu.Item key="preserve-nature">
              <a href="/projects">Preserving Nature</a>
            </Menu.Item>
            <Menu.Item key="adopted-villages">
              <a href="/projects">Adopted Villages</a>
            </Menu.Item>
            <Menu.Item key="disaster-relief">
              <a href="/projects">Disaster Relief & Rehabilitation</a>
            </Menu.Item>
            <Menu.Item key="youth-empowerment">
              <a href="/projects">Youth Empowerment</a>
            </Menu.Item>
            <Menu.Item key="philanthropic-support">
              <a href="/projects">Philanthropic Support to the Society</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.Item key="gallery" icon={<PictureOutlined style={{ marginRight: -4 }} />}>
          <a href="/gallery">Gallery</a>
        </Menu.Item>

        <Menu.SubMenu key="who-we-are" icon={<TeamOutlined style={{ marginRight: -4 }} />} title="Who We Are">
          <Menu.Item key="about-us" icon={<InfoCircleOutlined style={{ marginRight: -4 }} />}>
            <Link to="/about-us">About Us</Link>
          </Menu.Item>
          <Menu.Item key="mission-vision" icon={<FlagOutlined style={{ marginRight: -4 }} />}>
            <Link to="/mission-vision">Mission & Vision</Link>
          </Menu.Item>
          <Menu.Item key="honors-recognitions" icon={<TrophyOutlined style={{ marginRight: -4 }} />}>
            <Link to="/honours">Honors and Recognitions</Link>
          </Menu.Item>
          <Menu.Item key="our-partners" icon={<UsergroupAddOutlined style={{ marginRight: -4 }} />}>
            <Link to="#">Our Partners</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<PhoneOutlined style={{ marginRight: -4 }} />}>
            <Link to="#">Contact</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="guiding-force" icon={<BulbOutlined style={{ marginRight: -4 }} />}>
          <a href="/guiding-force">Our Guiding Force</a>
        </Menu.Item>

        <Menu.Item key="careers" icon={<SolutionOutlined style={{ marginRight: -4 }} />}>
          <Space>
            <a href="#" style={{ fontWeight: 'bold' }}>Careers</a>
            <Badge count="New" style={{ backgroundColor: '#white' }} />
          </Space>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
