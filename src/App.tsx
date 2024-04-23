import React, { useEffect, useMemo, useState } from "react";
import { Stack } from "@mui/material";

import { InitialBtn, AppDataWindow } from "./components";
import { checkForUpdates } from "./kit/version";
import UpdateWarning from "./components/UpdateWarning";

function App() {
  const [version, setVersion] = useState<string | null>(null);
  const [apphost, setApphost] = useState<string | null>(null);
  const [os, setOs] = useState<string | null>(null);
  const [isOutdated, setIsOutdated] = useState<boolean>(false);

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

  // check is the version for the current platform outdated
  useEffect(() => {
    setIsOutdated(() => checkForUpdates(os || "", version || ""));
  }, [os, version]);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        <InitialBtn msg="Getting started" />
        {isOutdated && <UpdateWarning />}
      </Stack>

      <AppDataWindow {...appData} />
    </Stack>
  );
}

export default App;
