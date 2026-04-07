import type { NextConfig } from "next";

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

console.log('PHASE_DEVELOPMENT_SERVER', PHASE_DEVELOPMENT_SERVER);

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = (phase: any) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('We are in a development server!!!!');
  } else {
    console.log(`We are in a ${phase} server!!!!`);
  }
}

export default nextConfig;
