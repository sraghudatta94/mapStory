import React, { useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  FlagOutlined,
  ExpandOutlined,
} from "@ant-design/icons";
import { Badge, Button, Divider, Layout, PageHeader, Timeline } from "antd";
import { Footer } from "antd/lib/layout/layout";
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

import { Location, HomePageOutletProps } from "../types";
import { diffInDays, getTripDateLabel } from "../utils/date-utils";
import { getTripTypeLabel } from "../utils/labels";

const { Sider } = Layout;

interface LocationSiderProps {}

const LocationSider:React.FC<LocationSiderProps> = () => {
  const navigate = useNavigate();
  const { trip, selectedLocation } = useOutletContext<HomePageOutletProps>();

  useEffect(() => {
    // it happens if location list is too long and if user click on any of marker
    // so we zoom to location but we also want to scroll to that location in sidebar as well
    // so user can see that exact clicked location in side bar as well
    // this only happens if location item in timeline is not visible due to scroll position
    if(selectedLocation?.location) {
      const node = document.getElementById(`${selectedLocation?.location.id}-timeline-item`);
      if(node) {
        scrollIntoView(node, {
          behavior: 'smooth',
          scrollMode: 'if-needed',
        });
      }
    }
  }, [selectedLocation]);

  // if there is no trip and user land on this route show nothings
  // its will not happen likely
  if (!trip) {
    return null;
  }

  return (
    <Sider className="app-sider location-list-sider" width={340}>
      <PageHeader
        onBack={() => {
          navigate("/");
        }}
        title={trip.title}
        extra={[<Badge count={getTripTypeLabel(trip.type)} style={{ background: "green" }} />]}
      >
        {trip.description}
      </PageHeader>
      <div className="location-list">
        <Timeline>
          {trip.locations.map((location: Location) => {
            return (
              <Timeline.Item
                key={location.id}
                color={
                  selectedLocation?.location?.id === location.id
                    ? "green"
                    : "blue"
                }
                dot={
                  selectedLocation?.location?.id === location.id ? (
                    <CheckCircleOutlined className="timeline-icon timeline-icon-selected" />
                  ) : (
                    <FlagOutlined className="timeline-icon"/>
                  )
                }
              >
                <div className="location-title" id={`${location.id}-timeline-item`}>
                  <Link to={`/trip/${trip.id}/${location.id}`} style={{color: selectedLocation?.location?.id === location.id ? 'green' : ''}}>
                    {location.title}
                  </Link>{" "}
                  - {diffInDays(location.visitStartDate, location.visitEndDate)}
                </div>
                <div>{location.description}</div>
                <div>
                  Start Date:{" "}
                  <strong>{getTripDateLabel(location.visitStartDate)}</strong>
                </div>
                <div>
                  End Date:{" "}
                  <strong>{getTripDateLabel(location.visitEndDate)}</strong>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
      <Footer>
        <Button
          disabled={!selectedLocation?.previousLocation}
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={() => {
            navigate(
              `/trip/${trip.id}/${selectedLocation?.previousLocation?.id}`
            );
          }}
        />
        <Divider type="vertical" />
        <Button
          shape="circle"
          icon={<ExpandOutlined />}
          size="large"
          onClick={() => {
            navigate(`/trip/${trip.id}`);
          }}
        />
        <Divider type="vertical" />
        <Button
          disabled={!selectedLocation?.nextLocation}
          shape="circle"
          icon={<ArrowRightOutlined />}
          size="large"
          onClick={() => {
            navigate(`/trip/${trip.id}/${selectedLocation?.nextLocation?.id}`);
          }}
        />
      </Footer>
    </Sider>
  );
}

export default LocationSider;
