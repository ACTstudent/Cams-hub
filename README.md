# CAMS Release Hub

The public landing page for CAMS, a LAN-based classroom computer-laboratory monitoring system.

## Included

- Versioned server and student-client installer links for the GitHub release channel.
- HTTPS/TLS transport guidance for the CAMS server.
- UDP discovery guidance on port `5001` and SignalR on HTTPS port `5000`.
- Deployment instructions for teachers and lab administrators.

## Development

```powershell
npm install
npm run build
```

The production build is emitted to `dist/` and can be previewed with `npm run preview`.

Release URLs are centralized in `src/releaseConfig.js`. Update the release version there only when the corresponding versioned GitHub assets have been published.
