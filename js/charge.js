  var cdscript = document.createElement('script');
  cdscript.onload = function () {
    CustomDonations.BuildForm({
      account: '61b4a968-7acc-434f-98c7-95f8896a5479',
      form: '2b6c273d-8255-49f1-b9e9-a70c21e58ad4',
      allocation: null, /* optional. Use an allocation ID, like 'AH664' (w/ quotes) to be default selected on form load */
      memberId: null, /* optional. If the current user is authenticated, you can insert their user ID, like '02943' (with quotes) */
      apiVersion: 'v1',
      interval: null, /* if null, then user must select one time or recurring (if enabled). Optionally can set to 'once', 'monthly','quarterly', or 'yearly' */
      loadingText: 'Loading Secure Form...',
      paymentVersion: 2, /*  1: for modal payment window. 2: for inline payment with Google/Apple Pay options */
      baseUrl: 'https://api.customdonations.com',
      mode: 'live' /* change to 'test' to run in test mode. Use card 4242 4242 4242 4242 for testing. */
    });
  };
  cdscript.src = "https://api.customdonations.com/v1/js/form-builder.min.js?v=" + new Date().getTime();
  document.head.appendChild(cdscript);
