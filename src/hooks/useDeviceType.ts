import { useEffect, useState } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface DeviceInfo {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const MOBILE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1023;

function getDeviceType(width: number): DeviceType {
  if (width <= MOBILE_MAX_WIDTH) {
    return "mobile";
  }

  if (width <= TABLET_MAX_WIDTH) {
    return "tablet";
  }

  return "desktop";
}

function getDeviceInfo(width: number): DeviceInfo {
  const deviceType = getDeviceType(width);

  return {
    deviceType,
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
    width,
  };
}

export function useDeviceType(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    if (typeof window === "undefined") {
      return getDeviceInfo(TABLET_MAX_WIDTH);
    }

    return getDeviceInfo(window.innerWidth);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => setDeviceInfo(getDeviceInfo(window.innerWidth));

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceInfo;
}