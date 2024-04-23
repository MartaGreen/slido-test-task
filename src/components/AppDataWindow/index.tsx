import React, { useEffect } from "react";
import { AppDataWindowT } from "./types";
import { Box, Stack } from "@mui/material";

function AppDataWindow({ apphost, version, os }: AppDataWindowT) {
  useEffect(() => {
    console.log(`${apphost}: ${version} ${os}`);
  }, [apphost, version, os]);

  return (
    <Stack
      sx={{
        minWidth: "200px",
        maxWidth: "400px",
      }}
      position="absolute"
      bottom={15}
      left={15}
      spacing={0.5}
    >
      <Box fontSize={15}>Application Name: {apphost || "unknown"}</Box>
      <Box fontSize={15}>OS Platform: {os || "unknown"}</Box>
      <Box fontSize={15}>Version: {version || "unknown"}</Box>
    </Stack>
  );
}

export default AppDataWindow;
