import React from 'react';
import PackageInfoCards from './PackageInfoCards';  // Ensure the path matches where your PackageCard is saved

const PackagesOverview = ({ selectedPackage }) => {
  const packages = [
    {
      name: "Basic",
      cost: 900,
      features: [
        "5 Revisions per project",
        "1 simultaneous request",
        "(1) 15 min consultation",
        "Up to 4 edits per month",
        "Up to 4 minutes each",
      ],
      
    },
    {
      name: "Professional",
      cost: 1500,
      features: [
        "10 Revisions per project",
        "2 simultaneous requests",
        "(1) 30 mins consultation",
        "Up to 8 edits per month",
        "Up to 10 minutes each",
      ],
      
    },
    {
      name: "Enterprise",
      
      features: [
        "Unlimited Revisions",
        "3 simultaneous requests",
        "(1)60 minute conference",
        "Up to 15 edits per month",
        "Up to 20 minutes each",
      ],
      
    }
  ];

  const packageToShow = packages.filter(pkg => pkg.name === selectedPackage);

  return (
    <div className="packages-container h-[600px] space-y-4">
      {packageToShow.map((pkg, index) => (
        <PackageInfoCards key={index} {...pkg} />
      ))}
    </div>
  );
};

export default PackagesOverview;