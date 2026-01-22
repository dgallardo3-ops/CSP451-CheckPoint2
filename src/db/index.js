/**
 * Database module
 *
 * This module is responsible for initializing and managing
 * the application's database connection.
 *
 * Feature branch: feature/database-connection
 * For this checkpoint, a fake in-memory connection is used
 * to demonstrate structure without requiring a real database.
 */

// Load database configuration from environment variables
const DB_DRIVER = process.env.DB_DRIVER || "memory";
const DB_NAME = process.env.DB_NAME || "checkpoint_db";

/**
 * Simulate a database connection
 * In a real application, this would initialize the actual DB client
 */
function connect() {
  // This log helps confirm when the database layer is initialized
  console.log(`Connecting to database using driver: ${DB_DRIVER}`);

  // Fake connection object for checkpoint purposes
  return {
    connected: true,
    driver: DB_DRIVER,
    name: DB_NAME,
  };
}

module.exports = {
  connect,
};
