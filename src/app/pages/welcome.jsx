"use client";
import React from "react";
import Image from "next/image";
import Styles from "../styles/Welcome.module.scss";
import Button from "@mui/material/Button";
import LeftIcon from "@/app/icons/LeftIcon";
import RightIcon from "@/app/icons/RightIcon";
import InvoiceIcon from "@/app/icons/InvoiceIcon";
import InvoiceProcessingIcon from "@/app/icons/InvoiceProcessingIcon";
import AccessIcon from "@/app/icons/AccessIcon";
import SettingsIcon from "@/app/icons/SettingsIcon";
import InvoiceMatchingIcon from "@/app/icons/InvoiceMatchingIcon";
import VendeorIcon from "@/app/icons/VendeorIcon";
import ChainIcon from "@/app/icons/ChainIcon";
import AuditIcon from "@/app/icons/AuditIcon";
import SmallArrowIcon from "@/app/icons/SmallArrowIcon";
import ArrowIcon from "@/app/icons/ArrowIcon";
import KredxIcon from "@/app/icons/KredxIcon";
import YouTubeIcon from "@/app/icons/YouTubeIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import LinkedInIcon from "@/app/icons/LinkedInIcon";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WhiteIcon from "@/app/icons/WhiteIcon";
import { useRouter } from "next/navigation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function Welcome() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const invoiceData = [
    {
      title: "Invoice Digitization",
      description:
        "Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency",
      icon: <InvoiceIcon />,
    },
    {
      title: "Invoice Processing  ",
      description:
        "Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO’s",
      icon: <InvoiceProcessingIcon />,
    },
    {
      title: "Centralized access and collaboration ",
      description:
        "Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready",
      icon: <AccessIcon />,
    },
    {
      title: "Advanced & Quick customizable workflows",
      description:
        "Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time",
      icon: <SettingsIcon />,
    },

    //
    {
      title: "Invoice Matching ",
      description:
        "Effortless 2 and 3 way matching with easy to understand ‘reason’ coding for users increasing efficiency & protect against fraud and duplication",
      icon: <InvoiceMatchingIcon />,
    },
    {
      title: "Integrated Vendor Management",
      description:
        "Manage vendor onboarding, documentation and payment from one place",
      icon: <VendeorIcon />,
    },
    {
      title: "Strengthen treasury & your supply chain",
      description:
        "Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX’s AP card program",
      icon: <ChainIcon />,
    },
    {
      title: "Audit ready ",
      description:
        "One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required.",
      icon: <AuditIcon />,
    },
  ];
  const bodyData = [
    {
      text1: "Increase bottom line by reducing costs and increasing efficiency",
      text2: {
        icon: <SmallArrowIcon />,
        para1:
          "Automations to increase the efficiency in both AP and AR sides.",
        para2:
          "On time follow-ups with customers enable quicker realization of revenues",
        para3: "Tools like dynamic discounting to increase the bottom line",
        para4:
          "Reduced human effort can be utilized to focus on increasing revenues",
      },
    },
    // {
    //   text1: "A tool for CFOs to analyze cash flow and simulate what-if scenarios",
    //   text2: {
    //     icon: <ArrowIcon />,
    //     para1:
    //       "Description for the second object's first paragraph.",
    //     para2:
    //       "Description for the second object's second paragraph.",
    //     para3: "Description for the second object's third paragraph.",
    //     para4:
    //       "Description for the second object's fourth paragraph.",
    //   },
    // },
    // {
    //   text1: "Use integrated financing to fulfill cash flow gaps just in time",
    //   text2: {
    //     icon: <ArrowIcon />,
    //     para1:
    //       "Description for the third object's first paragraph.",
    //     para2:
    //       "Description for the third object's second paragraph.",
    //     para3: "Description for the third object's third paragraph.",
    //     para4:
    //       "Description for the third object's fourth paragraph.",
    //   },
    // },
  ];

  const iconsData = [
    { icons: <InstagramIcon /> },
    { icons: <LinkedInIcon /> },
    { icons: <FacebookIcon /> },
    { icons: <TwitterIcon /> },
    { icons: <YouTubeIcon /> },
  ];
  function navigate(index) {
    let link = "";
    switch (index) {
      case 0:
        link = "https://www.instagram.com/kredx_social/";
        break;
      case 1:
        link =
          "https://www.linkedin.com/company/kredxindia/?originalSubdomain=in/";
        break;
      case 2:
        link = "https://www.facebook.com/KredxIndia/";
        break;
      case 3:
        link =
          "https://twitter.com/i/flow/login?redirect_after_login=%2Fkredxindia";
        break;
      case 4:
        link = "https://www.youtube.com/kredxindia";
        break;
      default:
        break;
    }

    if (link !== "") {
      window.open(link);
    }
  }

  return (
    <>
      <body>
        <div
          className="container-fluid bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/png/sec1.png')" }}
        >
          <div className="container mx-auto px-4 py-8 md:h-840 justify-center items-center relative">
            <div className="flex pt-10 pl-126">
              <Image
                src="/images/png/kred_logo.png"
                width={334}
                height={80}
                alt="Image"
              />
            </div>

            <div className="pt-133 flex justify-evenly">
              <div className="pt-7">
                <div className="w-96">
                  <h1 className="text-white font-inter font-semibold text-4xl">
                    Automate Your Finance Function
                  </h1>
                </div>
                <div className="pt-7">
                  <p className="text-white font-inter font-semibold text-4xl">
                    WITHOUT Reworking Your ERP
                  </p>
                </div>
                <div className="pt-14">
                  <Button className=" sec1btn ">Learn more</Button>
                </div>
              </div>
              <div className="">
                <Image
                  src="/images/png/main_logo.png"
                  width={334}
                  height={80}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 pt-10">
          <div className="flex justify-around items-center align-middle">
            <div className="pl-30">
              <span>
                <LeftIcon />
              </span>
            </div>
            <div className="text-center align-middle flex justify-center w-875">
              <span className="text-gray-700 text-center font-inter font-medium text-lg leading-7">
                 Only KredX’s AP Solution lets you automate and streamline your
                entire PO-to-Pay process without messing up your existing
                processes. That’s because we support all native functionality
                for 40+ ERPs
              </span>
            </div>
            <div className="pr-30">
              <span>
                <RightIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="container-fluid items-center justify-center sec2image">
          <div className="container mx-auto px-4 py-8 pt-20 flex justify-center text-center">
            <div className="w-737 flex">
              <span className="text-center font-inter font-semibold text-5xl gradient-text">
                KredX AP Automation Capabilities
              </span>
            </div>
          </div>

          <div className="container grid grid-cols-12 gap-8 mx-auto px-4 py-8">
            {invoiceData.map((item, index) => (
              <div className="col-span-3 text-center" key={index}>
                <div className="flex justify-center items-center">
                  <span>{item.icon}</span>
                </div>
                <div className="flex justify-center items-center pt-8">
                  <span className="text-blue-800 font-inter font-semibold text-base leading-5">
                    {item.title}
                  </span>
                </div>
                <div className="flex justify-center items-center pt-8">
                  <span className="text-black font-inter font-normal text-sm leading-5">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center pt-10">
            <span>
              <Button className=" sec1btns ">Request Demo</Button>
            </span>
          </div>
        </div>
        <div className="container flex  grid-cols-12 gap-8 mx-auto px-4 py-8 justify-center items-center pt-158">
          <p className="text-center font-inter text-5xl bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            The KredX CMS Advantage
          </p>
        </div>
        {bodyData.map((item, index) => (
          <div
            className="container flex grid-cols-12 pt-16 mx-auto px-4 py-8"
            key={index}
          >
            <div
              className={`col-span-6 card card-body flex justify-around w-616 md:h-115 align-middle shadow-md bg-customblued ${
                activeIndex === index ? "rounded-tl-3xl rounded-bl-3xl" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="col-span-4 flex items-center">
                <Tab
                  label={item.text1}
                  {...a11yProps(0)}
                  className="text-white font-inter text-base font-semibold leading-6"
                />
              </div>
              <div className="col-span-2 flex items-center">
                <span>
                  <WhiteIcon />
                </span>
              </div>
            </div>
            <div
              className={`col-span-6 flex justify-center card card-body rounded-tl-none rounded-br-6 rounded-bl-6 rounded-xl bg-customblues shadow-md w-528 md:h-445 relative ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="col-span-2 flex items-center absolute left-15 top-15">
                {[...Array(1)].map((_, paraIndex) => (
                  <React.Fragment key={paraIndex}>
                    <div className="unique-icon-style">{item.text2.icon}</div>
                  </React.Fragment>
                ))}
              </div>
              <div className="col-span-4 w-332 flex items-center">
                {[...Array(1)].map((_, paraIndex) => (
                  <TabPanel key={paraIndex} value={value} index={paraIndex}>
                    <p className="text-white font-inter text-base font-semibold leading-6 pt-10">
                      {item.text2.para1}
                    </p>
                    <p className="text-white font-inter text-base font-semibold leading-6 pt-10">
                      {item.text2.para2}
                    </p>
                    <p className="text-white font-inter text-base font-semibold leading-6 pt-10">
                      {item.text2.para3}
                    </p>
                    <p className="text-white font-inter text-base font-semibold leading-6 pt-10">
                      {item.text2.para4}
                    </p>
                  </TabPanel>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-customBlue p-4 container-fluid mx-auto">
          <div className="flex justify-around pl-12 align-middle text-center container mx-auto grid-cols-12 relative">
            <div className="flex col-span-6 ">
              <span>
                <KredxIcon />
              </span>
            </div>
            <div className="flex col-span-6">
              {iconsData.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="pl-4" onClick={() => navigate(index)}>
                    {item.icons}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Welcome;
