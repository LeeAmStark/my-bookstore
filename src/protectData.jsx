export default ProtectData = async () => {
  const token = localStorage.getItem("jwt");

  try {
    const response = await axios.get(`${back_end_port}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Protected data: ", response.data);
  } catch (error) {
    console.error("Error fetching protected data: ", error.response.data);
  }
};
