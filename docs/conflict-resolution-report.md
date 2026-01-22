# Conflict Resolution Report (≈300 words)

1) Conflict Scenario

The merge conflict occurred in the file src/app.js when merging two feature branches into the main branch. The branches involved were feature/database-connection and feature/api-endpoints. Both branches modified the same section of the file by adding a comment above the Express application initialization. The feature/database-connection branch added a comment describing the application as database-enabled, while the feature/api-endpoints branch added a different comment describing the application as focused on API routing. Because both branches changed the same line differently, Git was unable to automatically determine which version should be kept.

2) What You Saw

During the merge process, Git displayed conflict markers directly in src/app.js. These markers included <<<<<<< HEAD, =======, and >>>>>>> feature/api-endpoints, showing the two conflicting versions of the comment. One version represented the changes from the branch already merged into main, and the other represented the incoming changes from the second branch. A screenshot was captured showing these conflict markers in the file, demonstrating that a real merge conflict occurred and required manual resolution.

3) Resolution Strategy

To resolve the conflict, I manually reviewed both changes to understand their intent. Instead of choosing one version over the other, I combined the meaning of both comments into a single, clear comment that reflected both database support and API routing. I removed all conflict markers and kept a clean, unified comment above the Express app initialization. After resolving the conflict, I ran the application using npm run dev to confirm that the server still started successfully and that no functionality was broken.

4) Prevention Methods

Merge conflicts like this can be reduced by keeping pull requests small and focused, which limits overlapping changes. Teams should communicate before modifying shared files, especially core files like application entry points. Frequently merging or rebasing feature branches from main can also help catch conflicts earlier when they are easier to resolve. Finally, avoiding unnecessary edits to the same lines and using clear ownership of files can significantly reduce the likelihood of conflicts.
