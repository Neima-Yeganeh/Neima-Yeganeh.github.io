import React, { useState } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar({ activeTab }) {
  function DataTabs({ data }) {
    const [selectedTab, setSelectedTab] = useState(activeTab);

    const handleTabChange = (index) => {
      setSelectedTab(data[index].url.toLowerCase());
    };

    return (
      <Tabs
        className="tabs"
        align="center"
        onChange={handleTabChange}
        index={data.findIndex((tab) => tab.url.toLowerCase() === selectedTab)}
      >
        <TabList>
          {data.map((tab, index) => (
            <Link reloadDocument to={tab.url} key={index}>
              <Tab _hover={{ bg: "#E2E8F0", color: "#1A202C" }}>
                {tab.label}
              </Tab>
            </Link>
          ))}
        </TabList>
      </Tabs>
    );
  }
  const tabData = [
    {
      label: "About",
      url: "/",
    } /* add each tab one by one here**
    {
      label: "Projects",
      url: "/projects/",
    },
    {
      label: "Shop",
      url: "/shop/",
    },
    {
      label: "Contact Me",
      url: "/contactme/",
    },*/,
  ];

  return (
    <div className="Navbar">
      <DataTabs data={tabData} />
    </div>
  );
}

export default Navbar;
