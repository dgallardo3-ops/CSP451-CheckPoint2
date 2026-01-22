# Database Connection (Checkpoint)

This project uses a fake in-memory database connection for learning purposes.

The database module reads configuration from environment variables and exposes
a simple `connect()` function. A real database can be integrated later without
changing the rest of the application.
