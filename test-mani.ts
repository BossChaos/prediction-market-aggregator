import { fetchManifold } from './src/scrapers/prediction-market.ts';

async function test() {
  console.log('Testing fetchManifold directly...');
  try {
    // Call the raw function with explicit params
    const res = await fetchManifold('/markets', { limit: '2' });
    console.log('Success:', JSON.stringify(res).substring(0, 200));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}
test();
