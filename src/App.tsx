import React, { useEffect, useMemo, useState } from "react";
import { Stack } from "@mui/material";

import { InitialBtn, AppDataWindow } from "./components";

function App() {
  const [version, setVersion] = useState<string | null>(null);
  const [apphost, setApphost] = useState<string | null>(null);
  const [os, setOs] = useState<string | null>(null);

  const appData = useMemo(
    () => ({ apphost, version, os }),
    [apphost, version, os]
  );

  // get current url query parametres after update
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    setVersion(searchParams.get("appVersion"));
    setApphost(searchParams.get("apphost"));
    setOs(searchParams.get("os"));
  }, []);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <InitialBtn msg="Getting started" />
      <AppDataWindow {...appData} />
    </Stack>
  );
}

export default App;
