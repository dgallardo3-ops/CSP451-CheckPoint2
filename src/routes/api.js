const express = require("express");

const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

module.exports = { router };

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  res.json({
    message: "Login request received",
    email,
  });
});


/**
 * POST /api/login
 * Simulates a login request.
 * This is a stub endpoint for learning purposes only.
 */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required",
    });
  }

  // Simulated success response
  res.json({
    message: "Login request received",
    user: { email },
  });
});

/**
 * GET /api/users
 * Returns a sample list of users.
 * This endpoint simulates data retrieval from a database.
 */
router.get("/users", (req, res) => {
  res.json({
    users: [
      { id: 1, email: "user1@example.com" },
      { id: 2, email: "user2@example.com" },
    ],
  });
});
