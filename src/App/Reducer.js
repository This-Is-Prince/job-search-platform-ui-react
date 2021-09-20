const Reducer = (state, action) => {
  if (action.type === "SET_IS_DAY") {
    return {
      ...state,
      isDay: !state.isDay,
    };
  }
  if (action.type === "ADD_JOB_TYPES") {
    return {
      ...state,
      jobTypes: action.payload,
    };
  }
  if (action.type === "ADD_JOBS") {
    return {
      ...state,
      jobs: action.payload,
    };
  }
  if (action.type === "SALARY_RANGE_CHECKED") {
    return {
      ...state,
      salaryRange: state.salaryRange.map((salary) => {
        return {
          ...salary,
          isChecked:
            action.payload === salary.id ? !salary.isChecked : salary.isChecked,
        };
      }),
    };
  }
  if (action.type === "EMPLOYMENT_CHECKED") {
    return {
      ...state,
      employmentType: state.employmentType.map((employment) => {
        return {
          ...employment,
          isChecked:
            action.payload === employment.id
              ? !employment.isChecked
              : employment.isChecked,
        };
      }),
    };
  }
  if (action.type === "SENIORITY_LEVEL_CHECKED") {
    return {
      ...state,
      seniorityLevel: state.seniorityLevel.map((seniority) => {
        return {
          ...seniority,
          isChecked:
            action.payload === seniority.id
              ? !seniority.isChecked
              : seniority.isChecked,
        };
      }),
    };
  }
  if (action.type === "OPEN_JOB_SEARCH_MODAL") {
    return {
      ...state,
      isJobSearchModalOpen: !state.isJobSearchModalOpen,
    };
  }
  if (action.type === "OPEN_JOB_MODAL") {
    return {
      ...state,
      isJobModalOpen: !state.isJobModalOpen,
    };
  }
  if (action.type === "OPEN_JOB_MODAL") {
  }
  if (action.type === "ADD_SEARCH_QUERIES") {
    return {
      ...state,
      searchQueries: action.payload,
    };
  }
  if (action.type === "CHANGE_LINKS") {
    return {
      ...state,
      links: state.links.map((link) => {
        if (link.id === action.payload) {
          link.active = true;
        } else {
          link.active = false;
        }
        return link;
      }),
    };
  }
  return state;
};
export default Reducer;
