export const Signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    return res.status(200).json({ message: "Signed up successfully.", username, password });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        "An error occurred while completing your request, please try again.",
    });
  }
};
