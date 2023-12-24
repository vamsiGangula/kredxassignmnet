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
  const [activeIndex, setActiveIndex] = React.useState(0);
const [icon ,setIcon] = React.useState(false);
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTabClick = (index) => {
    setActiveIndex(index);
    setActiveData(bodyData[index].text2);
    setIcon(true)
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
      id: 1,
      text2: [
        "Automations to increase the efficiency in both AP and AR sides.1",
        "On time follow-ups with customers enable quicker realization of revenues1",
        "Tools like dynamic discounting to increase the bottom line1",
        "Reduced human effort can be utilized to focus on increasing revenues1",
      ],
    },
    {
      text1: "Increase bottom line by reducing costs and increasing efficiency",
      id: 2,
      text2: [
        "Automations to increase the efficiency in both AP and AR sides.2",
        "On time follow-ups with customers enable quicker realization of revenues2",
        "Tools like dynamic discounting to increase the bottom line2",
        "Reduced human effort can be utilized to focus on increasing revenues2",
      ],
    },
    {
      text1: "Increase bottom line by reducing costs and increasing efficiency",
      id: 3,
      text2: [
        "Automations to increase the efficiency in both AP and AR sides.",
        "On time follow-ups with customers enable quicker realization of revenues",
        "Tools like dynamic discounting to increase the bottom line",
        "Reduced human effort can be utilized to focus on increasing revenues",
      ],
    },
  ];
  const [activedata, setActiveData] = React.useState(bodyData[0].text2);

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
                  <h1 className="text-white inter font-semibold text-4xl">
                    Automate Your Finance Function
                  </h1>
                </div>
                <div className="pt-7">
                  <p className="text-white inter font-semibold text-4xl">
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
              <span className="text-gray-700 text-center inter font-medium text-lg leading-7">
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
              <span className="text-center inter font-semibold text-5xl gradient-text">
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
                  <span className="text-blue-800 inter font-semibold text-base leading-5">
                    {item.title}
                  </span>
                </div>
                <div className="flex justify-center items-center pt-8">
                  <span className="text-black inter font-normal text-sm leading-5">
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
        <div className="container flex  grid-cols-12 gap-8 mx-auto px-4 py-8 justify-center items-center pt-81">
          <p className="text-center inter text-5xl bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            The KredX CMS Advantage
          </p>
        </div>
        <div className="container mx-auto mt-66">
          <div className="grid grid-cols-2 grid-rows-1">
            <div>
              {bodyData.map((item, index) => (
                <div
                  key={index}
                  className={`card card-body  justify-around w-616 md:h-115  shadow-md bg-customblued ${
                    activeIndex == index ? "pilsactive" : "pilsunactive"
                  }`}
                  style={{
                    marginTop: item.id == 2 ? "25px" : 0,
                    marginBottom: item.id == 2 ? "25px" : 0,
                  }}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="flex justify-center align-middle items-center md:h-115">
                    <div className="col-span-8 flex items-center">
                      <div className="w-461">{item.text1}</div>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <span>
                       {icon ? <WhiteIcon/> : <ArrowIcon/>}
                       
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lefttwo">
              {activedata.map((text, index) => (
                <React.Fragment key={index}>
               <div className="flex items-center">
               <div className="col-span-4 flex items-center"> 
                  <span><SmallArrowIcon/></span>
                  </div>
                  <div className="col-span-8 flex items-center pl-7">
                  <div className="w-332">
                <p>{text}</p>
                 </div>

                  </div>
               </div>

               
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-customBlue p-4 container-fluid mx-auto mt-113 ">
          <div className="grid-cols-2 grid-rows-1 pl-12  container mx-auto   justify-between flex">
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
