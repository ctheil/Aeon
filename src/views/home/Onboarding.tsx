import React from "react";
const Onboarding = () => {
  return (
    <div className="col-span-12 md:col-span-9 bg-l-bg dark:bg-d-bg p-4">
      <div className="flex flex-col">
        {/* Page header */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome to Capsule
          </h1>
          <p>Let's set up your Capsule experience with these steps below.</p>
        </div>

        {/* Content blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Organization section */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Organization</h2>
            <p>Add all information about your organization to your account.</p>
            {/* Add content and links */}
          </div>

          {/* Insurance documents section */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Insurance documents</h2>
            <p>Upload the various mandatory insurance documents.</p>
          </div>

          {/* Drivers and vehicles section */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Drivers and vehicles</h2>
            <p>
              Add drivers and vehicles to begin submitting documents for them.
            </p>
            {/* Add content and links */}
          </div>

          {/* More content blocks here */}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

export const calcOnboardingProgress = (obj: { [key: string]: any }): number => {
  const keys = Object.keys(obj);
  const total = keys.length;
  let completed = 0;
  keys.forEach((k) => {
    if (obj[k]) {
      completed++;
    }
  });
  return completed / total;
};
