"use client";
import SmallButton from "@/components/SmallButton";

export default function Pricing() {
  const plans = [
    {
      name: "stater",
      price: "0",
      features: ["Basic Resume Builder", "Single Template", "PDF Export"],
    },
    {
      name: "Pro",
      price: "9.99",
      features: [
        "AI Resume Suggestions",
        "Multiple Templates",
        "ATS Score Insights",
        "Custom Branding",
        "Export as PDF & DOCX",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-black">
      <h1 className="text-4xl font-bold text-sky-500 mb-6">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="p-6 bg-black rounded-xl shadow-md  text-center w-80"
          >
            <h2 className="text-2xl font-semibold ">{plan.name}</h2>
            <p className="text-3xl font-bold text-sky-500 my-3">${plan.price}/month</p>
            <ul className=" mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <SmallButton name="Get Started" />
          </div>
        ))}
      </div>
    </div>
  );
}
