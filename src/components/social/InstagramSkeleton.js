import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServerSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className="flex aspect-square min-h-[160px] sm:min-h-[200px] md:min-h-[300px] 3xl:min-h-[350px]"
        key={i}
      >
        <Skeleton
          containerClassName="flex-1"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    ));
};

export default ServerSkeleton;
