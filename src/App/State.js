import {
  headerLinks,
  employmentType,
  salaryRange,
  seniorityLevel,
  jobs,
  jobTypes,
  employmentTypes,
} from "../data";
const State = {
  links: headerLinks,
  isDay: true,
  isJobSearchModalOpen: false,
  isJobModalOpen: false,
  jobTypes,
  employmentType,
  salaryRange,
  seniorityLevel,
  jobs,
  employmentTypes,
  searchQueries: {
    amount: "",
    jobTypes: "",
    location: "",
    employmentType: "",
  },
};
export default State;
