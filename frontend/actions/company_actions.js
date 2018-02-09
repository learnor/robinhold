import { fetchCompany, fetchCompanies } from '../util/company_api_util';

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const RECEIVE_COMPANY_ERRORS = 'RECEIVE_NEWS_ERRORS';

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompanyErrors = err => ({
  type: RECEIVE_COMPANY_ERRORS,
  errors: err.responseJSON
});

export const getCompany = id => dispatch => fetchCompany(id)
.then(
  company => dispatch(receiveCompany(company)),
  err => dispatch(receiveCompanyErrors(err))
);

export const getCompanies = () => dispatch => fetchCompanies()
.then(
  companies => dispatch(receiveCompanies(companies)),
  err => dispatch(receiveCompanyErrors(err))  
);
