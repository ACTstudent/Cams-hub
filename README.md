# CAMS Release Hub

The public landing page for CAMS, a LAN-based classroom computer-laboratory monitoring system.

## Included

- Versioned server and student-client installer links for the GitHub release channel.
- HTTPS/TLS transport and LAN certificate guidance for the CAMS server.
- UDP discovery guidance on port `5001` and SignalR on HTTPS port `5000`.
- Deployment instructions for teachers and lab administrators.

## Current Release

The landing page currently targets [CAMS v2.5.9](https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/releases/tag/v2.5.9), the latest published release:

- [CAMS Server Setup](https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/releases/download/v2.5.9/CAMS-Server-Setup.exe)
- [CAMS Student Client](https://github.com/ACTstudent/RemoteAcessMonitoringSoftware4sale/releases/download/v2.5.9/CAMS-Client-Setup.exe)

For a cellphone hotspot, the teacher PC generates `CAMS-Server-Root.cer` on first start. Copy only that public certificate to each student PC, select it in the client installer, and use the teacher PC's Wi-Fi IPv4 address if UDP discovery is blocked by hotspot client isolation.

## Development

```powershell
npm install
npm run build
```

The production build is emitted to `dist/` and can be previewed with `npm run preview`.

Release URLs are centralized in `src/releaseConfig.js`. Update the release version there only when the corresponding versioned GitHub assets have been published.
