/** @type {import('next').NextConfig} */
const nextConfig = {};

if (!process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID) {
  console.log('NEXT_PUBLIC_PARSE_APPLICATION_ID is missing');
} else {
  console.log(process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID);
  console.log('NEXT_PUBLIC_PARSE_APPLICATION_ID is set');
}

if (!process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY) {
  console.log('NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY is missing');
} else {
  console.log('NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY is set');
}

console.log('Available ENV keys:', Object.keys(process.env));

module.exports = nextConfig;
