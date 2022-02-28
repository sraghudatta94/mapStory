import React, { useState } from 'react';
import { Layout, Row, Col, Divider, Checkbox, Menu, Popover, Button, List, Radio, Collapse, Badge, Space, Timeline, Avatar, Tooltip, Card, PageHeader } from 'antd';
import {
  FilterOutlined,
  SortAscendingOutlined,
  ClockCircleOutlined,
  UserOutlined,
  AntDesignOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
  HeartOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./App.css";
import Search from 'antd/lib/input/Search';
import Meta from 'antd/lib/card/Meta';

const { Header, Footer, Sider, Content } = Layout;

const MAPBOX_TOKEN = "pk.eyJ1Ijoic3JhZ2h1ZGF0dGE5NCIsImEiOiJjbDAyYWlrNDkwcWtoM2pxZ3FsdjB5MHN1In0.N21Rk1cel4lapcI_TRWrdA";

function App() {
  const [locationId, setLocationID] = useState<any>(undefined);
  console.log(locationId)
  return (
    <Layout className='app-conatiner'>
      <Header className='app-header'>
        <div className="logo">  
          <div>
            <AntDesignOutlined style={{fontSize: '32px', color: '#1990ff'}}/> 
          </div>
          <div>Trip Advice</div>
        </div>
        <div className="login-details"> 
          <div>
            <div>Hi, User</div>
            <div>user@email.com</div>
          </div>
          <Avatar size={32} icon={<UserOutlined />} />
        </div>
      </Header>
      <Layout>
        <Content className='app-map'>
        <Map
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
        </Content>
        <HomeSider />
        {/* <LocationSider /> */}
      </Layout>
    </Layout>
  );
}

const LocationSider = () => {
  return (
    <Sider className='app-sider location-list-sider' width={340}>
      <div>
        <PageHeader
          onBack={() => null}
          title="Trip Name"
          subTitle={<Badge count="Business" />}
        />
        <Divider />
        <div className="location-list">
          <Timeline>
            <Timeline.Item  color="green">
              <div className='location-title'>Luxembourg - 2 days</div>
              <div>Other Details</div>
              <div>More Details Or Images</div>
            </Timeline.Item>
            <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
              Bar-Le-Due -  1 day
            </Timeline.Item>
            <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
          </Timeline>
        </div>
      </div>
      <Footer>
          <Button shape="circle" icon={<ArrowLeftOutlined />} size="large" />
          <Divider type="vertical" />
          <Button shape="circle" icon={<ArrowRightOutlined />} size="large" />
      </Footer>
    </Sider>
  )
}

const HomeSider = () => {
  return (
    <Sider className='app-sider home-sider' width={340}>
      <Search placeholder="input search text" size="large" />
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Popover
            trigger="click" 
            placement="bottom"
            title="Choose Type"
            content={
              <Checkbox.Group>
                <List
                  size="small"
                  dataSource={['holiday', 'business', 'school']}
                  renderItem={label => (
                    <List.Item>
                      <Checkbox
                          key={label}
                          value={label}
                        >
                          {label}
                      </Checkbox>
                    </List.Item>
                  )}
                />
              </Checkbox.Group>
            }
          >
            <Button className='filter-btn'>
              Filter <FilterOutlined />
            </Button>
          </Popover>
        </Col>
        <Col span={12}>
          <Popover
            trigger="click" 
            placement="bottom"
            title="Select Order"
            content={
              <Radio.Group>
                <List
                  size="small"
                  dataSource={['Trip Date', 'A-Z']}
                  renderItem={label => (
                    <List.Item>
                      <Radio
                          key={label}
                          value={label}
                        >
                          {label}
                      </Radio>
                    </List.Item>
                  )}
                />
              </Radio.Group>
            }
          >
            <Button className='filter-btn'>
              Sort <SortAscendingOutlined />
            </Button>
          </Popover>
        </Col>
      </Row>
      <Space direction="vertical">
        <Card
          title="Us Trip"
          extra={<Badge count="School" style={{background: 'green'}}/>}
          size="small"
          actions={[
            <div>3 Locations</div>,
            <div>26 Dec 2012</div>,
            <HeartOutlined />
          ]}
        >
          <div>Trip Description</div>
        </Card>
        <Card
          size="small"
          actions={[
            <div>4 Locations</div>,
            <div>26 Dec 2016</div>,
            <HeartOutlined />
          ]}
        >
          <div>Trip Description</div>
        </Card>
      </Space>
    </Sider>
  )
}


{/* <Collapse activeKey={locationId} onChange={(key) => { setLocationID(1)}}>
            <Collapse.Panel header="Europe Trip" key="1" extra={<Badge count="School" style={{background: 'green'}}/>}>
              <Timeline>
                <Timeline.Item color="green">Luxembourg - 2 days</Timeline.Item>
                <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                  Bar-Le-Due -  1 day
                </Timeline.Item>
                <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
              </Timeline>
            </Collapse.Panel>
            <div className="location-footer-info">Visited: Dec 2012</div>
          </Collapse>
          <Collapse activeKey={locationId} onChange={(key) => setLocationID(2)} >
            <Collapse.Panel header="US Trip" key="2">
              <Timeline>
                <Timeline.Item color="green">Luxembourg - 2 days</Timeline.Item>
                <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                  Bar-Le-Due -  1 day
                </Timeline.Item>
                <Timeline.Item color="green">Bar-Le-Due -  1 day</Timeline.Item>
              </Timeline>
            </Collapse.Panel>
            <div className="location-footer-info">
              Visited: Dec 2012
              <div>
              <Avatar.Group>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
              </div>
            </div>
          </Collapse>
           */}
export default App;
