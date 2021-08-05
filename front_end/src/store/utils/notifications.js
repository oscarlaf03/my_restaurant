const dispatchNotification = {
  apiError: (dispatch) => {
    dispatch(
      'addNotification',
      {
        message: 'Ooops, something went wrong, please try again later',
        type: 'warning',
        milliseconds: 3000,
      },
      { root: true },
    );
  },
  serverError: (dispatch) => {
    dispatch(
      'addNotification',
      {
        message: 'Sorry, something went wrong, please try again later or notify our support team',
        type: 'danger',
        milliseconds: 5000,
      },
      { root: true },
    );
  },
};

export default dispatchNotification;
