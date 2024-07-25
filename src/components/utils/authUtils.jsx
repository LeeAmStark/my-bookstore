export const isTokenExpired = (token) => {
    if (!token) return true;
    const decoded = JSON.parse(atob(token.split('.')[1]));
    const exp = decoded.exp * 1000; // Convert to milliseconds
    return Date.now() >= exp;
  };
  