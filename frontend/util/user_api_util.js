export const getUser = () => (
  $.ajax({
    method: 'GET',
    url: 'api/account'
  })
);
