import moment from "moment";
import { TPersonalInformation } from "../types";

export const name = "Ruben Dominguez";
export const position = "Front-end Developer, UI/UX Designer";
export const bio =
  "Software Developer with over 6 years’ experience in identifying web-based user interactions, along with designing and implementing a highly responsive user interfaces and components by applying ReactJS concepts. Proficient in translating designs and wire-frames into high-quality codes and writing application interfaces via JavaScript and ReactJS workflows. Monitoring, maintaining, troubleshooting, and debugging frontend components to improve overall performance.";
export const personalInformationData: TPersonalInformation[] = [
  {
    key: "College Degree",
    description: "Bachelor of Science in Information Technology",
  },
  { key: "Country", description: "USA" },
  { key: "State", description: "Florida" },
  { key: "City", description: "Orlando" },
  {
    key: "Age",
    description: moment().diff(moment(19810820, "YYYYMMDD"), "years"),
  },
];
