import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PortfolioCard from "./PortfolioCard";
import GraphicCard from "./GraphicCard";
import { usePortfolio } from "../context/AminContext/PortfolioContext";


 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("Websites");
  const {portfolios}=usePortfolio()
  const graphicdata=portfolios.filter(items=>items.work=='graphic design')
   const portfolioData=portfolios.filter(items=>items.work=='website')
   console.log('portfolioData',portfolioData);
   
  const data = [
    
    
    {
      label: "Websites",
      value: "Websites",
      desc: <PortfolioCard portfolioData={portfolioData}/>,
    },
    {
        label: "Graphic Design",
        value: "Graphic",
        desc:   <GraphicCard graphicDesigns={graphicdata}/>,
      },
   
  ];
  return (
    <Tabs className="" value={activeTab}>
      <TabsHeader
        className="rounded-none   mx-auto   border-blue-gray-50  "
        indicatorProps={{
          className:
            "bg-transparent   border-b-2  border-yellow-600 -z-10 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-yellow-600 font-semibold text-lg p-2 z-1 " : "text-gray-500 z-1  p-2"}
          >
            {label}
          </Tab>
        ))}
      
      </TabsHeader>
      <TabsBody className="">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}