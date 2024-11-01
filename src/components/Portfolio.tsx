import { useEffect, useRef, useState } from "react";
import { supabase } from "../config/supabase";
import { toast } from "react-toastify";

interface IPortfolio {
  id: number;
  title: string;
  description: string;
  image: string;
  started_at: string;
  created_at: string;
}

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<IPortfolio[] | null>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(true);

  const fetchPortfolioList = async () => {
    let { data: Porfolio, error } = await supabase
      .from("Porfolio")
      .select("*")
      .order("order", { ascending: true });
    if (error) {
      toast.error("Error while fetching portfolios...");
    }
    setList(Porfolio);
  };

  const handleMouseEnter = () => {
    setIsScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsScrolling(true);
  };

  useEffect(() => {
    fetchPortfolioList();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isScrolling) return;

    const scrollInterval = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [list, isScrolling]);

  return (
    <>
      <div className="font-[sans-serif] p-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-5 overflow-x-auto no-scrollbar mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto"
          >
            {list &&
              list.map((d, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60"
                >
                  <img
                    src="https://readymadeui.com/Imagination.webp"
                    alt="Blog Post 1"
                    className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                    <span className="text-sm block mb-2 text-yellow-400 font-semibold">
                      {new Date(d.started_at).toDateString()}
                    </span>
                    <h3 className="text-xl font-bold text-white">{d.title}</h3>
                    <div className="mt-4">
                      <p className="text-gray-200 text-sm ">{d.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
