// This can be a typescript file as well

// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, json, excel, zip, and image files
import { readJSON, removeFile } from 'https://deno.land/x/flat/mod.ts'

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0] // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename)

// Step 2. Write a new JSON file with our filtered data
await Deno.writeTextFile("./bitcoin_rate.csv", `${json.time.updatedISO},${json.bpi.USD.rate_float},${json.bpi.GBP.rate_float},${json.bpi.EUR.rate_float},${json.bpi.CNY.rate_float}
`, {append: true});

// Step 3: Clean downloaded json
await removeFile(filename) // or await removeFile(‘btc-price.json’)
