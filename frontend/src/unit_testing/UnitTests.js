// FRONT-END UNIT TEST

// NOTE: requiring it to be run on separate page requires setting up props and file linking between components, which may cause problems.
// Therefore, we explained what was done on our service on a regular usage.

// Unit Test 1.
// Data Fetching and checking with "LOADERS GIF".
// All the pages that require API Calls have Loading GIFs added.
// They are always loaded on regular usages.
// The loaders are made with a boolean. At default the loading is set to false. When
// it needs to access the API Call, the Loading flag is set to true. (Because it takes time to fetch the data).
// While it is "loading", we use a conditional return. If it is loading, we render the loading GIF. Else, we render our original
// contents.
// Used at: Homepage (Main Carousel), Our Team (Team Members), Collections (List of Collection Items), CollectionsDetailedPage (Information about the item)

// Unit Test 2.
// General Inquiry / Purchase Inquiry - Form Handling
// Location: components/inquiry/GeneralInquiry.js & components/inquiry/PurchaseInquiry.js
// Form handling is done using Formik and yup,
// Handling minimum and maximum input case, as well as email inputs.
// It also automatically detects if the form is empty. It is done so with the method .required().
// Used at: Purchase Inquiry and General Inquiry.
