import React, { ChangeEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FilterOutlined,
  SearchOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Input,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Layout,
  List,
  Popover,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
} from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

import { trips } from "../data";
import { Trip, TripSort, TripType } from "../types";
import { diffInDays, getTripDateLabel } from "../utils/date-utils";
import { getTripSortLabel, getTripTypeLabel } from "../utils/labels";

const { Sider } = Layout;

interface HomeSiderProps {}

const HomeSider: React.FC<HomeSiderProps> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [tripSort, setTripSort] = useState<TripSort>(TripSort.BY_DATE_ASC);
  const [typeFilter, setTypeFilter] = useState<CheckboxValueType[]>([]);

  // apply filters and sort
  const filteredTrips = useMemo(() => {
    let filteredData = trips;

    // search filter
    if (searchText.length > 0) {
      filteredData = trips.filter(
        (trip) =>
          trip.title.toLowerCase().search(searchText.toLowerCase()) !== -1 
          // if we want to search from description uncomment below line
          // || trip.description.toLowerCase().search(searchText.toLowerCase()) !== -1
      );
    }

    // filtering
    if (typeFilter.length > 0) {
      filteredData = trips.filter((trip) => typeFilter.includes(trip.type));
    }

    // sorting
    if (tripSort === TripSort.BY_DATE_ASC) {
      filteredData.sort(function (a, b) {
        return a.visitStartDate > b.visitStartDate
          ? 1
          : a.visitStartDate < b.visitStartDate
          ? -1
          : 0;
      });
    }
    if (tripSort === TripSort.BY_DATE_DESC) {
      filteredData.sort(function (a, b) {
        return a.visitStartDate < b.visitStartDate
          ? 1
          : a.visitStartDate > b.visitStartDate
          ? -1
          : 0;
      });
    }
    if (tripSort === TripSort.BY_NAME_ASC) {
      filteredData.sort(function (a, b) {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
      });
    }
    if (tripSort === TripSort.BY_NAME_DESC) {
      filteredData.sort(function (a, b) {
        return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
      });
    }

    return filteredData;
  }, [typeFilter, tripSort, searchText]);

  // type filter handling
  const onFilterCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    setTypeFilter(checkedValues);
  };

  // sort handling
  const onSortChange = (e: RadioChangeEvent) => {
    setTripSort(e.target.value as TripSort);
  };

  // on search handling
  const onSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  return (
    <Sider className="app-sider home-sider" width={340}>
      <Input
        placeholder="input search text"
        onChange={onSearch}
        suffix={<SearchOutlined />}
      />
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Popover
            trigger="click"
            placement="bottom"
            title="Choose Type"
            content={
              <Checkbox.Group onChange={onFilterCheckboxChange}>
                <List
                  size="small"
                  dataSource={Object.keys(TripType) as TripType[]}
                  renderItem={(type: TripType) => (
                    <List.Item>
                      <Checkbox key={type} value={type}>
                        {getTripTypeLabel(type)}
                      </Checkbox>
                    </List.Item>
                  )}
                />
              </Checkbox.Group>
            }
          >
            <Button className="filter-btn">
              {typeFilter.length > 0
                ? `${typeFilter.length} Filer Applied`
                : "Select Filter"}{" "}
              <FilterOutlined />
            </Button>
          </Popover>
        </Col>
        <Col span={12}>
          <Popover
            trigger="click"
            placement="bottom"
            title="Select Order"
            content={
              <Radio.Group onChange={onSortChange} defaultValue={tripSort}>
                <List
                  size="small"
                  dataSource={Object.keys(TripSort) as TripSort[]}
                  renderItem={(sort: TripSort) => (
                    <List.Item>
                      <Radio key={sort} value={sort}>
                        {getTripSortLabel(sort)}
                      </Radio>
                    </List.Item>
                  )}
                />
              </Radio.Group>
            }
          >
            <Button className="filter-btn">
              {getTripSortLabel(tripSort)} <SortAscendingOutlined />
            </Button>
          </Popover>
        </Col>
      </Row>
      <div className="trip-list-meta">
        <div>
          {filteredTrips.length === 0 &&
          (searchText !== "" || typeFilter.length > 0) ? (
            <Badge count="No trip meet the search / filter criteria." />
          ) : (
            ""
          )}
        </div>
        <Badge
          count={`${filteredTrips.length} Trip${
            filteredTrips.length > 1 ? "s" : ""
          }`}
          style={{ background: "#1890ff" }}
        />
      </div>
      <Space direction="vertical" className="trip-list">
        {filteredTrips.map((trip: Trip) => {
          return (
            <Card
              key={`card-${trip.id}`}
              title={<Link to={`/trip/${trip.id}`}>{trip.title}</Link>}
              extra={
                <Badge
                  count={getTripTypeLabel(trip.type)}
                  style={{ background: "green" }}
                />
              }
              size="small"
              actions={[
                <div>{getTripDateLabel(trip.visitStartDate)}</div>,
                <div>{trip.locations.length} Locations</div>,
                <div>{diffInDays(trip.visitStartDate, trip.visitEndDate)}</div>,
              ]}
            >
              <div>{trip.description}</div>
            </Card>
          );
        })}
      </Space>
    </Sider>
  );
}

export default HomeSider;
