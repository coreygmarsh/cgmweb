import React from 'react';
import PackageInfoCards from './PackageInfoCards';  // Ensure the path matches where your PackageCard is saved

const PackagesOverview = ({ selectedPackage }) => {
  const packages = [
    {
      name: "Basic Package",
      cost: 900,
      features: [
        "1080p resolution",
        "(5) Revisions",
        "1 simultaneous request max",
        "(1) 15 min consultation",
        "Motion Graphics"
      ],
      monthlyOutput: "1 Product Video, 1 Explainer Video, 1 Founders Video"
    },
    {
      name: "Professional Package",
      cost: 1500,
      features: [
        "4k resolution",
        "(10) Revisions",
        "2 simultaneous requests max",
        "(2) 30 mins consultations",
        "Motion Graphics"
      ],
      monthlyOutput: " 1 Testimonial, 1 Founders Video, 2 Event Videos"
    },
    {
      name: "Enterprise Package",
      cost: "Call to find out" ,
      features: [
        "4k resolution",
        "Unlimited Revisions",
        "4 simultaneous requests max",
        "(4) 60 minute conferences",
        "Motion Graphics",
        "2D/3D animation"
      ],
      monthlyOutput: " 1 Product Video, 1 Founders Video, 10 commercials"
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