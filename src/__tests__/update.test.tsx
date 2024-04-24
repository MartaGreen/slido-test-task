import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

// For os=win platform, any appversion older then 1.5.0 is outdated
// For os=mac platform, any app version older then 0.28.0 && 1.5.100, 1.5.120, 1.5.123 are outdated
const testData = [
  // mac
  { version: "0.28.0", os: "mac", isOutdated: false },
  { version: "1.5.100", os: "mac", isOutdated: true },
  { version: "1.5.120", os: "mac", isOutdated: true },
  { version: "1.5.123", os: "mac", isOutdated: true },
  { version: "0.28.1", os: "mac", isOutdated: false },
  { version: "0.29.0", os: "mac", isOutdated: false },
  { version: "1.29.0", os: "mac", isOutdated: false },
  { version: "0.27.0", os: "mac", isOutdated: true },
  { version: "0.27.9", os: "mac", isOutdated: true },
  { version: "0.0.0", os: "mac", isOutdated: true },

  //windows
  { version: "1.5.0", os: "win", isOutdated: false },
  { version: "1.5.1", os: "win", isOutdated: false },
  { version: "1.5.123", os: "win", isOutdated: false },
  { version: "1.6.0", os: "win", isOutdated: false },
  { version: "2.51.0", os: "win", isOutdated: false },
  { version: "1.4.10", os: "win", isOutdated: true },
  { version: "1.3.0", os: "win", isOutdated: true },
  { version: "0.5.8", os: "win", isOutdated: true },
  { version: "0.0.0", os: "win", isOutdated: true },
  { version: "1.0.0", os: "win", isOutdated: true },

  // non-existing platform
  { version: "1.5.0", os: "winr", isOutdated: false },
  { version: "0.27.0", os: "macw", isOutdated: false },
  { version: "1.5.123", os: "winmac", isOutdated: false },
  { version: "1.5.123", os: "macwin", isOutdated: false },
];

describe("App Component", () => {
  testData.forEach(({ version, os, isOutdated }) => {
    let testMsg;
    if (isOutdated)
      testMsg = `Display update warning for version ${version} on ${os}`;
    else
      testMsg = `Do not display update warning for version ${version} on ${os}`;

    test(testMsg, () => {
      // mocking URLSearchParams to return different values according to testData
      jest
        .spyOn(URLSearchParams.prototype, "get")
        .mockImplementation((param): any => {
          if (param === "appVersion") return version;
          if (param === "os") return os;
        });

      // Render App component
      render(<App />);

      // Check if the update warning is displayed based on testData
      if (isOutdated) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(screen.getByTestId("updateWarning")).toBeInTheDocument();
      } else {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(screen.queryByTestId("updateWarning")).not.toBeInTheDocument();
      }
    });
  });
});
