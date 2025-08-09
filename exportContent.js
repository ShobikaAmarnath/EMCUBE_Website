// exportContent.js
import fs from 'fs';
import {
  fetchServicesList,
  fetchServiceDetails,
  fetchContactDetails
} from './src/queries.js';

(async () => {
  try {
    console.log("📦 Fetching Services List...");
    const servicesList = await fetchServicesList();
    fs.writeFileSync('./src/data/servicesList.json', JSON.stringify(servicesList, null, 2));

    console.log("📦 Fetching Service Details...");
    const servicesDetails = await fetchServiceDetails();
    fs.writeFileSync('./src/data/servicesDetails.json', JSON.stringify(servicesDetails, null, 2));

    console.log("📦 Fetching Contact Details...");
    const contactDetails = await fetchContactDetails();
    fs.writeFileSync('./src/data/contact.json', JSON.stringify(contactDetails, null, 2));

    console.log("✅ Export completed!");
  } catch (error) {
    console.error("❌ Export failed:", error);
  }
})();
