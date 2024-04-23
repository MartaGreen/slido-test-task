type VersionT = { latest: string; expections: string[] };

const latestVersions = {
  win: {
    latest: "1.5.0",
    expections: [],
  },
  mac: {
    latest: "0.28.0",
    expections: ["1.5.100", "1.5.120", "1.5.123"],
  },
};
const getLastestVersions = (os: string): VersionT => {
  if (os === "mac") return latestVersions["mac"];
  if (os === "win") return latestVersions["win"];
  throw new Error("Unknown OS: " + os);
};

// compare current version (checkedVer) to the latest one (latestVer)
const compareVersions = (checkedVer: string, latestVer: VersionT): boolean => {
  if (
    checkedVer < latestVer.latest ||
    latestVer.expections.includes(checkedVer)
  )
    return true;
  return false;
};

// check if version is outdated for specific os platform
// return true if version needs update
// return false if version is up-to-date
const checkForUpdates = (os: string, version: string): boolean => {
  try {
    const latestVersion: VersionT = getLastestVersions(os);
    return compareVersions(version, latestVersion);
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

export { checkForUpdates };
