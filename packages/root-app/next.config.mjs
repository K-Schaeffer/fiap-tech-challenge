import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.publicPath = "auto";
    config.plugins.push(
      new NextFederationPlugin({
        name: "rootApp",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          landingApp:
            "landingApp@https://d3dplysmogbw6u.cloudfront.net/static/chunks/remoteEntry.js", // Use from environment variable to allow dev environment
          dashboardApp:
            "dashboardApp@https://d2iczn3dksg2b4.cloudfront.net/static/chunks/remoteEntry.js", // Use from environment variable to allow dev environment
        },
        shared: {
          // react: {
          //   singleton: true,
          //   requiredVersion: deps.react,
          // },
          // "react-dom": {
          //   singleton: true,
          //   requiredVersion: deps["react-dom"],
          // },
          // "@emotion/cache": {
          //   singleton: true,
          //   requiredVersion: "6.4.0"
          // },
          // "@emotion/styled": {
          //   singleton: true,
          //   requiredVersion: "6.4.0"
          // },
          "@mui/core-downloads-tracker": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/icons-material": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/system": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/utils": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material-pigment-css": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material-nextjs": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/styled-engine": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/private-theming": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@mui/material": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@material-ui/core": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
          "@material-ui/styles": {
            singleton: true,
            requiredVersion: "6.4.0",
          },
        }, // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
      })
    );
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
