import { TRecommendation } from '../components/UI/Recommendations';

export const recommendations: TRecommendation[] = [
  {
    name: 'Stephen Wu',
    title: 'IT Technology Leader, NextEra Energy Solutions',
    comment: `
    Argenis has been a fantastic addition to the team and has been converted to FTE in June 2023. 
    He has been a vital component to major initiatives this year such as leading the Salesforce CRM + LAND teams 
    with standing up a regression suite. He is constantly helping and mentoring his peers with code design, 
    reviews and feedback, and has helped our team to standardize modern reporting solutions like Allure. 
    He is on track for continuing his efforts into building out production variant suites for Salesforce, 
    as well as helping integrate the latest project PALMS into the platform. 
    I am looking forward to watch him continue to grow both his technical and professional skillets and cannot wait to see 
    what exciting enhancements/ideas he will bring to the team.
    `,
    review: 5,
  },
  {
    name: 'Kenneth Hilgendorf',
    title: 'IT Senior Manger, NextEra Energy Solutions',
    comment: `
    Ken would like to give a huge shout out to @Dominguez, Argenis for his recent updates on the NEER Salesforce regression suite
    and DevOps solution. He took the initiative to redesign the architecture of our parallel execution, allowing us to take advantage
    of the new limitations from the Salesforce release this year. This resulted in a massive optimization benefit for the teams
    who run these 4+ times every week. CRM Full regression of 700+ tests cases went from taking ~2.5hours to ~1hour (60% reduction and improvement).
    LAND full regression of 550+ test cases went from ~1h45m to 35m (65% reduction and improvement).
    `,
    review: 5,
  },
];
