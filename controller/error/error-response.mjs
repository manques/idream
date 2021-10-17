const errorResponse = (res, status, message) => {
    res.status(status).json({
      success: false,
      status,
      message,
      data: null
    });
  }
  
  
  export default errorResponse;