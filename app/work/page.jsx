"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const categoriesWithHref = {
  "All Projects": "/work",
  Branding: "/work?category=branding",
  "Web design": "/work?category=web-design",
  "Product design": "/work?category=product-design",
  "Social network": "/work?category=social-network",
  Packaging: "/work?category=packaging",
};

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    // Add an event listener to track window width changes
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Initial setup
    handleResize();

    // Add event listener on component mount and remove it on unmount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ...

  // Handle select dropdown change
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory); // Update the selected category state with the label
    // Update URL with the formatted category using Next.js Router
    router.push(categoriesWithHref[newCategory]);
  };

  return (
    <>
      {/* ... Your existing code ... */}
      <section className="pt-[2vw] pb-[8rem] relative overflow-hidden backdrop:border-gray-900">
        {/* ... Your existing code ... */}
        {windowWidth < 1000 ? (
          // Show select dropdown below md screen (768px width)
          <div className="w-full flex items-center justify-center mt-4">
            <label htmlFor="categorySelect" className="sr-only">
              Select Category
            </label>
            <select
              id="categorySelect"
              value={selectedCategory} // <-- Set the value attribute with the selectedCategory state
              onChange={handleCategoryChange}
              className="text-[1.6vw] px-4 py-3 border-2 cursor-pointer border-gray-900 font-medium rounded-full w-full max-w-[48vw]"
            >
              {Object.keys(categoriesWithHref).map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          // Show the button set above md screen (768px width)
          <div className="items-center justify-center gap-2 hidden md:flex">
            {Object.keys(categoriesWithHref).map((label) => (
              <div
                key={label}
                className={`px-4 py-2 border-2 cursor-pointer border-gray-900 font-medium rounded-full ${
                  selectedCategory === label
                    ? "bg-black text-white"
                    : "hover:bg-gray-900 hover:text-white"
                }`}
                onClick={() => {
                  setSelectedCategory(label);
                  // Update URL with the formatted category using Next.js Router
                  router.push(categoriesWithHref[label]);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
        {/* ... Your existing code ... */}
      </section>
    </>
  );
}
